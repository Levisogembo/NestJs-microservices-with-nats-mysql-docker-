import { Body, Controller, Inject, Param, Post, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { createUserDto } from './Dtos/createUser.dto';
import { log } from 'node:console';
import { lastValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {
    constructor(@Inject('Nats_Service') private natsClient: ClientProxy){}
    @Post()
     async createUser(@Body() userData:createUserDto){ 
        //console.log(userData);
         const data = await lastValueFrom(this.natsClient.send({cmd:'Create_user'},userData))//the last value from allows you to access the actual value returned from the response
         return [{
            msg:"User created successfully",
            data
         }]    
    }

    @Get(':id')
    async getUserPaymentbyID(@Param('id') id:string){
         const userPaymentDetails = await lastValueFrom(this.natsClient.send({cmd:'getUserbyID'},{userId:id}))
         if(!userPaymentDetails) throw new HttpException("User not found",HttpStatus.NOT_FOUND)
         return userPaymentDetails
    }
}
