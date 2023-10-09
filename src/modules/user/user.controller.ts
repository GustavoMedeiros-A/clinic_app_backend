import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/createUser.dto';

@Controller('/api')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  public async createUser(@Body() user: CreateUserDTO) {
    return this.userService.createUser(user);
  }
}
