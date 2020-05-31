import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Project } from "../models/project.model";
import { Task } from "../models/task.model";

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel("Projects") private projectModel: Model<Project>,
    ) {}

    async getAllProjectsByUserEmail(email: string): Promise<Project[]> {
        return this.projectModel.find({ createdBy: email });
    }

    async createProject(projectName: string, email: string): Promise<Project> {
        const createdProject = new this.projectModel({
            name: projectName,
            createdBy: email,
        });
        return createdProject.save();
    }

    async addProjectTask(
        projectId: string,
        taskDescription: string,
    ): Promise<Project> {
        const project = await this.projectModel.findById(projectId).exec();
        project.tasks = [...project.tasks, new Task(taskDescription)];
        return project.save();
    }
}
