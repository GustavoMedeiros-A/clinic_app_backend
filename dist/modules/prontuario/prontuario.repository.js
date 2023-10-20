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
exports.ProntuarioRepository = void 0;
const typeorm_1 = require("typeorm");
const Prontuario_1 = require("../../model/entities/Prontuario");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
let ProntuarioRepository = class ProntuarioRepository {
    constructor(prontuarioModel) {
        this.prontuarioModel = prontuarioModel;
    }
    async findById(id) {
        return await this.prontuarioModel.findOneBy({ id });
    }
    async findAll() {
        return await this.prontuarioModel.find();
    }
    async createProntuario(prontuarioDto) {
        const prontuario = this.prontuarioModel.create(prontuarioDto);
        return await this.prontuarioModel.save(prontuario);
    }
    async deleteById(id) {
        await this.prontuarioModel.delete({ id });
    }
};
exports.ProntuarioRepository = ProntuarioRepository;
exports.ProntuarioRepository = ProntuarioRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Prontuario_1.Prontuario)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProntuarioRepository);
//# sourceMappingURL=prontuario.repository.js.map