import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class UserDTO {
    @IsNumber()
    id?: number;

    @IsNotEmpty()
    @IsString()
    first_name: string;
    @IsNotEmpty()
    @IsString()
    last_name: string;
    @IsNotEmpty()
    @IsString()
    address: string;
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsNotEmpty()
    @IsString()
    contact_number: string;
}