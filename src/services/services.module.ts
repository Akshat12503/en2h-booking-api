import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { Service } from './service.entity';
import { AuthModule } from '../auth/auth.module'; // Needed to protect routes

@Module({
  imports: [
    TypeOrmModule.forFeature([Service]), 
    AuthModule // Import AuthModule to use the JWT Guard
  ],
  providers: [ServicesService],
  controllers: [ServicesController],
  exports: [ServicesService],
})
export class ServicesModule {}