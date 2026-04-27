import { Controller, Get, Param, OnModuleInit } from '@nestjs/common';
import { Client, Transport } from '@nestjs/microservices';
import { join } from 'path';
import type { ClientGrpc } from '@nestjs/microservices';

@Controller()
export class AppController implements OnModuleInit {
  private helloService;

  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'hello',
      protoPath: join(__dirname, '../../../libs/proto/src/hello.proto'),
      url: 'hello-service:5000',
    },
  })
  client: ClientGrpc;

  onModuleInit() {
    this.helloService = this.client.getService('HelloService');
  }

  @Get(':name')
  sayHello(@Param('name') name: string) {
    return this.helloService.sayHello({ name });
  }
}