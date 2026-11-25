import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
export class CreateApplicationDto {
  @IsNotEmpty() @IsInt() @Min(1) userId: number;
  @IsNotEmpty() @IsInt() @Min(1) jobId: number;
  @IsOptional() @IsString() coverLetter?: string;
}
