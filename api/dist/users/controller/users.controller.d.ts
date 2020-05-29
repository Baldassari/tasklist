import { UsersService } from "../service/users.service";
import { CreateUserDTO } from "../dto";
import { BaseResponse } from "../../utils";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getHello(): string;
    createUser(newUser: CreateUserDTO): Promise<BaseResponse>;
}
