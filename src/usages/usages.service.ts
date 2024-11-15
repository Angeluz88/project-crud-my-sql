import { Injectable } from '@nestjs/common';
import { CreateUsageDto } from './dto/create-usage.dto';
import { UpdateUsageDto } from './dto/update-usage.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usage } from './entities/usage.entity';

@Injectable()
export class UsagesService {

constructor(

  @InjectRepository(Usage)
  private readonly UsageRepository: Repository<Usage>
){}

 async create(createUsageDto: CreateUsageDto) {
  return await this.UsageRepository.save(createUsageDto);
  }

 async findAll() {
  return await this.UsageRepository.find();
  }

  async findOne(name: string) {
    return await this.UsageRepository.findOneBy({name});
  }

 async update(id: number, updateUsageDto: UpdateUsageDto) {
    return `This action updates a #${id} type`;
  }

 async remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
