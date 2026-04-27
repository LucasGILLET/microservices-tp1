import { Module } from '@nestjs/common';
import { HelloServiceController } from './hello-service.controller';
import { HelloServiceService } from './hello-service.service';
import { AppModule } from './app/app.module';

@Module({
  imports: [AppModule],
  controllers: [HelloServiceController],
  providers: [HelloServiceService],
})
export class HelloServiceModule {}
