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
exports.EspecialistaController = void 0;
const common_1 = require("@nestjs/common");
const especialista_service_1 = require("./especialista.service");
const especialista_dto_1 = require("./dtos/especialista.dto");
let EspecialistaController = class EspecialistaController {
    constructor(especialistaService) {
        this.especialistaService = especialistaService;
    }
    findAll() {
        return this.especialistaService.findAll();
    }
    create(especialistaDTO) {
        return this.especialistaService.create(especialistaDTO);
    }
    delete(id) {
        return this.especialistaService.deleteById(id);
    }
};
exports.EspecialistaController = EspecialistaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EspecialistaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [especialista_dto_1.EspecialistaDTO]),
    __metadata("design:returntype", void 0)
], EspecialistaController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EspecialistaController.prototype, "delete", null);
exports.EspecialistaController = EspecialistaController = __decorate([
    (0, common_1.Controller)('/api/especialista'),
    __metadata("design:paramtypes", [especialista_service_1.EspecialistaService])
], EspecialistaController);
//# sourceMappingURL=especialista.controller.js.map