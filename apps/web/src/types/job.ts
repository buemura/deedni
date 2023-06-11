import { Company } from './company';

export interface Job {
  id: number;
  companyId: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  company: Company;
}
