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
exports.ClinicaController = void 0;
const common_1 = require("@nestjs/common");
const clinica_service_1 = require("./clinica.service");
let ClinicaController = class ClinicaController {
    constructor(clinicaService) {
        this.clinicaService = clinicaService;
    }
    findAll() {
        return this.clinicaService.findAll();
    }
    createClinica(clinicaDto) {
        return this.clinicaService.createClinica(clinicaDto);
    }
    deleteProntuario(id) {
        return this.clinicaService.deleteById(id);
    }
};
exports.ClinicaController = ClinicaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClinicaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClinicaController.prototype, "createClinica", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClinicaController.prototype, "deleteProntuario", null);
exports.ClinicaController = ClinicaController = __decorate([
    (0, common_1.Controller)('/api/clinica'),
    __metadata("design:paramtypes", [clinica_service_1.ClinicaService])
], ClinicaController);
//# sourceMappingURL=clinica.controller.js.map