import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Global Validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('EN2H Booking API')
    .setDescription('The Booking Platform REST API documentation')
    .setVersion('1.0')
    .addBearerAuth() 
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 

  await app.listen(3000);
}
bootstrap();