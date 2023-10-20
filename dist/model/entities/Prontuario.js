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
exports.Prontuario = void 0;
const typeorm_1 = require("typeorm");
let Prontuario = class Prontuario {
};
exports.Prontuario = Prontuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Prontuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Prontuario.prototype, "validade_atendimento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "prontuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Prontuario.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Prontuario.prototype, "pasta_prontuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Prontuario.prototype, "foto_prontuario_uri", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Prontuario.prototype, "data_nascimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2, nullable: true }),
    __metadata("design:type", String)
], Prontuario.prototype, "sequencial", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Prontuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Prontuario.prototype, "chave_recuperar_senha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "bloqueado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "situacao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "CPF", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "posto_graduacao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "identidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "expedidor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "codom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "preccp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "estado_civil", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "naturalidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "nome_pai", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "nome_mae", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "complemento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "telefone_residencial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "telefone_celular", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Prontuario.prototype, "telefone_comercial", void 0);
exports.Prontuario = Prontuario = __decorate([
    (0, typeorm_1.Entity)({ name: 'prontuario' })
], Prontuario);
//# sourceMappingURL=Prontuario.js.map