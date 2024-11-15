import { PartialType } from '@nestjs/mapped-types';
import { CreateUsageDto } from './create-usage.dto';
import { IsString } from 'class-validator';

export class UpdateUsageDto extends PartialType(CreateUsageDto) {

    @IsString()
    name: string
}
