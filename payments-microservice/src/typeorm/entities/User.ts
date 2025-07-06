import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payments } from "./Payment";


@Entity({name:'users'})
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable:false,unique:true})
    userName: string

    @Column({nullable: false})
    email:string

    @Column({nullable: true})
    displayName?: string

    //defining a one to many relationship where one user is related to many payments
    @OneToMany(()=>Payments,(payment)=>payment.user)
    @JoinColumn()
    payments: Payments[]

}