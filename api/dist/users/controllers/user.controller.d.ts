import { UsersService } from "../services/user.service";
import { CreateUserDTO } from "../dtos";
import { BaseResponse } from "../../utils";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(newUser: CreateUserDTO): Promise<BaseResponse>;
    createSession(): Promise<void>;
}
