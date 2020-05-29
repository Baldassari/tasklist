import { Schema, Document } from "mongoose";
export interface IUser extends Document {
    email: string;
    password: string;
    name: string;
}
export declare const UserSchema: Schema<IUser>;
