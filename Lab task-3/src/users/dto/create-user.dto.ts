import { Type } from 'class-transformer';
import {
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  // fullName: required string, minimum 3 characters
  @IsString({ message: 'fullName must be a string' })
  @IsNotEmpty({ message: 'fullName is required' })
  @MinLength(3, { message: 'fullName must be at least 3 characters long' })
  fullName: string;

  // email: required, valid email
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail({}, { message: 'email must be a valid email address' })
  email: string;

  // password: min 8, uppercase, lowercase, number, special character
  @IsString({ message: 'password must be a string' })
  @IsNotEmpty({ message: 'password is required' })
  @MinLength(8, { message: 'password must be at least 8 characters long' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, {
    message:
      'password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
  })
  password: string;

  // age: required integer, 18 to 60
  @Type(() => Number)
  @IsInt({ message: 'age must be an integer' })
  @Min(18, { message: 'age must not be less than 18' })
  @Max(60, { message: 'age must not be greater than 60' })
  age: number;

  // phone: exactly 11 digits, starts with 01
  @IsString({ message: 'phone must be a string' })
  @IsNotEmpty({ message: 'phone is required' })
  @Matches(/^01\d{9}$/, {
    message: 'phone must be exactly 11 digits and start with 01',
  })
  phone: string;

  // accountType: "student" or "teacher"
  @IsIn(['student', 'teacher'], {
    message: 'accountType must be either student or teacher',
  })
  accountType: string;

  // address: optional, if given minimum 10 characters
  @IsOptional()
  @IsString({ message: 'address must be a string' })
  @MinLength(10, { message: 'address must be at least 10 characters long' })
  address?: string;
}
