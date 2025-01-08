import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  imports: [CatsModule],
  providers: [PetsService],
  controllers: [PetsController],
})
export class PetsModule {}
