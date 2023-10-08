import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dtos/createUser.dto';
import { LoginDTO } from './dtos/loginUser.dto';

@Controller('/api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  public async createUser(@Body() user: CreateUserDTO) {
    return this.authService.createUser(user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/signin')
  public async login(@Body() user: LoginDTO) {
    return this.authService.signIn(user);
  }
}
