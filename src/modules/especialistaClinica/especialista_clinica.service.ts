import {  Injectable } from '@nestjs/common';
import { EspecialistaClinicaInputDTO } from './dtos/especialistaClinica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Especialista } from 'src/model/entities/Especialista';
import { Clinica } from 'src/model/entities/Clinica';
import { EspecialistaClinica } from 'src/model/entities/EspecialistaClinica';

@Injectable()
export class EspecialistaClinicaService {
  constructor(
      @InjectRepository(EspecialistaClinica)
      private especialistaClinicaRepository: Repository<EspecialistaClinica>,
        @InjectRepository(Especialista)
        private especialistaRepository: Repository<Especialista>,
        @InjectRepository(Clinica)
        private clinicaRepository: Repository<Clinica>,
    ) {}


  async create(inputDTO: EspecialistaClinicaInputDTO) {

    const clinica_return = await this.clinicaRepository.findOneBy({id: inputDTO.clinica});
    const especialista = await this.especialistaRepository.findOneBy({id: inputDTO.especialista});

    const partialEspecialistaClinica: DeepPartial<EspecialistaClinica> = {
      clinica: clinica_return,
      especialista: especialista,
    };

    const especialistaClinica = this.especialistaClinicaRepository.create(partialEspecialistaClinica);

    await this.especialistaClinicaRepository.save(especialistaClinica);

    return especialistaClinica;

  }

}
