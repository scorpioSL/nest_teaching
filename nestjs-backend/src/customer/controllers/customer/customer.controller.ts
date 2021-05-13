import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomerService } from '../../services/customer/customer.service';

@Controller('customer')
export class CustomerController {

    constructor(private customerService: CustomerService) { }

    @Get()
    helloCustomer(): string {
        return this.customerService.sayHelloCustomer();
    }

    @Get('/getAll')
    getAll(@Req() req: Request, @Res() res: Response): Response {
        return this.customerService.getAllCustomers(res);
    }

    @Get('/findById/:id')
    getById(@Param('id') id: string, @Req() req: Request, @Res() res: Response): Response {
        return this.customerService.getById(id, res);
    }
}
