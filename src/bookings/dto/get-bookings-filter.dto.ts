import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsString } from 'class-validator';
import { BookingStatus } from '../booking.entity';

export class GetBookingsFilterDto {
  @ApiPropertyOptional({ description: 'Filter by booking status', enum: BookingStatus })
  @IsOptional()
  @IsEnum(BookingStatus)
  status?: BookingStatus;

  @ApiPropertyOptional({ description: 'Search by customer name or email' })
  @IsOptional()
  @IsString()
  search?: string;
}