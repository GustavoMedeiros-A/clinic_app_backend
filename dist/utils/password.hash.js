"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = require("bcrypt");
async function hashPassword(password) {
    const saltOrRounds = await (0, bcrypt_1.genSalt)();
    return await (0, bcrypt_1.hash)(password, saltOrRounds);
}
exports.hashPassword = hashPassword;
async function comparePassword(password, rightPassword) {
    const auth = await (0, bcrypt_1.compare)(password, rightPassword);
    return auth;
}
exports.comparePassword = comparePassword;
//# sourceMappingURL=password.hash.js.map