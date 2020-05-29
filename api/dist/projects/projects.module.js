"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const project_model_1 = require("./models/project.model");
const project_service_1 = require("./services/project.service");
const users_module_1 = require("../users/users.module");
const user_middleware_1 = require("./middleware/user.middleware");
const project_controller_1 = require("./controllers/project.controller");
const user_service_1 = require("../users/services/user.service");
const user_model_1 = require("../users/models/user.model");
let ProjectsModule = (() => {
    let ProjectsModule = class ProjectsModule {
        configure(consumer) {
            consumer
                .apply(user_middleware_1.UserMiddleware);
        }
    };
    ProjectsModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([project_model_1.ProjectModel]),
                users_module_1.UsersModule
            ],
            providers: [project_service_1.ProjectService],
            controllers: [project_controller_1.ProjectController]
        })
    ], ProjectsModule);
    return ProjectsModule;
})();
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map