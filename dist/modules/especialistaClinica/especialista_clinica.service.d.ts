import { EspecialistaClinicaInputDTO } from './dtos/especialistaClinica.dto';
import { Repository } from 'typeorm';
import { Especialista } from 'src/model/entities/Especialista';
import { Clinica } from 'src/model/entities/Clinica';
import { EspecialistaClinica } from 'src/model/entities/EspecialistaClinica';
export declare class EspecialistaClinicaService {
    private especialistaClinicaRepository;
    private especialistaRepository;
    private clinicaRepository;
    constructor(especialistaClinicaRepository: Repository<EspecialistaClinica>, especialistaRepository: Repository<Especialista>, clinicaRepository: Repository<Clinica>);
    findAll(): Promise<EspecialistaClinica[]>;
    create(inputDTO: EspecialistaClinicaInputDTO): Promise<EspecialistaClinica>;
}
