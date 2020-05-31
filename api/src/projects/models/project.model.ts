import { Schema, Document, model } from "mongoose";
import { ModelDefinition } from "@nestjs/mongoose";
import { TaskSchema, Task } from "./task.model";

export enum ProjectStatusEnum {
    TODO,
    ONGOING,
    DONE,
    PARKED
}

export class Project extends Document {
    name: string;
    status: ProjectStatusEnum;
    tasks: Task[];
    createdBy: string;
    createdAt: Date;
    concludedAt: Date;

    constructor(name: string, createdBy: string) {
        super();
        this.name = name;
        this.createdBy = createdBy;
    }
}

export const ProjectSchema = new Schema<Project>({
    name: { type: String, required: true },
    status: { type: ProjectStatusEnum, required: true, default: ProjectStatusEnum.TODO },
    tasks: [TaskSchema],
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
})

export const ProjectModel: ModelDefinition = { name: 'Projects', schema: ProjectSchema };