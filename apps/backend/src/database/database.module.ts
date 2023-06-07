import { Module } from '@nestjs/common';
import { CompaniesRepository } from 'src/companies/repositories/companies.repository';
import { UsersRepository } from 'src/users/repositories/users.repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaCompaniesRepository } from './prisma/repositories/companies.repository';
import { PrismaUsersRepository } from './prisma/repositories/users.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: CompaniesRepository,
      useClass: PrismaCompaniesRepository,
    },
  ],
  exports: [UsersRepository, CompaniesRepository],
})
export class DatabaseModule {}
