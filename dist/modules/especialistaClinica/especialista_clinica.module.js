"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspecialistaClinicaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const EspecialistaClinica_1 = require("../../model/entities/EspecialistaClinica");
const especialista_clinica_controller_1 = require("./especialista_clinica.controller");
const especialista_clinica_service_1 = require("./especialista_clinica.service");
const Especialista_1 = require("../../model/entities/Especialista");
const Clinica_1 = require("../../model/entities/Clinica");
let EspecialistaClinicaModule = class EspecialistaClinicaModule {
};
exports.EspecialistaClinicaModule = EspecialistaClinicaModule;
exports.EspecialistaClinicaModule = EspecialistaClinicaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([EspecialistaClinica_1.EspecialistaClinica, Especialista_1.Especialista, Clinica_1.Clinica]),
        ],
        controllers: [especialista_clinica_controller_1.EspecialistaClinicaController],
        providers: [especialista_clinica_service_1.EspecialistaClinicaService],
    })
], EspecialistaClinicaModule);
//# sourceMappingURL=especialista_clinica.module.js.map