import { Schema, Document } from "mongoose";
import { ModelDefinition } from "@nestjs/mongoose";

export class User extends Document {
    email: string;
    password: string;
    name: string;
    isActive: boolean;
}

export const UserSchema = new Schema<User>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    isActive: { type: Boolean, default: true }
});

export const UserModel: ModelDefinition = { name: 'Users', schema: UserSchema };