import { ProjectService } from '../services/project.service';
import { CreateProjectDTO } from '../dtos/create-project.dto';
import { AddTaskDTO } from '../dtos/add-task.dto';
import { Project } from "../models/project.model";
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    getProjectsByUserEmail(email: string): Promise<Project[]>;
    createProject(dto: CreateProjectDTO): Promise<Project>;
    addProjectTask(email: string, projectId: string, dto: AddTaskDTO): Promise<Project>;
}
