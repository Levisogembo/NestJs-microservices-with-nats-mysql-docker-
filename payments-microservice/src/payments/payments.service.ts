import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Payments } from "src/typeorm/entities/Payment";
import { Repository } from "typeorm";
import { createPaymentDto } from "./Dtos/createPayment.dto";
import {ClientProxy} from '@nestjs/microservices'
import { lastValueFrom } from "rxjs";


@Injectable()
export class paymentService{
    constructor (@InjectRepository(Payments) private paymentRepository: Repository<Payments>,
    @Inject('Nats_Service') private natsClient: ClientProxy){}  

    async createPayment({userId,...payment}:createPaymentDto){
        //connecting to the user microservice to check if there is a valid user id
        const user = await lastValueFrom(this.natsClient.send({cmd:'getUserbyID'},userId))//last value from will get the actual user's value
       // console.log(user);
       if(user){
        const newPayment = this.paymentRepository.create({...payment,user})//saving the additional payment details 
        return this.paymentRepository.save(newPayment)
       }
       return null
    }
}