import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module'; // 1. Imported ServicesModule

@Module({
  imports: [
    // 1. Load environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Makes the variables available everywhere
    }),
    
    // 2. Configure Database Connection
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true, // IMPORTANT: Set to false in production, but great for development
      }),
    }),
    
    UsersModule,
    AuthModule,
    ServicesModule, // 2. Added ServicesModule to imports
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}