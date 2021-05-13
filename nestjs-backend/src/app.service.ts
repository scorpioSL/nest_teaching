import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getName(name: string): string {
    return `My name is ${name}`;
  }
}
