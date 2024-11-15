import { Module } from '@nestjs/common';
import { TiresModule } from './tires/tires.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsagesModule } from './usages/usages.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "user_crud",
    password: "root",
    database: "db_crud",
    autoLoadEntities: true,
    synchronize: true,
  }), 
  UsagesModule,
  TiresModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}

