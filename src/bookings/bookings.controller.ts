import { Controller, Get, Post, Body, Param, Put, UseGuards, Patch, Query } from '@nestjs/common';import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingStatusDto } from './dto/update-booking-status.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
    import { GetBookingsFilterDto } from './dto/get-bookings-filter.dto';

@ApiTags('Bookings')
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  // PUBLIC ENDPOINT - No Guard
  @Post()
  @ApiOperation({ summary: 'Create a new booking (Public)' })
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.create(createBookingDto);
  }

  // PROTECTED ENDPOINTS
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all bookings (with optional search & filter)' })
  findAll(@Query() filterDto: GetBookingsFilterDto) {
    return this.bookingsService.findAll(filterDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a booking by ID' })
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(id);
  }

  @Put(':id/status')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update booking status' })
  updateStatus(@Param('id') id: string, @Body() updateBookingStatusDto: UpdateBookingStatusDto) {
    return this.bookingsService.updateStatus(id, updateBookingStatusDto);
  }

  @Patch(':id/cancel')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cancel a booking' })
  cancelBooking(@Param('id') id: string) {
    return this.bookingsService.cancelBooking(id);
  }
}