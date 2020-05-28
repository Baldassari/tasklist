import { Schema, Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    password: string;
    name: string;
}

export const UserSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
});
