import { IsInt, IsString } from "class-validator";

export class CreateTireDto {

    @IsString()    
    name: string;

    @IsInt()
    dot: number;

    @IsString()
    usage: string;

    @IsString()
    measure: string


};
