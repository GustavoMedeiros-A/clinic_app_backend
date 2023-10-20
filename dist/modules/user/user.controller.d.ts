import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/createUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAllUser(): Promise<import("../../model/entities/Usuario").Usuario[]>;
    createUser(user: CreateUserDTO): Promise<import("../../model/entities/Usuario").Usuario>;
}
