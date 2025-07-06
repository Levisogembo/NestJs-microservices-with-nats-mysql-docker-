import { Module } from "@nestjs/common";
import { PaymentsMicroserviceController } from './payments.controller';
import { NatsClientModule } from "src/nats-client/nats-client.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Payments } from "src/typeorm/entities/Payment";
import { paymentService } from "./payments.service";
import { User } from "src/typeorm/entities/User";

@Module({
    imports: [
        TypeOrmModule.forFeature([Payments, User])
        ,NatsClientModule],
    providers: [paymentService],
    controllers: [PaymentsMicroserviceController]
})

export class paymentsModule{}