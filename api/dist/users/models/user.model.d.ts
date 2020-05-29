import { Schema, Document } from "mongoose";
import { ModelDefinition } from "@nestjs/mongoose";
export declare class User extends Document {
    email: string;
    password: string;
    name: string;
    isActive: boolean;
}
export declare const UserSchema: Schema<User>;
export declare const UserModel: ModelDefinition;
