import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity({name: 'payments'})
export class Payments{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('float')
    amount: number

     //defining a many to one relationship whereby many payments can belong to one user
     @ManyToOne(()=>User,(user)=>user.payments)
     user: User
}