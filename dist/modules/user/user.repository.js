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
exports.UserRepository = void 0;
const Usuario_1 = require("../../model/entities/Usuario");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let UserRepository = class UserRepository {
    constructor(usuarioModel) {
        this.usuarioModel = usuarioModel;
    }
    async findAll() {
        return await this.usuarioModel.find();
    }
    async findByEmail(email) {
        return await this.usuarioModel.findOneBy({ email });
    }
    async createUser(usuario) {
        const newUser = this.usuarioModel.create({
            name: usuario.name,
            email: usuario.email,
            password: await usuario.password,
        });
        return await this.usuarioModel.save(newUser);
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    __param(0, (0, typeorm_2.InjectRepository)(Usuario_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserRepository);
//# sourceMappingURL=user.repository.js.map