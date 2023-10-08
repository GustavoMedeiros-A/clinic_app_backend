import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuarioRepository } from './auth.repository';
import { CreateUserDTO } from './dtos/createUser.dto';
import { LoginDTO } from './dtos/loginUser.dto';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private jwtService: JwtService,
  ) {}

  async createUser(user: CreateUserDTO) {
    const userExists = await this.usuarioRepository.findByEmail(user.email);
    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
    }
    return await this.usuarioRepository.createUser(user);
  }

  async signIn({ email, password }: LoginDTO) {
    const user = await this.usuarioRepository.findByEmail(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
