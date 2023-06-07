import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LoginCompanyDto } from 'src/companies/dto/login-company.dto';
import { RegisterCompanyDto } from 'src/companies/dto/register-company.dto';
import { Company } from 'src/companies/entities/company.entity';
import { User } from '../../users/entities/user.entity';
import { CurrentSession } from '../decorators/current-session.decorator';
import { CurrentUser } from '../decorators/current-user.decorator';
import { LoginUserDto } from '../dtos/login-user.dto';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('users/register')
  async registerUser(@Body() body: RegisterUserDto) {
    return this.authService.registerUser(body);
  }

  @Post('users/login')
  async loginUser(@Body() body: LoginUserDto) {
    return this.authService.loginUser(body);
  }

  @Get('users/profile')
  @UseGuards(JwtAuthGuard)
  async getUserProfile(@CurrentUser() user: User) {
    return user;
  }

  @Post('companies/register')
  async registerCompany(@Body() body: RegisterCompanyDto) {
    return this.authService.registerCompany(body);
  }

  @Post('companies/login')
  async loginCompany(@Body() body: LoginCompanyDto) {
    return this.authService.loginCompany(body);
  }

  @Get('companies/profile')
  @UseGuards(JwtAuthGuard)
  async getCompanyProfile(@CurrentSession() company: Company) {
    return company;
  }
}
