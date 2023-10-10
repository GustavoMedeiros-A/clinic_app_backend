import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Especialista } from 'src/model/entities/Especialista';
import { EspecialistaClinica } from 'src/model/entities/EspecialistaClinica';

export class EspecialistaClinicaRepository {
  constructor(
    @InjectRepository(EspecialistaClinica)
    private readonly especialistaClinicaModel: Repository<EspecialistaClinica>,
  ) {}

  async findAll() {
    return await this.especialistaClinicaModel.find();
  }
  

}
