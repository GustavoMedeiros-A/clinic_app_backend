"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Clinica_1 = require("../../model/entities/Clinica");
const clinica_controller_1 = require("./clinica.controller");
const clinica_service_1 = require("./clinica.service");
const clinica_repository_1 = require("./clinica.repository");
let ClinicaModule = class ClinicaModule {
};
exports.ClinicaModule = ClinicaModule;
exports.ClinicaModule = ClinicaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Clinica_1.Clinica])],
        controllers: [clinica_controller_1.ClinicaController],
        providers: [clinica_service_1.ClinicaService, clinica_repository_1.ClinicaRepository],
    })
], ClinicaModule);
//# sourceMappingURL=clinica.module.js.map