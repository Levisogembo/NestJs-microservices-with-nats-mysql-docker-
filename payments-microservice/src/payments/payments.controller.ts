import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { createPaymentDto } from './Dtos/createPayment.dto';
import { paymentService } from './payments.service';

@Controller('payments')
export class PaymentsMicroserviceController {
    constructor (@Inject('Nats_Service') private natsClient: ClientProxy, 
    private paymentService: paymentService){}//you inject the nats client so you can communicate with other microservices
    
    @EventPattern('Create_payment')//the event pattern decorator is applied to event based communication that uses pub/sub
    async createPayment(@Payload() paymentDetails: createPaymentDto){
        const payment = await this.paymentService.createPayment(paymentDetails)
        if(payment)  this.natsClient.emit('paymentSent',payment)
        //return payment --  since this uses an emit method of transmission, there is no need to retun anything ideal for pub/sub
        
    }   
}
