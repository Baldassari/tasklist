import { Model } from 'mongoose';
import { Project } from '../models/project.model';
export declare class ProjectService {
    private projectModel;
    constructor(projectModel: Model<Project>);
    getAllProjectsByUserEmail(email: string): Promise<Project[]>;
    createProject(projectName: string, email: string): Promise<Project>;
    addProjectTask(projectId: string, taskDescription: string): Promise<Project>;
}
