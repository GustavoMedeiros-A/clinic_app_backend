import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/createUser.dto';
import { Public } from '../auth/constants';

@Controller('/api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user')
  public async findAllUser() {
    return this.userService.findAll();
  }

  @Post('/signup')
  @Public()
  public async createUser(@Body() user: CreateUserDTO) {
    return this.userService.createUser(user);
  }
}
