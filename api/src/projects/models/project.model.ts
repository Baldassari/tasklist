import { Schema, Document, model } from "mongoose";
import { ModelDefinition } from "@nestjs/mongoose";
import { TaskSchema, Task } from "./task.model";

export enum ProjectStatusType {
    TODO,
    ONGOING,
    DONE,
    PARKED,
}

export class Project extends Document {
    constructor(
        public name: string,
        public status: ProjectStatusType,
        public tasks: Task[],
        public createdBy: string,
        public createdAt: Date,
        public concludedAt: Date,
    ) {
        super();
    }
}

export const ProjectSchema = new Schema<Project>({
    name: { type: String, required: true },
    status: {
        type: ProjectStatusType,
        required: true,
        default: ProjectStatusType.TODO,
    },
    tasks: { type: [TaskSchema] },
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
});

export const ProjectModel: ModelDefinition = {
    name: "Projects",
    schema: ProjectSchema,
};
