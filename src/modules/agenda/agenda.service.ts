import { Injectable, NotFoundException } from '@nestjs/common';
import { AgendaRepository } from './agenda.repository';
import { AgendaDTO } from './dtos/agenda.dto';

@Injectable()
export class AgendaService {
  constructor(private readonly agendaRepository: AgendaRepository) {}

  async findAll() {
    return await this.agendaRepository.findAll();
  }

//   async createAgenda(agendaDto: AgendaDTO): Promise<AgendaDTO> {
//     return await this.agendaRepository.createAgenda(agendaDto);
//   }

  async deleteById(id: number) {
    const agenda = this.agendaRepository.findById(id)
    if(!agenda) {
      throw new NotFoundException()
    }
    return await this.agendaRepository.deleteById(id)
  }
}
