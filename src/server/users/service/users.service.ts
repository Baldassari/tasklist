import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDTO } from "../dto";
import { IUser } from "../model/user.model";

@Injectable()
export class UsersService {
    // Todo: hardcoded users collection in two files
    constructor(@InjectModel("User") private userModel: Model<IUser>) {}

    getHello(): string {
        return "Hello World!";
    }

    async create(dto: CreateUserDTO): Promise<IUser> {
        const userExists = await this.userModel.exists({ email: dto.email });
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
}
