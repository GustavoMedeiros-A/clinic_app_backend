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
import { ClinicaTipoModule } from './modules/clinica_tipo/clinica_tipo.module';
import { HorarioModule } from './modules/horario/horario.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.RAILWAY_MYSQL_HOST,
      port: parseInt(process.env.RAILWAY_MYSQL_PORT),
      username: process.env.RAILWAY_MYSQL_USER,
      password: process.env.RAILWAY_MYSQL_PASSWORD,
      database: process.env.RAILWAY_MYSQL_DATABASE,
      entities: [`${__dirname}/model/entities/**/*.{js,ts}`],
      synchronize: true,
    }),
    ProntuarioModule,
    AuthModule,
    UserModule,
    ClinicaModule,
    EspecialistaModule,
    EspecialistaClinicaModule,
    DiaSemanaModule,
    ClinicaTipoModule,
    HorarioModule,
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
