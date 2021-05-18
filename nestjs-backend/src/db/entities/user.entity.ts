import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class User extends Base {
    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    address: string;

    @Column()
    password: string;

    @Column()
    contact_number:string;
}