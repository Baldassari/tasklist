"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = exports.Task = exports.TaskEnum = void 0;
const mongoose_1 = require("mongoose");
var TaskEnum;
(function (TaskEnum) {
    TaskEnum[TaskEnum["TODO"] = 0] = "TODO";
    TaskEnum[TaskEnum["DOING"] = 1] = "DOING";
    TaskEnum[TaskEnum["DONE"] = 2] = "DONE";
    TaskEnum[TaskEnum["PARKED"] = 3] = "PARKED";
})(TaskEnum = exports.TaskEnum || (exports.TaskEnum = {}));
class Task extends mongoose_1.Document {
}
exports.Task = Task;
exports.TaskSchema = new mongoose_1.Schema({
    description: { type: String, required: true },
    status: { type: TaskEnum, default: TaskEnum.TODO },
    createdAt: { type: Date, default: new Date() },
    isActive: { type: Boolean, default: true }
});
//# sourceMappingURL=task.model.js.map