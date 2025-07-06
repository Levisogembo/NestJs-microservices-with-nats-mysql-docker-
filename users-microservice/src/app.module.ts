import { Module } from '@nestjs/common';
import { usersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from './typeorm/entities/User';
import { Payments } from './typeorm/entities/Payments';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',//the service name is the name of the msysql configuration in the docker yaml file
      port: 3307,
      database: 'nestjs_db',
      username: 'Levis',
      password: '1234', 
      entities: [User,Payments],
      synchronize: true //synchronize updates the database whenever there any changes made in the code
    }),
    usersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
