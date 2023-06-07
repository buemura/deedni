import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginCompanyDto } from 'src/companies/dto/login-company.dto';
import { RegisterCompanyDto } from 'src/companies/dto/register-company.dto';
import { Company } from 'src/companies/entities/company.entity';
import { CompaniesService } from 'src/companies/services/companies.service';
import { UsersService } from 'src/users/services/users.service';
import { User } from '../../users/entities/user.entity';
import { LoginUserDto } from '../dtos/login-user.dto';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { TokenPayload } from '../types/token-payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly companiesService: CompaniesService,
  ) {}

  async loginUser(data: LoginUserDto) {
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

  async registerUser(data: RegisterUserDto): Promise<User> {
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

  async loginCompany(data: LoginCompanyDto) {
    const company = await this.companiesService.findByEmail(data.owner);
    if (!company) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const passwordMatches = bcrypt.compareSync(data.password, company.password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const expires = new Date();

    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );

    const tokenPayload: TokenPayload = {
      sub: company.id,
    };

    const accessToken = this.jwtService.sign(tokenPayload);
    return {
      companyId: company.id,
      accessToken,
    };
  }

  async registerCompany(data: RegisterCompanyDto): Promise<Company> {
    const companyExists = await this.companiesService.findByEmail(data.owner);
    if (companyExists) {
      throw new BadRequestException('Email already taken');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const company = await this.companiesService.create({
      ...data,
      password: hashedPassword,
    });

    return company;
  }
}
