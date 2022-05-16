import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { aesDecrypt, aesEncrypt } from '../../utils/crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.gender = createUserDto.gender;
    newUser.password = aesEncrypt(createUserDto.password);

    console.log('@ 1 : ', createUserDto.password);
    console.log('@ 2 : ', newUser.password);
    console.log('@ 3 : ', aesDecrypt(newUser.password));

    return this.userRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({
      email,
    });
  }

  async remove(seq: number): Promise<void> {
    await this.userRepository.delete(seq);
  }
}
