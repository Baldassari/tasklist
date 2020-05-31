import { Schema, Document } from "mongoose";
import { ModelDefinition } from "@nestjs/mongoose";

export class User extends Document {
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public token: string,
        public isActive: boolean,
    ) {
        super();
    }
}

export const UserSchema = new Schema<User>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    token: { type: String },
    isActive: { type: Boolean, default: true },
});

export const UserModel: ModelDefinition = { name: "Users", schema: UserSchema };
