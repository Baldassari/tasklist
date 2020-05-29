import { Controller, Body, Get, Post, Query, Patch, Param } from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { CreateProjectDTO } from '../dtos/create-project.dto';

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Get()
    async getProjectsByUserEmail(@Query('email') email: string) {
        console.log(email)
        return this.projectService.getAllProjectsByUserEmail(email);
    }

    @Post()
    async createProject(@Body() dto: CreateProjectDTO) {
        return this.projectService.createProject(dto.name, dto.email);
    }

    @Post(':projectId')
    async addProjectTask(@Param() params) {
        
    }
}
