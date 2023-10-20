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
exports.AgendaService = void 0;
const common_1 = require("@nestjs/common");
const agenda_repository_1 = require("./agenda.repository");
let AgendaService = class AgendaService {
    constructor(agendaRepository) {
        this.agendaRepository = agendaRepository;
    }
    async findAll() {
        return await this.agendaRepository.findAll();
    }
    async deleteById(id) {
        const agenda = this.agendaRepository.findById(id);
        if (!agenda) {
            throw new common_1.NotFoundException();
        }
        return await this.agendaRepository.deleteById(id);
    }
};
exports.AgendaService = AgendaService;
exports.AgendaService = AgendaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [agenda_repository_1.AgendaRepository])
], AgendaService);
//# sourceMappingURL=agenda.service.js.map