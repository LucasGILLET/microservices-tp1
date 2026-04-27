import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HelloServiceService } from './hello-service.service';

@Controller()
export class HelloServiceController {
  constructor(private readonly helloServiceService: HelloServiceService) {}

  @GrpcMethod('HelloService', 'SayHello')
  sayHello(data: { name: string }) {
    const message = this.helloServiceService.getHello(data.name);
    return {message};
  }
}