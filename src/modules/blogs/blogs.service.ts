import { Injectable } from '@nestjs/common';
import { Blog } from './interfaces/blog.interface';

@Injectable()
export class BlogsService {
  private readonly blogs: Blog[] = [];

  create(blog: Blog) {
    this.blogs.push(blog);
  }

  findAll(): Blog[] {
    return this.blogs;
  }
}
