import { NestFactory } from '@nestjs/core';
import { HelloServiceModule } from './hello-service.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(HelloServiceModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hello',
      protoPath: join(__dirname, '../../../libs/proto/src/hello.proto'),
      url: '0.0.0.0:5000',
    },
  });

  await app.listen();
}
bootstrap();