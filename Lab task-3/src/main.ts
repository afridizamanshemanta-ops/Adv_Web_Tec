import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Task 2: Global ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,             // extra properties strip kore
      forbidNonWhitelisted: true,  // extra property thakle 400 error dey
      transform: true,             // body ke DTO class instance + type convert kore
    }),
  );

  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
}
bootstrap();
