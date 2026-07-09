import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty({ example: 'admin@example.com', description: 'User email address' })
  email!: string;

  @ApiProperty({ example: 'SuperSecretPassword123!', description: 'User password' })
  password!: string;
}