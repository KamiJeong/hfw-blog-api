import { Module } from '@nestjs/common';
import { BlogsModule } from './modules/blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/user.entity';
import { Post } from './modules/blogs/blog.entity';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'toto123123',
      database: 'hello_fuxxing_world',
      entities: [User, Post],
      synchronize: true,
    }),
    UsersModule,
    BlogsModule,
  ],
})
export class AppModule {}
