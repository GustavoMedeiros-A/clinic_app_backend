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
exports.EspecialistaClinicaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Especialista_1 = require("../../model/entities/Especialista");
const Clinica_1 = require("../../model/entities/Clinica");
const EspecialistaClinica_1 = require("../../model/entities/EspecialistaClinica");
let EspecialistaClinicaService = class EspecialistaClinicaService {
    constructor(especialistaClinicaRepository, especialistaRepository, clinicaRepository) {
        this.especialistaClinicaRepository = especialistaClinicaRepository;
        this.especialistaRepository = especialistaRepository;
        this.clinicaRepository = clinicaRepository;
    }
    async findAll() {
        return await this.especialistaClinicaRepository.find();
    }
    async create(inputDTO) {
        const clinica = await this.clinicaRepository.findOneBy({
            id: inputDTO.clinica,
        });
        const especialista = await this.especialistaRepository.findOneBy({
            id: inputDTO.especialista,
        });
        if (!especialista || !clinica) {
            throw new common_1.NotFoundException();
        }
        const partialEspecialistaClinica = {
            clinica: clinica,
            especialista: especialista,
        };
        const especialistaClinica = this.especialistaClinicaRepository.create(partialEspecialistaClinica);
        await this.especialistaClinicaRepository.save(especialistaClinica);
        return especialistaClinica;
    }
};
exports.EspecialistaClinicaService = EspecialistaClinicaService;
exports.EspecialistaClinicaService = EspecialistaClinicaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(EspecialistaClinica_1.EspecialistaClinica)),
    __param(1, (0, typeorm_1.InjectRepository)(Especialista_1.Especialista)),
    __param(2, (0, typeorm_1.InjectRepository)(Clinica_1.Clinica)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EspecialistaClinicaService);
//# sourceMappingURL=especialista_clinica.service.js.map