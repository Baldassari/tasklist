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
exports.UsersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let UsersService = (() => {
    let UsersService = class UsersService {
        constructor(userModel) {
            this.userModel = userModel;
        }
        async create(dto) {
            const userExists = await this.userExistsByEmail(dto.email);
            if (userExists) {
                throw new Error(`User with email [${dto.email}] already exists.`);
            }
            const createdUser = new this.userModel({
                email: dto.email,
                password: dto.password,
                name: dto.name,
            });
            return createdUser.save();
        }
        async userExistsByEmail(email) {
            return this.userModel.exists({ email: email });
        }
    };
    UsersService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_2.InjectModel("Users")),
        __metadata("design:paramtypes", [mongoose_1.Model])
    ], UsersService);
    return UsersService;
})();
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map