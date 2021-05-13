
import * as uuid from 'uuid';

export class Customer {
    id: string;
    name: string;
    age: number;
    nic: string;

    constructor() {
        this.id = uuid.v4();
        this.name = 'Amila';
        this.age = Math.random();
        this.nic = uuid.v4();;
    }

}