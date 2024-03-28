import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { VideosModule } from '../videos/videos.module';

@Module({
  imports: [UsersModule, VideosModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
