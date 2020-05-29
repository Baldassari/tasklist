import { Schema, Document } from "mongoose";
export declare enum TaskEnum {
    TODO = 0,
    DOING = 1,
    DONE = 2,
    PARKED = 3
}
export declare class Task extends Document {
    description: string;
    status: TaskEnum;
    createdAt: Date;
    isActive: boolean;
}
export declare const TaskSchema: Schema<Task>;
