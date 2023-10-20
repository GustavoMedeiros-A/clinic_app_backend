"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prontuario_module_1 = require("./modules/prontuario/prontuario.module");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/user/user.module");
const auth_guard_1 = require("./modules/auth/auth.guard");
const core_1 = require("@nestjs/core");
const clinica_module_1 = require("./modules/clinica/clinica.module");
const especialista_module_1 = require("./modules/especialista/especialista.module");
const especialista_clinica_module_1 = require("./modules/especialistaClinica/especialista_clinica.module");
const dia_semana_module_1 = require("./modules/diaSemana/dia_semana.module");
const clinica_tipo_module_1 = require("./modules/clinica_tipo/clinica_tipo.module");
const horario_module_1 = require("./modules/horario/horario.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.RAILWAY_MYSQL_HOST,
                port: parseInt(process.env.RAILWAY_MYSQL_PORT),
                username: process.env.RAILWAY_MYSQL_USER,
                password: process.env.RAILWAY_MYSQL_PASSWORD,
                database: process.env.RAILWAY_MYSQL_DATABASE,
                entities: [`${__dirname}/model/entities/**/*.{js,ts}`],
                synchronize: true,
            }),
            prontuario_module_1.ProntuarioModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            clinica_module_1.ClinicaModule,
            especialista_module_1.EspecialistaModule,
            especialista_clinica_module_1.EspecialistaClinicaModule,
            dia_semana_module_1.DiaSemanaModule,
            clinica_tipo_module_1.ClinicaTipoModule,
            horario_module_1.HorarioModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map