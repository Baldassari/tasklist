"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = exports.ProjectSchema = exports.Project = exports.ProjectStatusEnum = void 0;
const mongoose_1 = require("mongoose");
const task_model_1 = require("./task.model");
var ProjectStatusEnum;
(function (ProjectStatusEnum) {
    ProjectStatusEnum[ProjectStatusEnum["TODO"] = 0] = "TODO";
    ProjectStatusEnum[ProjectStatusEnum["ONGOING"] = 1] = "ONGOING";
    ProjectStatusEnum[ProjectStatusEnum["DONE"] = 2] = "DONE";
    ProjectStatusEnum[ProjectStatusEnum["PARKED"] = 3] = "PARKED";
})(ProjectStatusEnum = exports.ProjectStatusEnum || (exports.ProjectStatusEnum = {}));
class Project extends mongoose_1.Document {
    constructor(name, createdBy) {
        super();
        this.name = name;
        this.createdBy = createdBy;
    }
}
exports.Project = Project;
exports.ProjectSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    status: { type: ProjectStatusEnum, required: true, default: ProjectStatusEnum.TODO },
    tasks: [task_model_1.TaskSchema],
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
});
exports.ProjectModel = { name: 'Projects', schema: exports.ProjectSchema };
//# sourceMappingURL=project.model.js.map