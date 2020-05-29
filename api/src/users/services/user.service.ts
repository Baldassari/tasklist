import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDTO } from "../dtos";
import { User } from "../models/user.model";

@Injectable()
export class UsersService {
    // Todo: hardcoded users collection in two files
    constructor(@InjectModel("Users") private userModel: Model<User>) {}

    async create(dto: CreateUserDTO): Promise<User> {
        const userExists = await this.userExistsByEmail(dto.email);
        if (userExists) {
            throw new Error(`User with email [${dto.email}] already exists.`);
        }
        const createdUser = new this.userModel({
            email: dto.email,
            password: dto.password,
            name: dto.name,
        });
        return createdUser.save();
    }
    
    async userExistsByEmail(email: string) {
        return this.userModel.exists({ email: email });
    }
}
