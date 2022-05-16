import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { DeleteResult } from 'typeorm';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private httpService: HttpService,
    private usersService: UsersService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Find All Users' })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/generate')
  @ApiOperation({ summary: 'Generate Random User By Random USER API' })
  async generateUsers(): Promise<{ users: User[] }> {
    console.log('@@@ test');

    const users = await this.usersService.createUsers();

    console.log(users);

    return {
      users,
    };
  }

  @Get(':email')
  @ApiOperation({ summary: 'Find User By Email' })
  @ApiResponse({ status: 200, description: 'Success User', type: User })
  async findOne(@Param('email') email: string): Promise<User> {
    return await this.usersService.findOneByEmail(email);
  }
  // //
  // // @Post()
  // // @ApiOperation({ summary: 'Create User' })
  // // @HttpCode(204)
  // // async create(
  // //   @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  // // ): Promise<void> {
  // //   await this.usersService.create(createUserDto);
  // // }
  // //
  // // @Put(':email')
  // // @ApiOperation({ summary: 'Update User By Email' })
  // // update(
  // //   @Param('email') email: string,
  // //   @Body() updateUserDto: UpdateUserDto,
  // // ): string {
  // //   console.log(updateUserDto);
  // //   return `update user by email ${email}`;
  // // }
  // //
  @Delete(':email')
  @ApiOperation({ summary: 'Delete User By Email' })
  async remove(@Param('email') email: string): Promise<DeleteResult> {
    return await this.usersService.remove(email);
  }
}
