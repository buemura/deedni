import { Injectable } from '@nestjs/common';
import { CreateJobDto } from 'src/jobs/dtos/create-job.dto';
import { JobsQueryOptionsDto } from 'src/jobs/dtos/job-query-options.dto';
import { UpdateJobDto } from 'src/jobs/dtos/update-job.dto';
import { Job } from 'src/jobs/entities/job.entity';
import { JobsRepository } from 'src/jobs/repositories/jobs.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaJobsRepository implements JobsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(options?: JobsQueryOptionsDto): Promise<Job[]> {
    return this.prisma.job.findMany();
  }

  async findById(id: number): Promise<Job> {
    return this.prisma.job.findFirst({
      where: { id },
    });
  }

  async create(data: CreateJobDto): Promise<Job> {
    return this.prisma.job.create({
      data: {
        companyId: data.companyId,
        title: data.title,
        description: data.description,
      },
    });
  }

  async update(id: number, data: UpdateJobDto): Promise<Job> {
    return this.prisma.job.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Job> {
    return this.prisma.job.delete({
      where: { id },
    });
  }
}
