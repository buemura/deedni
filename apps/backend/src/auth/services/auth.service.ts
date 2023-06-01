import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../../users/services/users.service';
import { LoginInput } from '../dtos/login.input';
import { RegisterInput } from '../dtos/register.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private generateToken(user: User): string {
    const payload = { sub: user.id };
    return this.jwtService.sign(payload);
  }

  async register({ name, email, password }: RegisterInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }

  async login({ email, password }: LoginInput) {
    const user = await this.usersService.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }

    const accessToken = this.generateToken(user);
    return { accessToken };
  }
}
