import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateYourEntityDto } from './dto/create-entity.dto';
import { YourEntity } from './your-entity.entity';

@Injectable()
export class YourEntityService {
  constructor(
    @InjectRepository(YourEntity)
    private yourEntityRepository: Repository<YourEntity>,
  ) {}

  async create(createDto: CreateYourEntityDto): Promise<YourEntity> {
    const yourEntity = this.yourEntityRepository.create(createDto);
    return await this.yourEntityRepository.save(yourEntity);
  }

  async findAll(): Promise<YourEntity[]> {
    return await this.yourEntityRepository.find({
      where: { deletedAt: null },
      order: { createdAt: 'DESC' },
    });
  }
}