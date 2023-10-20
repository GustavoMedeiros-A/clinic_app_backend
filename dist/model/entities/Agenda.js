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
exports.Agenda = void 0;
const typeorm_1 = require("typeorm");
const EspecialistaClinica_1 = require("./EspecialistaClinica");
let Agenda = class Agenda {
};
exports.Agenda = Agenda;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Agenda.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Agenda.prototype, "horario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Agenda.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EspecialistaClinica_1.EspecialistaClinica, (especialistaClinica) => especialistaClinica.id, { eager: true }),
    __metadata("design:type", EspecialistaClinica_1.EspecialistaClinica)
], Agenda.prototype, "especialistaClinica", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'L' }),
    __metadata("design:type", String)
], Agenda.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '-1' }),
    __metadata("design:type", String)
], Agenda.prototype, "prontuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'S' }),
    __metadata("design:type", String)
], Agenda.prototype, "bloqueado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Agenda.prototype, "data_modificacao", void 0);
exports.Agenda = Agenda = __decorate([
    (0, typeorm_1.Entity)({ name: 'agenda' })
], Agenda);
//# sourceMappingURL=Agenda.js.map