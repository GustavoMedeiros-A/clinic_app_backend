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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaSemanaService = void 0;
const common_1 = require("@nestjs/common");
const dia_semana_repository_1 = require("./dia_semana.repository");
let DiaSemanaService = class DiaSemanaService {
    constructor(diaSemanaRepository) {
        this.diaSemanaRepository = diaSemanaRepository;
    }
    async findAll() {
        return await this.diaSemanaRepository.findAll();
    }
    async create(diaSemana) {
        const nameExist = await this.diaSemanaRepository.findByName(diaSemana.dia_semana);
        if (nameExist) {
            throw new common_1.BadRequestException({ message: "Dia da semana já cadastrado" });
        }
        return await this.diaSemanaRepository.create(diaSemana);
    }
};
exports.DiaSemanaService = DiaSemanaService;
exports.DiaSemanaService = DiaSemanaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dia_semana_repository_1.DiaSemanaRepository])
], DiaSemanaService);
//# sourceMappingURL=dia_semana.service.js.map