"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("mongoose");
class User extends mongoose_1.Document {
}
exports.User = User;
exports.UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    isActive: { type: Boolean, default: true }
});
exports.UserModel = { name: 'Users', schema: exports.UserSchema };
//# sourceMappingURL=user.model.js.map