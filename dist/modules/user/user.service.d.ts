import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dtos/createUser.dto';
export declare class UserService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: UserRepository);
    findAll(): Promise<import("../../model/entities/Usuario").Usuario[]>;
    findByEmail(email: string): Promise<import("../../model/entities/Usuario").Usuario>;
    createUser(user: CreateUserDTO): Promise<import("../../model/entities/Usuario").Usuario>;
}
