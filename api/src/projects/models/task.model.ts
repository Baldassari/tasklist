import { Schema, Document } from "mongoose";

export enum TaskEnum {
    TODO,
    DOING,
    DONE,
    PARKED,
}

export class Task extends Document {
    constructor(
        public description: string,
        public status: TaskEnum,
        public createdAt: Date,
        public concludedAt: Date,
        public isActive: boolean,
    ) {
        super();
        this.description = description;
    }
}

export const TaskSchema = new Schema<Task>({
    description: { type: String, required: true },
    status: { type: TaskEnum, default: TaskEnum.TODO },
    createdAt: { type: Date, default: new Date() },
    isActive: { type: Boolean, default: true },
});
