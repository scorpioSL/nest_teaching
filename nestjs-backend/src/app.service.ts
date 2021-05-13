import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { CatchDataDto } from './dto/catch-data.dto';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getName(name: string): string {
    return `My name is ${name}`;
  }

  generateParagraph(body: CatchDataDto, res: Response): Response {
    let para = `My name is ${body.name} and my age is ${body.age}.My address is ${body.address}.My birthday is ${body.dob}.My NIC number is ${body.nic}`;
    return res.status(200).json(
      {
        status: 'SUCCESS',
        paragraph: para
      }
    );
  }
}
