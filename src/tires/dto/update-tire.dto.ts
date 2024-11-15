import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateTireDto{
    @IsString() 
    @IsOptional()   
    name: string;

    @IsInt()
    @IsOptional()
    dot: number;

    @IsString()
    @IsOptional()
    usage: string;

    @IsString()
    @IsOptional()
    measure: string
}
