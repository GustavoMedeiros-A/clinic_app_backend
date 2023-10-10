import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinica } from 'src/model/entities/Clinica';
import { ClinicaController } from './clinica.controller';
import { ClinicaService } from './clinica.service';
import { ClinicaRepository } from './clinica.repository';


@Module({
  imports: [TypeOrmModule.forFeature([Clinica])],
  controllers: [ClinicaController],
  providers: [ClinicaService, ClinicaRepository],
})
export class ClinicaModule {}
