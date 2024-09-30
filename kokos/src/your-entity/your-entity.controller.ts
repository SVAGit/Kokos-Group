import { Body, Controller, Get, Post } from '@nestjs/common';
import { YourEntityService } from './your-entity.service';
import { CreateYourEntityDto } from './dto/create-entity.dto';
import { YourEntity } from './your-entity.entity';

@Controller('your-entity')
export class YourEntityController {
  constructor(private readonly yourEntityService: YourEntityService) {}

  @Post()
  create(@Body() createDto: CreateYourEntityDto): Promise<YourEntity> {
    return this.yourEntityService.create(createDto);
  }

  @Get()
  findAll(): Promise<YourEntity[]> {
    return this.yourEntityService.findAll();
  }
}