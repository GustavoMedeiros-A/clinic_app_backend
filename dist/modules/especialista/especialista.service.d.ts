import { EspecialistaRepository } from './especialista.repository';
import { EspecialistaDTO } from './dtos/especialista.dto';
export declare class EspecialistaService {
    private readonly especialistaRepository;
    constructor(especialistaRepository: EspecialistaRepository);
    findAll(): Promise<import("../../model/entities/Especialista").Especialista[]>;
    create(especialistaDto: EspecialistaDTO): Promise<EspecialistaDTO>;
    deleteById(id: number): Promise<void>;
}
