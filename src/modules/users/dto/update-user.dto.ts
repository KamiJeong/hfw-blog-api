import { IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly password: string;

  @IsOptional()
  @IsIn(['male', 'female'])
  readonly gender: string;
}
