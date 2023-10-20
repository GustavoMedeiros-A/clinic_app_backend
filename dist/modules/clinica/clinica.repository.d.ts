import { Repository } from 'typeorm';
import { Clinica } from 'src/model/entities/Clinica';
import { ClinicaDTO } from './dtos/clinica.dto';
export declare class ClinicaRepository {
    private readonly clinicaModel;
    constructor(clinicaModel: Repository<Clinica>);
    findById(id: number): Promise<Clinica>;
    findAll(): Promise<Clinica[]>;
    createClinica(clinicaDto: ClinicaDTO): Promise<Clinica>;
    deleteById(id: number): Promise<void>;
}
