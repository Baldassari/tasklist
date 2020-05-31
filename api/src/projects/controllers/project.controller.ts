import {
    Controller,
    Body,
    Get,
    Post,
    Query,
    Patch,
    Param,
} from "@nestjs/common";
import { ProjectService } from "../services/project.service";
import { CreateProjectDTO } from "../dtos/create-project.dto";
import { AddTaskDTO } from "../dtos/add-task.dto";
import { Task } from "../models/task.model";
import { Project } from "../models/project.model";

@Controller("projects")
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Get()
    async getProjectsByUserEmail(@Query("email") email: string) {
        console.log(email);
        return this.projectService.getAllProjectsByUserEmail(email);
    }

    @Post()
    async createProject(@Body() dto: CreateProjectDTO): Promise<Project> {
        return this.projectService.createProject(dto.name, dto.email);
    }

    @Post("/:email/:projectId")
    async addProjectTask(
        @Param("email") email: string,
        @Param("projectId") projectId: string,
        @Body() dto: AddTaskDTO,
    ): Promise<Project> {
        //TODO~
        console.log(email, projectId);
        return this.projectService.addProjectTask(projectId, dto.description);
    }
}
