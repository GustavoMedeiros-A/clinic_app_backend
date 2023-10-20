import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/loginUser.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: LoginDTO): Promise<{
        name: string;
        email: string;
        access_token: string;
    }>;
    getProfile(req: any): any;
}
