import { IsNotEmpty, IsString } from 'class-validator';

export class CreateYourEntityDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}