import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Especialista } from 'src/model/entities/Especialista';
import { EspecialistaDTO } from './dtos/especialista.dto';

export class EspecialistaRepository {
  constructor(
    @InjectRepository(Especialista)
    private readonly especialistaModel: Repository<Especialista>,
  ) {}

  async findById(id: number) {
    return await this.especialistaModel.findOneBy({ id });
  }

  async findAll() {
    return await this.especialistaModel.find();
  }

  async createEspecialista(especialistaDto: EspecialistaDTO): Promise<Especialista> {
    const especialista = this.especialistaModel.create(especialistaDto);
    return await this.especialistaModel.save(especialista);
  }

  async deleteById(id: number) {
    await this.especialistaModel.delete({id})
  }
}
