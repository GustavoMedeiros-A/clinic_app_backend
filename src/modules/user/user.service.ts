import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dtos/createUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly usuarioRepository: UserRepository) {}

  async findByEmail(email: string) {
    return await this.usuarioRepository.findByEmail(email);
  }

  async createUser(user: CreateUserDTO) {
    const userExists = await this.usuarioRepository.findByEmail(user.email);
    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
    }
    return await this.usuarioRepository.createUser(user);
  }
}
