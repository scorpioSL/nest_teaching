import { Controller, Get, Param, Post, Req, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CatchDataDto } from './dto/catch-data.dto';
import { Request, Response } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/myname/:name')
  getMyName(@Param('name') name: string): string {
    return this.appService.getName(name);
  }

  @Post('/generateparagraph')
  catchPostData(@Req() req: Request, @Res() res: Response, @Body() body: CatchDataDto) {
    return this.appService.generateParagraph(body,res);
  }


}