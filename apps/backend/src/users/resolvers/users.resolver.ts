import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UsersService } from '../services/users.service';

@Resolver('User')
// @UseGuards(JwtAuthGuard)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('users')
  async findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  async findOne(@Args('id') id: string) {
    return this.usersService.findById(id);
  }

  @Mutation('updateUser')
  async update(@Args('updateUserInput') input: UpdateUserDto) {
    return this.usersService.update(input);
  }

  @Mutation('removeUser')
  async remove(@Args('id') id: string) {
    return this.usersService.remove(id);
  }
}
