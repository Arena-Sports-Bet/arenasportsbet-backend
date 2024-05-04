import { hashSync } from 'bcryptjs';
import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { Account } from '../entities/account.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  birthdate: Date;

  @IsString()
  @Length(11)
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  @Length(8)
  zipcode: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  @IsNotEmpty()
  @Length(2)
  state: string;

  @IsString()
  @IsNotEmpty()
  city: string;
}
