import { Schema, Document } from "mongoose";
import { ModelDefinition } from "@nestjs/mongoose";
import { Task } from "./task.model";
export declare enum ProjectStatusEnum {
    TODO = 0,
    ONGOING = 1,
    DONE = 2,
    PARKED = 3
}
export declare class Project extends Document {
    name: string;
    status: ProjectStatusEnum;
    tasks: Task[];
    createdBy: string;
    createdAt: Date;
    constructor(name: string, createdBy: string);
}
export declare const ProjectSchema: Schema<Project>;
export declare const ProjectModel: ModelDefinition;
