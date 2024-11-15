import { Module } from '@nestjs/common';
import { TiresService } from './tires.service';
import { TiresController } from './tires.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tire } from './entities/tire.entity';
import { UsagesService } from 'src/usages/usages.service';
import { UsagesModule } from 'src/usages/usages.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tire]), UsagesModule],
  controllers: [TiresController],
  providers: [TiresService, UsagesService],
})
export class TiresModule {}
