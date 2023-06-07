import { Injectable } from '@nestjs/common';
import { RegisterCompanyDto } from '../dto/register-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { Company } from '../entities/company.entity';

@Injectable()
export class CompaniesService {
  async findAll(): Promise<Company[]> {
    return [new Company()];
  }

  async findById(id: string): Promise<Company> {
    return new Company();
  }

  async findByEmail(email: string): Promise<Company> {
    return new Company();
  }

  async create(data: RegisterCompanyDto): Promise<Company> {
    return new Company();
  }

  async update(id: string, data: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  async remove(id: string) {
    return `This action removes a #${id} company`;
  }
}
