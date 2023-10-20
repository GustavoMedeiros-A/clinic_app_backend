import { Repository } from 'typeorm';
import { EspecialistaClinica } from 'src/model/entities/EspecialistaClinica';
import { Horario } from 'src/model/entities/Horario';
import { HorarioInputDTO } from './dtos/horario.dto';
import { DiaSemana } from 'src/model/entities/DiaSemana';
export declare class HorarioService {
    private horarioRepository;
    private especialistaClinicaRepository;
    private diaSemanaRepository;
    constructor(horarioRepository: Repository<Horario>, especialistaClinicaRepository: Repository<EspecialistaClinica>, diaSemanaRepository: Repository<DiaSemana>);
    findAll(): Promise<Horario[]>;
    create(inputDTO: HorarioInputDTO): Promise<Horario>;
}
