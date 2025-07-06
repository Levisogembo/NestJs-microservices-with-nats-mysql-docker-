import { IsString, IsEmail, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class createUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    userName: string
    
    @IsString()
    @IsOptional()
    displayName?: string

    @IsNotEmpty()
    @IsEmail()
    email: string
}