import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
