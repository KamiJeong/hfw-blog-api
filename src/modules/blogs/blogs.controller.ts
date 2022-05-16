import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Blogs')
@Controller('posts')
export class BlogsController {
  @Get()
  findAll(): string {
    return 'This action returns all blogs';
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action returns one ${id} post`;
  }
}
