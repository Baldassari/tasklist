import { Model } from "mongoose";
import { CreateUserDTO } from "../dtos";
import { User } from "../models/user.model";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(dto: CreateUserDTO): Promise<User>;
    userExistsByEmail(email: string): Promise<boolean>;
}
