import { UsersService } from "../services/users.service";
import { CreateUserDTO } from "../dtos";
import { BaseResponse } from "../../utils";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getHello(): string;
    createUser(newUser: CreateUserDTO): Promise<BaseResponse>;
    createSession(): Promise<void>;
}
