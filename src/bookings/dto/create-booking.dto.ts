import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsUUID, IsOptional, Matches } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  customerName!: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  customerEmail!: string;

  @ApiProperty({ example: '+1234567890' })
  @IsString()
  @IsNotEmpty()
  customerPhone!: string;

  @ApiProperty({ example: 'uuid-of-the-service' })
  @IsUUID()
  serviceId!: string;

  @ApiProperty({ example: '2026-12-01', description: 'YYYY-MM-DD format' })
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'bookingDate must be in YYYY-MM-DD format' })
  bookingDate!: string;

  @ApiProperty({ example: '14:30', description: 'HH:MM format' })
  @IsString()
  @Matches(/^\d{2}:\d{2}$/, { message: 'bookingTime must be in HH:MM format' })
  bookingTime!: string;

  @ApiPropertyOptional({ example: 'Please call upon arrival' })
  @IsOptional()
  @IsString()
  notes?: string;
}