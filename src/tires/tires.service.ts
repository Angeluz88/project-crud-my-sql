import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tire } from './entities/tire.entity';
import { Usage } from 'src/usages/entities/usage.entity';

@Injectable()
export class TiresService {

  constructor(
    @InjectRepository(Tire)
    private readonly tireRepository: Repository<Tire>, 

    @InjectRepository(Usage)
    private readonly usageRepository: Repository<Usage>
  ){}


 async create(createTireDto: CreateTireDto) {
  const usage = await this.usageRepository.findOneBy({name: createTireDto.usage});

  if(!usage){
    throw new BadRequestException('type not found')
  }
   return await this.tireRepository.save({...createTireDto, usage,

   });
  }

 async findAll() {
    return await this.tireRepository.find();
  }

 async findOne(measure: string) {
    return await this.tireRepository.findOneBy({measure});
  }

  async update(id: number, updateTireDto: UpdateTireDto) {
   const tire = await this.tireRepository.findOneBy({id});

   if (!tire) {
    throw new BadRequestException('Cat not found');
  }

  let usage;
  if (updateTireDto.usage){
    usage = await this.usageRepository.findOneBy({
      name: updateTireDto.usage,
    });

    if(!usage){
      throw new BadRequestException('type not found')
    }
  }
return await this.tireRepository.save({
  ...tire,
  ...UpdateTireDto,
  usage,
});
}


  async remove(id: number) {
    return await this.tireRepository.softDelete({id});
  }
}
