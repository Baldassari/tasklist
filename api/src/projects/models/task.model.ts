import { Schema, Document } from "mongoose";

export enum TaskType {
    TODO,
    DOING,
    DONE,
    PARKED,
}

export class Task {
    public createdAt: Date;
    public concludedAt: Date;
    public isActive: boolean;

    constructor(
        public description: string,
    ) {
        this.description = description;
    }
}

export const TaskSchema = new Schema<Task>({
    description: { type: String, required: true },
    status: { type: TaskType, default: TaskType.TODO },
    createdAt: { type: Date, default: new Date() },
    concludedAt: { type: Date },
    isActive: { type: Boolean, default: true },
});
