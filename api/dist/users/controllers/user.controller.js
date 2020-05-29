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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const dtos_1 = require("../dtos");
const utils_1 = require("../../utils");
let UsersController = (() => {
    let UsersController = class UsersController {
        constructor(usersService) {
            this.usersService = usersService;
        }
        async createUser(newUser) {
            if (!utils_1.validateEmailFormat(newUser.email)) {
                return new utils_1.BaseResponse(null, "Email does not seems to be in the correct format.");
            }
            return this.usersService
                .create(newUser)
                .then(user => {
                return new utils_1.BaseResponse(user);
            })
                .catch((error) => {
                console.error(error);
                throw new common_1.BadRequestException(new utils_1.BaseResponse(null, error.message));
            });
        }
        async createSession() {
        }
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [dtos_1.CreateUserDTO]),
        __metadata("design:returntype", Promise)
    ], UsersController.prototype, "createUser", null);
    __decorate([
        common_1.Post(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], UsersController.prototype, "createSession", null);
    UsersController = __decorate([
        common_1.Controller("users"),
        __metadata("design:paramtypes", [user_service_1.UsersService])
    ], UsersController);
    return UsersController;
})();
exports.UsersController = UsersController;
//# sourceMappingURL=user.controller.js.map