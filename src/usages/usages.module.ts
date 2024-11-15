import { Module } from '@nestjs/common';
import { UsagesService } from './usages.service';
import { UsagesController } from './usages.controller';
import { Usage } from './entities/usage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Usage])],
  controllers: [UsagesController],
  providers: [UsagesService],
  exports: [TypeOrmModule]
})
export class UsagesModule {}
