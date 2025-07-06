import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientGrpcProxy, ClientProxy } from '@nestjs/microservices';
import { createPaymentDto } from './Dtos/createPayment.dto';
import { lastValueFrom } from 'rxjs';

@Controller('payments')
export class PaymentsController {
    constructor(@Inject('Nats_Service') private natsClient: ClientProxy){}

    @Post()
    async createPayment(@Body() paymentDetails:createPaymentDto){
    await lastValueFrom (this.natsClient.emit('Create_payment',paymentDetails))
      return {msg: "Payment made successfully"}
       
    }
}
