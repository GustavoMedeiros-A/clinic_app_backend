"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicaTipoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ClinicaTipo_1 = require("../../model/entities/ClinicaTipo");
const clinica_tipo_controller_1 = require("./clinica_tipo.controller");
const clinica_tipo_service_1 = require("./clinica_tipo.service");
const clinica_tipo_repository_1 = require("./clinica_tipo.repository");
let ClinicaTipoModule = class ClinicaTipoModule {
};
exports.ClinicaTipoModule = ClinicaTipoModule;
exports.ClinicaTipoModule = ClinicaTipoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ClinicaTipo_1.TipoClinica])],
        controllers: [clinica_tipo_controller_1.ClinicaTipoController],
        providers: [clinica_tipo_service_1.ClinicaTipoService, clinica_tipo_repository_1.ClinicaTipoRepository],
    })
], ClinicaTipoModule);
//# sourceMappingURL=clinica_tipo.module.js.map