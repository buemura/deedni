import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateAuthInput } from '../dtos/create-auth.input';
import { AuthService } from '../services/auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('createAuth')
  async register(@Args('createAuthInput') createAuthInput: CreateAuthInput) {
    return this.authService.register();
  }

  @Mutation('createAuth')
  async login(@Args('createAuthInput') createAuthInput: CreateAuthInput) {
    return this.authService.register();
  }

  // @Query('auth')
  // findOne(@Args('id') id: number) {
  //   return this.authService.login();
  // }
}
