"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorarioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const EspecialistaClinica_1 = require("../../model/entities/EspecialistaClinica");
const Horario_1 = require("../../model/entities/Horario");
const horario_controller_1 = require("./horario.controller");
const horario_service_1 = require("./horario.service");
const DiaSemana_1 = require("../../model/entities/DiaSemana");
let HorarioModule = class HorarioModule {
};
exports.HorarioModule = HorarioModule;
exports.HorarioModule = HorarioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([EspecialistaClinica_1.EspecialistaClinica, Horario_1.Horario, DiaSemana_1.DiaSemana]),
        ],
        controllers: [horario_controller_1.HorarioController],
        providers: [horario_service_1.HorarioService],
    })
], HorarioModule);
//# sourceMappingURL=horario.module.js.map