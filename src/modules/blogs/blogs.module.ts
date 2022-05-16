import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
