import { AgendaRepository } from './agenda.repository';
export declare class AgendaService {
    private readonly agendaRepository;
    constructor(agendaRepository: AgendaRepository);
    findAll(): Promise<import("../../model/entities/Agenda").Agenda[]>;
    deleteById(id: number): Promise<void>;
}
