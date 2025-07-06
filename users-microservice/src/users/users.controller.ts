import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { createUserDto } from './Dtos/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersMicroserviceController {
  constructor(private userService: UsersService) { }

  @MessagePattern({ cmd: 'Create_user' })//it matches the arguments provided in the patterns for the http gateway controller
  async createUser(@Payload() userData: createUserDto) {
    const data = this.userService.createUser(userData)
    return data
  }

  //listening to an event from the payment microservice to check the id of the person making the payment
  //also listening from the api getway to get payments for one user 
  @MessagePattern({ cmd: 'getUserbyID' })
  async checkUserId(@Payload() data) {
    const { userId } = data
    const findUser = await this.userService.getUserById(userId)   
    return findUser || null
    
  }

  //listening to the message sent from the payments microservice
  @EventPattern('paymentSent')
  paymentCreated(@Payload() data: any) {
    console.log(data);

  }

}
