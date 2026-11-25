import { IsInt, IsNotEmpty, IsOptional, IsString, Min, MaxLength } from 'class-validator';
export class CreateJobDto {
  @IsNotEmpty() @IsString() @MaxLength(150) title: string;
  @IsNotEmpty() @IsString() @MaxLength(150) companyName: string;
  @IsNotEmpty() @IsString() @MaxLength(120) location: string;
  @IsNotEmpty() @IsString() description: string;
  @IsOptional() @IsInt() @Min(0) salary?: number;
}
