import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from '../../users/entities/user.entity';
import { CurrentUser } from '../decorators/current-user.decorator';
import { LoginUserDto } from '../dtos/login-user.dto';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterUserDto) {
    return this.authService.register(body);
  }

  @Post('login')
  async login(@Body() body: LoginUserDto) {
    return this.authService.login(body);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@CurrentUser() user: User) {
    return user;
  }
}
