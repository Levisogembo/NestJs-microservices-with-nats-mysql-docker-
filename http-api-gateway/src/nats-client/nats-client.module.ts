import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices'


@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'Nats_Service',//you can name this how you want
                transport: Transport.NATS,
                options: {
                    servers: ['nats://nats']//the number of nats servers you want to connect to
                }
            }
        ])
    ],
    exports: [
        ClientsModule.register([
            {
                name: 'Nats_Service',//you can name this how you want
                transport: Transport.NATS,
                options: {
                    servers: ['nats://nats']//the number of nats servers you want to connect to
                }
            }
        ])
    ]
})
export class NatsClientModule { }
