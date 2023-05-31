import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register() {
    return { message: 'registration' };
  }

  async login() {
    return { message: 'login' };
  }
}
