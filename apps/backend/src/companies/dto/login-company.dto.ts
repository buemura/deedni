import { IsEmail, IsString } from 'class-validator';

export class LoginCompanyDto {
  @IsString()
  @IsEmail()
  owner: string;

  @IsString()
  password: string;
}
