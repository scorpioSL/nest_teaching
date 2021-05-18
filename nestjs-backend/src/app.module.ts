import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { DbConfig } from './db/config/db-config';

@Module({
  imports: [TypeOrmModule.forRoot(DbConfig.getConfig()), CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
