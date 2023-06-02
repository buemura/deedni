import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../entities/user.entity';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly usersRepository: UsersRepository) {}

  async findAll(): Promise<User[]> {
    this.logger.log('executing findAll');
    const users = await this.usersRepository.findAll();
    this.logger.debug(`Found ${users.length} users`);
    return users;
  }

  async findById(id: string): Promise<User> {
    return this.usersRepository.findById(id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findByEmail(email);
  }

  async create(data: CreateUserDto) {
    const userExists = await this.usersRepository.findByEmail(data.email);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    return this.usersRepository.create(data);
  }

  async update(data: UpdateUserDto): Promise<User> {
    const userExists = await this.findById(data.id);
    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    return this.usersRepository.update(data);
  }

  async remove(id: string) {
    const userExists = await this.findById(id);
    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    return this.usersRepository.remove(id);
  }
}
