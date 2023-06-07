export class CreateCompanyDto {
  name: string;
  description?: string;
  profileUrl?: string;
  owner: string;
  password: string;
}
