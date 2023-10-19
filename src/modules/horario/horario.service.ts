import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { EspecialistaClinica } from 'src/model/entities/EspecialistaClinica';
import { Horario } from 'src/model/entities/Horario';
import { HorarioInputDTO } from './dtos/horario.dto';
import { NotFoundError } from 'rxjs';
import { DiaSemana } from 'src/model/entities/DiaSemana';

@Injectable()
export class HorarioService {
  constructor(
    @InjectRepository(Horario)
    private horarioRepository: Repository<Horario>,
    @InjectRepository(EspecialistaClinica)
    private especialistaClinicaRepository: Repository<EspecialistaClinica>,
    @InjectRepository(DiaSemana)
    private diaSemanaRepository: Repository<DiaSemana>,
  ) {}

  async findAll() {
    return await this.horarioRepository.find();
  }

  async create(inputDTO: HorarioInputDTO) {
    console.log('inputDTO.especialistaClinica', inputDTO.especialistaClinica);
    const especialistaClinica =
      await this.especialistaClinicaRepository.findOneBy({
        id: inputDTO.especialistaClinica,
      });
    const diaSemana = await this.diaSemanaRepository.findOneBy({
      id: inputDTO.id_dia_semana,
    });

    if (!especialistaClinica) {
      throw new NotFoundException('EspecialistaClinica not found');
    }
    if (!diaSemana) {
      throw new NotFoundException('DiaSemana not found');
    }
    const partialHorarioClinica: DeepPartial<Horario> = {
      especialistaClinica: especialistaClinica,
      id_dia_semana: diaSemana,
      hora_inicial: inputDTO.hora_inicial,
      minuto_inicial: inputDTO.minuto_inicial,
      hora_final: inputDTO.hora_final,
      minuto_final: inputDTO.minuto_final,
      quantidade_atendimentos: inputDTO.quantidade_atendimentos,
    };
    try {
      const horario = this.horarioRepository.create(partialHorarioClinica);
      await this.horarioRepository.save(horario);
      return horario;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
