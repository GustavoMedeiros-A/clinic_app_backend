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
exports.HorarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const EspecialistaClinica_1 = require("../../model/entities/EspecialistaClinica");
const Horario_1 = require("../../model/entities/Horario");
const DiaSemana_1 = require("../../model/entities/DiaSemana");
let HorarioService = class HorarioService {
    constructor(horarioRepository, especialistaClinicaRepository, diaSemanaRepository) {
        this.horarioRepository = horarioRepository;
        this.especialistaClinicaRepository = especialistaClinicaRepository;
        this.diaSemanaRepository = diaSemanaRepository;
    }
    async findAll() {
        return await this.horarioRepository.find();
    }
    async create(inputDTO) {
        console.log('inputDTO.especialistaClinica', inputDTO.especialistaClinica);
        const especialistaClinica = await this.especialistaClinicaRepository.findOneBy({
            id: inputDTO.especialistaClinica,
        });
        const diaSemana = await this.diaSemanaRepository.findOneBy({
            id: inputDTO.id_dia_semana,
        });
        if (!especialistaClinica) {
            throw new common_1.NotFoundException('EspecialistaClinica not found');
        }
        if (!diaSemana) {
            throw new common_1.NotFoundException('DiaSemana not found');
        }
        const partialHorarioClinica = {
            especialistaClinica: especialistaClinica,
            id_dia_semana: diaSemana,
            hora_inicial: inputDTO.hora_inicial,
            minuto_inicial: inputDTO.minuto_inicial,
            hora_final: inputDTO.hora_final,
            minuto_final: inputDTO.minuto_final,
            quantidade_atendimentos: inputDTO.quantidade_atendimentos,
        };
        try {
            const horario = this.horarioRepository.create(partialHorarioClinica);
            await this.horarioRepository.save(horario);
            return horario;
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
};
exports.HorarioService = HorarioService;
exports.HorarioService = HorarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Horario_1.Horario)),
    __param(1, (0, typeorm_1.InjectRepository)(EspecialistaClinica_1.EspecialistaClinica)),
    __param(2, (0, typeorm_1.InjectRepository)(DiaSemana_1.DiaSemana)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], HorarioService);
//# sourceMappingURL=horario.service.js.map