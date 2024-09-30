import { Injectable } from '@nestjs/common';
import { YourEntity } from './your-entity.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as faker from 'faker';

@Injectable()
export class Seeder {
  constructor(
    @InjectRepository(YourEntity)
    private yourEntityRepository: Repository<YourEntity>,
  ) {}

  async seed() {
    for (let i = 0; i < 100; i++) {
      const yourEntity = new YourEntity();
      yourEntity.title = faker.lorem.sentence();
      await this.yourEntityRepository.save(yourEntity);
    }
  }
}