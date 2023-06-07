import { IsEmail, IsOptional, IsString } from 'class-validator';

export class RegisterCompanyDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  profileUrl: string;

  @IsString()
  @IsEmail()
  owner: string;

  @IsString()
  password: string;
}
