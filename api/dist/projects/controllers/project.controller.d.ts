import { ProjectService } from '../services/project.service';
import { CreateProjectDTO } from '../dtos/create-project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    getProjectsByUserEmail(email: string): Promise<import("../models/project.model").Project[]>;
    createProject(dto: CreateProjectDTO): Promise<import("../models/project.model").Project>;
    addProjectTask(params: any): Promise<void>;
}
