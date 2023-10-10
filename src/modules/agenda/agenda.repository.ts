import { EntityRepository, Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Agenda } from 'src/model/entities/Agenda';
import { AgendaDTO } from './dtos/agenda.dto';

export class AgendaRepository {
  constructor(
    @InjectRepository(Agenda)
    private readonly agendaModel: Repository<Agenda>,
  ) {}

  async findById(id: number) {
    return await this.agendaModel.findOneBy({ id });
  }

  async findAll() {
    return await this.agendaModel.find();
  }

//   async createAgenda(agendaDto: AgendaDTO): Promise<Agenda> {
//     const agenda = this.agendaModel.create(agendaDto);
//     return await this.agendaModel.save(agenda);
//   }

  async deleteById(id: number) {
    await this.agendaModel.delete({id})
  }
}
