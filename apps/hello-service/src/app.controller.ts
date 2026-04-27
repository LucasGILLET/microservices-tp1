import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('HelloService', 'SayHello')
  sayHello(data: { name: string }) {
    return {
      message: `Hello ${data.name}`,
    };
  }
}