import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { aesEncrypt } from '../../utils/crypto';

@Injectable()
export class UsersService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const newUser = new User();
  //   newUser.name = createUserDto.name;
  //   newUser.email = createUserDto.email;
  //   newUser.gender = createUserDto.gender;
  //   newUser.password = aesEncrypt(createUserDto.password);
  //
  //   console.log('@ 1 : ', createUserDto.password);
  //   console.log('@ 2 : ', newUser.password);
  //   console.log('@ 3 : ', aesDecrypt(newUser.password));
  //
  //   return this.userRepository.save(newUser);
  // }
  //
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({
      email,
    });
  }

  async remove(email: string): Promise<DeleteResult> {
    return await this.userRepository.delete(email);
  }

  async createUsers(): Promise<User[]> {
    const users$ = this.httpService
      .get('https://randomuser.me/api/?results=50')
      .pipe(
        map(({ data }) => {
          const { results } = data;

          console.log(results);

          const queries: User[] = results.map(
            ({
              email,
              name: { title, first, last },
              dob: { date: dob },
              registered: { date: registered },
              phone,
              cell,
              picture: { large, medium, thumbnail },
              nat,
            }) => ({
              email,
              title,
              first,
              last,
              dob,
              registered,
              phone,
              cell,
              large,
              medium,
              thumbnail,
              nat,
              password: aesEncrypt('toto12341234'),
            }),
          );
          return this.userRepository.save(queries);
        }),
      );

    return await lastValueFrom(users$);
  }
}
