import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [CatsModule, PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
