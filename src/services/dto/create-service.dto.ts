import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Min, IsOptional, IsBoolean } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({ example: 'Haircut', description: 'The title of the service' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ example: 'A standard men\'s haircut', description: 'Detailed description' })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({ example: 30, description: 'Duration in minutes' })
  @IsNumber()
  @Min(1)
  duration!: number;

  @ApiProperty({ example: 25.50, description: 'Price of the service' })
  @IsNumber()
  @Min(0)
  price!: number;

  @ApiPropertyOptional({ example: true, description: 'Is the service currently available?' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}