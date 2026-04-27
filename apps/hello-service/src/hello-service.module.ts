import { Module } from '@nestjs/common';
import { HelloServiceController } from './hello-service.controller';
import { HelloServiceService } from './hello-service.service';

@Module({
  imports: [],
  controllers: [HelloServiceController],
  providers: [HelloServiceService],
})
export class HelloServiceModule {}
