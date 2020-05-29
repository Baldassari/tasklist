import { Model } from "mongoose";
import { CreateUserDTO } from "../dtos";
import { IUser } from "../models/user.model";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<IUser>);
    getHello(): string;
    create(dto: CreateUserDTO): Promise<IUser>;
}
