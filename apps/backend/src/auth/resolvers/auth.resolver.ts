import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from '../dtos/login.input';
import { RegisterInput } from '../dtos/register.input';
import { AuthService } from '../services/auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // @Query('whoami')
  // @UseGuards(AuthGuard)
  // async me(@CurrentUser() user: User) {
  //   return user;
  // }

  @Mutation('registerUser')
  async register(@Args('registerInput') registerInput: RegisterInput) {
    return this.authService.register(registerInput);
  }

  @Mutation('loginUser')
  async login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }
}
