import { Module } from '@nestjs/common';
import { paymentsModule } from './payments/payments.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Payments } from './typeorm/entities/Payment';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',//the service name is the name of the msysql configuration in the docker yaml file
      port: 3307,
      database: 'nestjs_db',
      username: 'Levis',
      password: '1234', 
      entities: [Payments, User],
      synchronize: true //synchronize updates the database whenever there any changes made in the code
    }),
    paymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
