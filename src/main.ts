import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('EN2H Booking API')
    .setDescription('The Booking Platform REST API documentation')
    .setVersion('1.0')
    .addBearerAuth() // This adds the authorization lock icon for Phase 3!
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  
  // This sets the URL path to access Swagger (http://localhost:3000/api)
  SwaggerModule.setup('api', app, document); 

  await app.listen(3000);
}
bootstrap();