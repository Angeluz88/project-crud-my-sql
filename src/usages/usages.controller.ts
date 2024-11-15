import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsagesService } from './usages.service';
import { CreateUsageDto } from './dto/create-usage.dto';
import { UpdateUsageDto } from './dto/update-usage.dto';

@Controller('usages')
export class UsagesController {
  constructor(private readonly usagesService: UsagesService) {}

  @Post()
  create(@Body() createUsageDto: CreateUsageDto) {
    return this.usagesService.create(createUsageDto);
  }

  @Get()
  findAll() {
    return this.usagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('name') name: string) {
    return this.usagesService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUsageDto: UpdateUsageDto) {
    return this.usagesService.update(+id, updateUsageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usagesService.remove(+id);
  }
}
