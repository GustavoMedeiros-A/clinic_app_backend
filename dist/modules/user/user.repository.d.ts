import { Usuario } from 'src/model/entities/Usuario';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dtos/createUser.dto';
export declare class UserRepository {
    private readonly usuarioModel;
    constructor(usuarioModel: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    findByEmail(email: string): Promise<Usuario | undefined>;
    createUser(usuario: CreateUserDTO): Promise<Usuario>;
}
