import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidationPipe } from '../../validation.pipe';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(): string {
    return `return all users`;
  }

  @Get(':email')
  async findOne(@Param('email') email: string): Promise<User> {
    return await this.usersService.findOneByEmail(email);
  }

  @Post()
  @HttpCode(204)
  async create(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ): Promise<void> {
    await this.usersService.create(createUserDto);
  }

  @Put(':seq')
  update(
    @Param('seq', ParseIntPipe) seq: number,
    @Body() updateUserDto: UpdateUserDto,
  ): string {
    console.log(updateUserDto);
    return `update user by seq ${seq}`;
  }

  @Delete(':seq')
  remove(@Param('seq', ParseIntPipe) seq: number): string {
    return `remove ${seq}`;
  }
}
