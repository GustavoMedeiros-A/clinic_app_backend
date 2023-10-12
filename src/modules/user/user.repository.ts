import { Usuario } from 'src/model/entities/Usuario';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dtos/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepository {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioModel: Repository<Usuario>,
  ) {}

  async findAll() {
    return await this.usuarioModel.find();
  }

  async findByEmail(email: string): Promise<Usuario | undefined> {
    return await this.usuarioModel.findOneBy({ email });
  }

  async createUser(usuario: CreateUserDTO) {
    const newUser = this.usuarioModel.create({
      name: usuario.name,
      email: usuario.email,
      password: await usuario.password, // Resolve the password here
    });
    return await this.usuarioModel.save(newUser);
  }
}
