"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmailFormat = void 0;
function validateEmailFormat(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
exports.validateEmailFormat = validateEmailFormat;
//# sourceMappingURL=validate-email.js.map