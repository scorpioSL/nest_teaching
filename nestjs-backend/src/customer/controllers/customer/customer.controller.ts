import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDTO } from 'src/customer/dto/user.dto';
import { User } from 'src/db/entities/user.entity';
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

    @Get('/save')
    async saveUser(@Req() req: Request, @Res() res: Response) {
        const user = new User();
        user.first_name = 'Manisha';
        user.last_name = 'Ekanayake';
        user.password = '124125125';
        user.address = 'Matale';
        user.contact_number = '0720949733';
        await user.save();
        return res.status(200).json(user);
    }

    @Post('/createuser')
    async createUser(@Req() req: Request, @Res() res: Response, @Body() body: UserDTO) {
        const user = new User();
        user.first_name = body.first_name;
        user.last_name = body.last_name;
        user.password = body.password;
        user.address = body.address;
        user.contact_number = body.contact_number;
        await user.save();
        return res.status(200).json(user);
    }

    @Put('/updateuser')
    async updateUser(@Req() req: Request, @Res() res: Response, @Body() body: UserDTO) {
        const user = await User.findOne(body.id);
        if (body.first_name)
            user.first_name = body.first_name;
        if (body.last_name)
            user.last_name = body.last_name;
        if (body.password)
            user.password = body.password;
        if (body.address)
            user.address = body.address;
        if (body.contact_number)
            user.contact_number = body.contact_number;
        await user.save();
        return res.status(200).json(user);
    }

    @Delete('/deleteuser')
    async deleteUser(@Req() req: Request, @Res() res: Response, @Body() body: { id: number }) {
        const user = await User.delete(body.id);
        return res.status(200).json(user);
    }

}
