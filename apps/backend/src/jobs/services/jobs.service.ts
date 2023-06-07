import { Injectable } from '@nestjs/common';
import { CreateJobDto } from '../dtos/create-job.dto';
import { UpdateJobDto } from '../dtos/update-job.dto';
import { JobsRepository } from '../repositories/jobs.repository';

@Injectable()
export class JobsService {
  constructor(private readonly jobsRepository: JobsRepository) {}

  async findAll() {
    return this.jobsRepository.findMany();
  }

  async findById(id: number) {
    return this.jobsRepository.findById(id);
  }

  async create(data: CreateJobDto) {
    return this.jobsRepository.create(data);
  }

  async update(id: number, data: UpdateJobDto) {
    return this.jobsRepository.update(id, data);
  }

  async remove(id: number) {
    return this.jobsRepository.remove(id);
  }
}
