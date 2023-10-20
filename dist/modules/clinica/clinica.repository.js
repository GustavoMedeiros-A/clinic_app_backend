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
exports.ClinicaRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Clinica_1 = require("../../model/entities/Clinica");
let ClinicaRepository = class ClinicaRepository {
    constructor(clinicaModel) {
        this.clinicaModel = clinicaModel;
    }
    async findById(id) {
        return await this.clinicaModel.findOneBy({ id });
    }
    async findAll() {
        return await this.clinicaModel.find();
    }
    async createClinica(clinicaDto) {
        const clinica = this.clinicaModel.create(clinicaDto);
        return await this.clinicaModel.save(clinica);
    }
    async deleteById(id) {
        await this.clinicaModel.delete({ id });
    }
};
exports.ClinicaRepository = ClinicaRepository;
exports.ClinicaRepository = ClinicaRepository = __decorate([
    __param(0, (0, typeorm_2.InjectRepository)(Clinica_1.Clinica)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ClinicaRepository);
//# sourceMappingURL=clinica.repository.js.map