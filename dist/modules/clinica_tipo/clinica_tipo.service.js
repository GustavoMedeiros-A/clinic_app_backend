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
exports.ClinicaTipoService = void 0;
const common_1 = require("@nestjs/common");
const clinica_tipo_repository_1 = require("./clinica_tipo.repository");
let ClinicaTipoService = class ClinicaTipoService {
    constructor(clinicaTipoRepository) {
        this.clinicaTipoRepository = clinicaTipoRepository;
    }
    async findAll() {
        return await this.clinicaTipoRepository.findAll();
    }
    async createClinica(clinicaTipoDTO) {
        return await this.clinicaTipoRepository.createClinica(clinicaTipoDTO);
    }
    async deleteById(id) {
        const clinica = this.clinicaTipoRepository.findById(id);
        if (!clinica) {
            throw new common_1.NotFoundException();
        }
        await this.clinicaTipoRepository.deleteById(id);
        return `clinica ${(await clinica).nome} deleted`;
    }
};
exports.ClinicaTipoService = ClinicaTipoService;
exports.ClinicaTipoService = ClinicaTipoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [clinica_tipo_repository_1.ClinicaTipoRepository])
], ClinicaTipoService);
//# sourceMappingURL=clinica_tipo.service.js.map