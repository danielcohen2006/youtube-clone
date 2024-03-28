import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';

@Module({
  imports: [PrismaModule],
  controllers: [VideosController],
  providers: [VideosService],
  exports: [],
})
export class VideosModule {}
