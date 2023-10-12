import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dtos/createUser.dto';
import { hashPassword } from 'src/utils/password.hash';

@Injectable()
export class UserService {
  constructor(private readonly usuarioRepository: UserRepository) {}

  async findAll() {
    return await this.usuarioRepository.findAll();
  }

  async findByEmail(email: string) {
    return await this.usuarioRepository.findByEmail(email);
  }

  async createUser(user: CreateUserDTO) {
    const userExists = await this.usuarioRepository.findByEmail(user.email);
    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
    }
    const hashedPassword = hashPassword(await user.password)

    const newUser = await this.usuarioRepository.createUser({ ...user, password: hashedPassword });
    return newUser;
  }
}
