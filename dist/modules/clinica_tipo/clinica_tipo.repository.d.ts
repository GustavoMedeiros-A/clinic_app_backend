import { Repository } from 'typeorm';
import { TipoClinica } from 'src/model/entities/ClinicaTipo';
import { ClinicaTipoDTO } from './dtos/clinica_tipo.dto';
export declare class ClinicaTipoRepository {
    private readonly clinicaTipoModel;
    constructor(clinicaTipoModel: Repository<TipoClinica>);
    findById(id: number): Promise<TipoClinica>;
    findAll(): Promise<TipoClinica[]>;
    createClinica(clinicaTipoDto: ClinicaTipoDTO): Promise<TipoClinica>;
    deleteById(id: number): Promise<void>;
}
