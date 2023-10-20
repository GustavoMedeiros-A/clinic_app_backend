import { UserService } from '../user/user.service';
import { LoginDTO } from './dtos/loginUser.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn({ email, password }: LoginDTO): Promise<{
        name: string;
        email: string;
        access_token: string;
    }>;
}
