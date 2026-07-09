import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(authCredentialsDto: AuthCredentialsDto): Promise<{ message: string }> {
    const { email, password } = authCredentialsDto;

    // 1. Check if user already exists
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // 2. Hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // 3. Save the user
    await this.usersService.create(email, passwordHash);

    return { message: 'User successfully registered' };
  }

  async login(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialsDto;

    // 1. Find user
    const user = await this.usersService.findByEmail(email);

    // 2. Check if user exists and password matches
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      // 3. Generate JWT Token
      const payload = { email: user.email, sub: user.id };
      const accessToken = this.jwtService.sign(payload);
      
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}