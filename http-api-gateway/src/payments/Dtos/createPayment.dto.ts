import { IsNotEmpty, IsNumber } from "class-validator";

export class createPaymentDto {
    @IsNotEmpty()
    @IsNumber()
    amount: number

    @IsNotEmpty()
    userId: string
}