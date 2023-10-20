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
exports.ProntuarioService = void 0;
const common_1 = require("@nestjs/common");
const prontuario_repository_1 = require("./prontuario.repository");
let ProntuarioService = class ProntuarioService {
    constructor(prontuarioRepository) {
        this.prontuarioRepository = prontuarioRepository;
    }
    async findAll() {
        return await this.prontuarioRepository.findAll();
    }
    async createProntuario(prontuarioDto) {
        return await this.prontuarioRepository.createProntuario(prontuarioDto);
    }
    async deleteById(id) {
        const prontuario = this.prontuarioRepository.findById(id);
        if (!prontuario) {
            throw new common_1.NotFoundException();
        }
        return await this.prontuarioRepository.deleteById(id);
    }
};
exports.ProntuarioService = ProntuarioService;
exports.ProntuarioService = ProntuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prontuario_repository_1.ProntuarioRepository])
], ProntuarioService);
//# sourceMappingURL=prontuario.service.js.map