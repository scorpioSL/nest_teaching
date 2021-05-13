import { IsNotEmpty, IsNumber, IsString, IsEmail } from 'class-validator';

export class CatchDataDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    @IsNumber()
    age: number;
    @IsNotEmpty()
    address: string;
    @IsNotEmpty()
    dob: string;
    @IsNotEmpty()
    nic: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
}