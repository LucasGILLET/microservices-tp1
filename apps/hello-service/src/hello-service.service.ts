import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloServiceService {
  getHello(name: string): string {
    return `Hello, ${name}!`;
  }
}
