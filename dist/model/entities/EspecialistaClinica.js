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
exports.EspecialistaClinica = void 0;
const typeorm_1 = require("typeorm");
const Clinica_1 = require("./Clinica");
const Especialista_1 = require("./Especialista");
let EspecialistaClinica = class EspecialistaClinica {
};
exports.EspecialistaClinica = EspecialistaClinica;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EspecialistaClinica.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Clinica_1.Clinica, (clinica) => clinica.id, { eager: true }),
    __metadata("design:type", Clinica_1.Clinica)
], EspecialistaClinica.prototype, "clinica", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Especialista_1.Especialista, (especialista) => especialista.id, {
        eager: true,
    }),
    __metadata("design:type", Especialista_1.Especialista)
], EspecialistaClinica.prototype, "especialista", void 0);
exports.EspecialistaClinica = EspecialistaClinica = __decorate([
    (0, typeorm_1.Entity)({ name: 'especialista_clinica' })
], EspecialistaClinica);
//# sourceMappingURL=EspecialistaClinica.js.map