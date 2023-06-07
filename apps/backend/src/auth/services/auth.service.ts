import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/services/users.service';
import { User } from '../../users/entities/user.entity';
import { LoginUserDto } from '../dtos/login-user.dto';
import { RegisterUserDto } from '../dtos/register-user.dto';

export interface TokenPayload {
  sub: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(data: LoginUserDto) {
    const user = await this.usersService.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const passwordMatches = bcrypt.compareSync(data.password, user.password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const expires = new Date();

    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );

    const tokenPayload: TokenPayload = {
      sub: user.id,
    };

    const accessToken = this.jwtService.sign(tokenPayload);
    return {
      userId: user.id,
      accessToken,
    };
  }

  async register(data: RegisterUserDto): Promise<User> {
    const userExists = await this.usersService.findByEmail(data.email);
    if (userExists) {
      throw new BadRequestException('Email already taken');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.usersService.create({
      ...data,
      password: hashedPassword,
    });

    return user;
  }
}
