import { Model } from "mongoose";
import { CreateUserDTO } from "../dto";
import { IUser } from "../model/user.model";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<IUser>);
    getHello(): string;
    create(dto: CreateUserDTO): Promise<IUser>;
}
