import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { createUserDto } from './Dtos/createUser.dto';
import {ClientProxy, RpcException} from '@nestjs/microservices'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository <User>
   ){}

    createUser(userData:createUserDto){
       const data = this.userRepository.create(userData)
       return this.userRepository.save(data)
    }

    async getUserById(userId: string){
        const user = await this.userRepository.findOne({where:{id:userId},relations:['payments']})//the relations arguments returns any relationships mapped in the entities to other entities
        //if(!user) throw new RpcException("Invalid user Id")
        return user 
    }




}
