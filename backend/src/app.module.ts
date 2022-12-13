import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Chicken } from './chicken.entity';
import { DatabaseModule } from './database.module';

@Module({
  imports: [TypeOrmModule.forFeature([Chicken]), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
