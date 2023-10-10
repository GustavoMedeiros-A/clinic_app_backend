import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialistaClinica } from 'src/model/entities/EspecialistaClinica';
import { EspecialistaClinicaController } from './especialista_clinica.controller';
import { EspecialistaClinicaService } from './especialista_clinica.service';
import { EspecialistaClinicaRepository } from './especialista_clinica.repository';
import { EspecialistaModule } from '../especialista/especialista.module'; // Correct import path
import { Especialista } from 'src/model/entities/Especialista';
import { Clinica } from 'src/model/entities/Clinica';

@Module({
  imports: [TypeOrmModule.forFeature([EspecialistaClinica, Especialista, Clinica])],
  controllers: [EspecialistaClinicaController],
  providers: [EspecialistaClinicaService, EspecialistaClinicaRepository],
})
export class EspecialistaClinicaModule {}
