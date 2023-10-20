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
exports.EspecialistaRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Especialista_1 = require("../../model/entities/Especialista");
let EspecialistaRepository = class EspecialistaRepository {
    constructor(especialistaModel) {
        this.especialistaModel = especialistaModel;
    }
    async findById(id) {
        return await this.especialistaModel.findOneBy({ id });
    }
    async findAll() {
        return await this.especialistaModel.find();
    }
    async createEspecialista(especialistaDto) {
        const especialista = this.especialistaModel.create(especialistaDto);
        return await this.especialistaModel.save(especialista);
    }
    async deleteById(id) {
        await this.especialistaModel.delete({ id });
    }
};
exports.EspecialistaRepository = EspecialistaRepository;
exports.EspecialistaRepository = EspecialistaRepository = __decorate([
    __param(0, (0, typeorm_2.InjectRepository)(Especialista_1.Especialista)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EspecialistaRepository);
//# sourceMappingURL=especialista.repository.js.map