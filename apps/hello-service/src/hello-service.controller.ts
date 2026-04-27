import { Controller, Get } from '@nestjs/common';
import { HelloServiceService } from './hello-service.service';

@Controller()
export class HelloServiceController {
  constructor(private readonly helloServiceService: HelloServiceService) {}

  @Get()
  getHello(): string {
    return this.helloServiceService.getHello();
  }
}
