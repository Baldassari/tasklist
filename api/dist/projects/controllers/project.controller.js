"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("../services/project.service");
const create_project_dto_1 = require("../dtos/create-project.dto");
const add_task_dto_1 = require("../dtos/add-task.dto");
let ProjectController = (() => {
    let ProjectController = class ProjectController {
        constructor(projectService) {
            this.projectService = projectService;
        }
        async getProjectsByUserEmail(email) {
            console.log(email);
            return this.projectService.getAllProjectsByUserEmail(email);
        }
        async createProject(dto) {
            return this.projectService.createProject(dto.name, dto.email);
        }
        async addProjectTask(email, projectId, dto) {
            console.log(email, projectId);
            return this.projectService.addProjectTask(projectId, dto.description);
        }
    };
    __decorate([
        common_1.Get(),
        __param(0, common_1.Query('email')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], ProjectController.prototype, "getProjectsByUserEmail", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDTO]),
        __metadata("design:returntype", Promise)
    ], ProjectController.prototype, "createProject", null);
    __decorate([
        common_1.Post('/:email/:projectId'),
        __param(0, common_1.Param('email')), __param(1, common_1.Param('projectId')), __param(2, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, add_task_dto_1.AddTaskDTO]),
        __metadata("design:returntype", Promise)
    ], ProjectController.prototype, "addProjectTask", null);
    ProjectController = __decorate([
        common_1.Controller('projects'),
        __metadata("design:paramtypes", [project_service_1.ProjectService])
    ], ProjectController);
    return ProjectController;
})();
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.controller.js.map