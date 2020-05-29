import { NestMiddleware } from "@nestjs/common";
import { UsersService } from "../../users/services/user.service";
export declare class UserMiddleware implements NestMiddleware {
    private userService;
    constructor(userService: UsersService);
    use(req: Request, res: Response, next: Function): Promise<void>;
}
