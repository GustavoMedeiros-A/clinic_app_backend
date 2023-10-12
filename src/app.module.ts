import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProntuarioModule } from './modules/prontuario/prontuario.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { ClinicaModule } from './modules/clinica/clinica.module';
import { EspecialistaModule } from './modules/especialista/especialista.module';
import { EspecialistaClinicaModule } from './modules/especialistaClinica/especialista_clinica.module';
import { DiaSemanaModule } from './modules/diaSemana/dia_semana.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'clinic_app',
      entities: [`${__dirname}/model/entities/**/*.{js,ts}`],
      synchronize: true,
    }),
    ProntuarioModule,
    AuthModule,
    UserModule,
    ClinicaModule,
    EspecialistaModule,
    EspecialistaClinicaModule,
    DiaSemanaModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
