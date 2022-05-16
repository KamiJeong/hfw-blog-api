import { IsNotEmpty, IsString } from 'class-validator';

export class GenerateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsString()
  @IsNotEmpty()
  readonly first: string;
  @IsString()
  @IsNotEmpty()
  readonly last: string;
  @IsString()
  @IsNotEmpty()
  readonly dob: string;
  @IsString()
  @IsNotEmpty()
  readonly registered: string;
  @IsString()
  @IsNotEmpty()
  readonly phone: string;
  @IsString()
  @IsNotEmpty()
  readonly cell: string;
  @IsString()
  @IsNotEmpty()
  readonly large: string;
  @IsString()
  @IsNotEmpty()
  readonly medium: string;
  @IsString()
  @IsNotEmpty()
  readonly thumbnail: string;
  @IsString()
  @IsNotEmpty()
  readonly nat: string;
}
