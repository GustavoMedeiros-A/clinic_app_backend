import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

const port = 3000;

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  await app.listen(port, '0.0.0.0');
}
bootstrap();
