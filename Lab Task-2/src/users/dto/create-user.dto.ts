import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty() @IsString() @MaxLength(120) fullName: string;
  @IsNotEmpty() @IsEmail() @MaxLength(160) email: string;
  @IsOptional() @IsIn(['seeker', 'employer', 'admin']) role?: string;
}
