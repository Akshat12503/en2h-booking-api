import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // This connects the entity to the module
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // We export this so our upcoming Auth module can find users
})
export class UsersModule {}