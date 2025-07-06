import { Module } from "@nestjs/common";
import { UsersMicroserviceController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { Payments } from "src/typeorm/entities/Payments";
import { NatsClientModule } from "src/nats-client/nats-client.module";


@Module({
    imports:[
        NatsClientModule,
        TypeOrmModule.forFeature([User, Payments])//while using the for feature in other modules, you pass in an array of tables/entities you want to access
    ],
    providers:[UsersService],
    controllers:[UsersMicroserviceController]
})

export class usersModule{}

