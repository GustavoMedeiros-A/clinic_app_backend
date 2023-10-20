import { Repository } from 'typeorm';
import { Especialista } from 'src/model/entities/Especialista';
import { EspecialistaDTO } from './dtos/especialista.dto';
export declare class EspecialistaRepository {
    private readonly especialistaModel;
    constructor(especialistaModel: Repository<Especialista>);
    findById(id: number): Promise<Especialista>;
    findAll(): Promise<Especialista[]>;
    createEspecialista(especialistaDto: EspecialistaDTO): Promise<Especialista>;
    deleteById(id: number): Promise<void>;
}
