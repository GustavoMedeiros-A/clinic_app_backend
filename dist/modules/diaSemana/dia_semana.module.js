"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaSemanaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const DiaSemana_1 = require("../../model/entities/DiaSemana");
const dia_semana_controller_1 = require("./dia_semana.controller");
const dia_semana_service_1 = require("./dia_semana.service");
const dia_semana_repository_1 = require("./dia_semana.repository");
let DiaSemanaModule = class DiaSemanaModule {
};
exports.DiaSemanaModule = DiaSemanaModule;
exports.DiaSemanaModule = DiaSemanaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([DiaSemana_1.DiaSemana])],
        controllers: [dia_semana_controller_1.DiaSemanaController],
        providers: [dia_semana_service_1.DiaSemanaService, dia_semana_repository_1.DiaSemanaRepository]
    })
], DiaSemanaModule);
//# sourceMappingURL=dia_semana.module.js.map