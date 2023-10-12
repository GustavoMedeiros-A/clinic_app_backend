import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDTO } from './dtos/loginUser.dto';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/password.hash';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn({ email, password }: LoginDTO) {
    const user = await this.userService.findByEmail(email);
    const passwordCompare = await comparePassword(password, user.password)
    console.log(passwordCompare)
    if (!passwordCompare) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.name, sub: user.id };
    return {
      name:  user.name,
      email: user.email,
      access_token: this.jwtService.sign(payload),
    };
  }
}
