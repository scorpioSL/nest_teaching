import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { Customer } from 'src/customer/models/customer.model';

@Injectable()
export class CustomerService {


    customers: Array<Customer> = [
        { "id": "d467bf6f-4861-44bc-9626-fe72d85ea55f", "name": "Amila", "age": 0.6022260977238076, "nic": "7b660b73-938d-4164-9cd1-64b586cb2111" },
        { "id": "e611e64e-5b26-4226-a074-9831ca3d711e", "name": "Kasun", "age": 0.7207671748263484, "nic": "59319cc7-1595-44dc-a8b2-41fd48298132" },
        { "id": "f05a4be3-b49b-4786-a47c-c23b99ee51f0", "name": "Supun", "age": 0.23187829272363936, "nic": "c19f0017-9672-445d-bfc5-0964b256d306" },
        { "id": "0387aea0-0e0e-413a-b0af-f25bf721ce99", "name": "bryan", "age": 0.8025298484909331, "nic": "077f5894-5656-4561-911c-54857213e3d0" },
        { "id": "26600c97-18bb-4f66-96a8-306c7e522a02", "name": "ramith", "age": 0.27022596588907466, "nic": "b53e6863-ac27-43c1-a7de-4bedbfe07fa8" },
        { "id": "e31e33c8-f0cb-4559-91e0-2acba6137485", "name": "malith", "age": 0.20216116105358628, "nic": "9ad4a12d-7761-47f2-bae6-3202560a11a5" },
        { "id": "c837df0c-e7dc-4274-8ca5-1cdd52318909", "name": "dilan", "age": 0.8301336329582949, "nic": "959767e0-aa15-41d1-8bb7-484ccfebff41" },
        { "id": "71fb1022-9a79-4e63-9cbb-12fbf98e7f8f", "name": "hasitha", "age": 0.649133474301558, "nic": "ae72e098-d7ab-4854-874b-dbe9ea2a09a0" },
        { "id": "f1c49b74-1ff3-4fcf-b2a3-4f4d95cf84cd", "name": "amith", "age": 0.44840669650294784, "nic": "d130bf07-a3a7-4642-9cd1-4bb2135444ef" },
        { "id": "6ce6f519-811e-466f-b28f-131f046c2684", "name": "kalum", "age": 0.2957160022692009, "nic": "ea798fa0-aa18-45ce-8bd3-5ae992f8e9c2" }];

    constructor() {
    }

    sayHelloCustomer(): string {
        return 'Hello Customer 2';
    }

    getAllCustomers(res: Response): Response {
        return res.status(200).json({
            status: "SUCCESS",
            results: this.customers
        });
    }

    getById(id: string, res: Response): Response {
        let customer = this.customers.find(
            (value: Customer) => value.id == id
        );
        if (customer)
            return res.status(200).json({ status: "SUCCESS", result: customer })
        else
            return res.status(404).json({ status: "FAIL", message: `Customer with id ${id} not found!` })
    }
}
