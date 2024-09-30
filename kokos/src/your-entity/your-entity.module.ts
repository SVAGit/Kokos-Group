import { Module } from '@nestjs/common';
import { YourEntityService } from './your-entity.service';
import { YourEntityController } from './your-entity.controller';

@Module({
  providers: [YourEntityService],
  controllers: [YourEntityController]
})
export class YourEntityModule {}
