import { EntityRepository, Repository } from 'typeorm';
import { Prontuario } from 'src/model/entities/Prontuario';
import { ProntuarioDTO } from './dtos/Prontuario.dto';
import { Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export class ProntuarioRepository {
  constructor(
    @InjectRepository(Prontuario)
    private readonly prontuarioModel: Repository<Prontuario>,
  ) {}

  async findById(id: number) {
    return await this.prontuarioModel.findOneBy({ id });
  }

  async findAll() {
    return await this.prontuarioModel.find();
  }

  async createProntuario(prontuarioDto: ProntuarioDTO): Promise<Prontuario> {
    const prontuario = this.prontuarioModel.create(prontuarioDto);
    return await this.prontuarioModel.save(prontuario);
  }

  async deleteById(id: number) {
    await this.prontuarioModel.delete({id})
  }
}
