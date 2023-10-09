// import { Usuario } from 'src/model/entities/Usuario';
// import { Repository } from 'typeorm';
// import { CreateUserDTO } from './dtos/createUser.dto';
// import { InjectRepository } from '@nestjs/typeorm';

// export class UsuarioRepository {
//   constructor(
//     @InjectRepository(Usuario)
//     private readonly usuarioModel: Repository<Usuario>,
//   ) {}

//   async findByEmail(email: string): Promise<Usuario | undefined> {
//     return await this.usuarioModel.findOneBy({ email });
//   }

//   async createUser(usuario: CreateUserDTO) {
//     const newUser = this.usuarioModel.create(usuario);
//     return await this.usuarioModel.save(newUser);
//   }
// }
