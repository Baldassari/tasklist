import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { sign, verify } from "jsonwebtoken";
import { CreateUserDTO } from "../dtos";
import { User } from "../models/user.model";
import { UserDTO } from "../dtos/users.dto";

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

    async login(dto: UserDTO): Promise<User> {
        const token = sign({ email: dto.email }, 'secrettasklist');
        const userExists = await this.userExistsByEmail(dto.email);
        if (!userExists) {
            throw new Error(`User with email [${dto.email}] do not exists.`)
        }

        const user = await this.userModel.findOne({ email: dto.email, password: dto.password }).exec();
        user.token = token;
        return user.save()
    }
    
    async userExistsByEmail(email: string) {
        return this.userModel.exists({ email: email });
    }
}
