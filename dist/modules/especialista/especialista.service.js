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
exports.EspecialistaService = void 0;
const common_1 = require("@nestjs/common");
const especialista_repository_1 = require("./especialista.repository");
let EspecialistaService = class EspecialistaService {
    constructor(especialistaRepository) {
        this.especialistaRepository = especialistaRepository;
    }
    async findAll() {
        return await this.especialistaRepository.findAll();
    }
    async create(especialistaDto) {
        return await this.especialistaRepository.createEspecialista(especialistaDto);
    }
    async deleteById(id) {
        const especialista = this.especialistaRepository.findById(id);
        if (!especialista) {
            throw new common_1.NotFoundException();
        }
        return await this.especialistaRepository.deleteById(id);
    }
};
exports.EspecialistaService = EspecialistaService;
exports.EspecialistaService = EspecialistaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [especialista_repository_1.EspecialistaRepository])
], EspecialistaService);
//# sourceMappingURL=especialista.service.js.map