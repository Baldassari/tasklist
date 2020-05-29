import { Injectable, NestMiddleware } from "@nestjs/common";
import { UsersService } from "../../users/services/user.service";

@Injectable()
export class UserMiddleware implements  NestMiddleware {
    constructor(private userService: UsersService) {}
    
    async use(req: Request, res: Response, next: Function) {
        const payload = await req.json();
        console.log('UserMiddleware', payload);
        next();
    }
}