"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponse = void 0;
class BaseResponse {
    constructor(data = {}, error = undefined) {
        this.data = data;
        this.error = error;
    }
}
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=base-response.js.map