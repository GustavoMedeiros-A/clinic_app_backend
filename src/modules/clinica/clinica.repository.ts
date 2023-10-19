import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Clinica } from 'src/model/entities/Clinica';
import { ClinicaDTO } from './dtos/clinica.dto';

export class ClinicaRepository {
  constructor(
    @InjectRepository(Clinica)
    private readonly clinicaModel: Repository<Clinica>,
  ) {}

  async findById(id: number) {
    return await this.clinicaModel.findOneBy({ id });
  }

  async findAll() {
    return await this.clinicaModel.find();
  }

  async createClinica(clinicaDto: ClinicaDTO): Promise<Clinica> {
    const clinica = this.clinicaModel.create(clinicaDto);
    return await this.clinicaModel.save(clinica);
  }

  async deleteById(id: number) {
    await this.clinicaModel.delete({ id });
  }
}
