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
exports.Especialista = void 0;
const typeorm_1 = require("typeorm");
let Especialista = class Especialista {
};
exports.Especialista = Especialista;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Especialista.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Especialista.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Especialista.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "profissao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "identidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "expedidor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "complemento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "telefone_residencial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "telefone_comercial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "telefone_celular", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "bloqueado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "posto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome_de_guerra' }),
    __metadata("design:type", String)
], Especialista.prototype, "nomeDeGuerra", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Especialista.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Especialista.prototype, "obs", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'codigo_dgp' }),
    __metadata("design:type", String)
], Especialista.prototype, "codigoDGP", void 0);
exports.Especialista = Especialista = __decorate([
    (0, typeorm_1.Entity)({ name: 'especialista' })
], Especialista);
//# sourceMappingURL=Especialista.js.map