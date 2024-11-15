import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiresService } from './tires.service';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';

@Controller('tires')
export class TiresController {
  constructor(private readonly tiresService: TiresService) {}

  @Post()
  create(@Body() createTireDto: CreateTireDto) {
    return this.tiresService.create(createTireDto);
  }

  @Get()
  findAll() {
    return this.tiresService.findAll();
  }

  @Get(':measure')
  findOne(@Param('measure') measure: string) {
    return this.tiresService.findOne(measure);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTireDto: UpdateTireDto) {
    return this.tiresService.update(+id, updateTireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tiresService.remove(+id);
  }
}
