import { IsString } from "class-validator";

export class CreateUsageDto {

    @IsString()
    name: string;
}
