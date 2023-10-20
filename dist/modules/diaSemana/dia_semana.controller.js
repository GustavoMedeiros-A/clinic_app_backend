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
exports.DiaSemanaController = void 0;
const common_1 = require("@nestjs/common");
const dia_semana_service_1 = require("./dia_semana.service");
const dia_semana_dto_1 = require("./dtos/dia_semana.dto");
let DiaSemanaController = class DiaSemanaController {
    constructor(diaSemanaService) {
        this.diaSemanaService = diaSemanaService;
    }
    findAll() {
        return this.diaSemanaService.findAll();
    }
    create(diaSemana) {
        return this.diaSemanaService.create(diaSemana);
    }
};
exports.DiaSemanaController = DiaSemanaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiaSemanaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dia_semana_dto_1.DiaSemanaDTO]),
    __metadata("design:returntype", void 0)
], DiaSemanaController.prototype, "create", null);
exports.DiaSemanaController = DiaSemanaController = __decorate([
    (0, common_1.Controller)("/api/dia_semana"),
    __metadata("design:paramtypes", [dia_semana_service_1.DiaSemanaService])
], DiaSemanaController);
//# sourceMappingURL=dia_semana.controller.js.map