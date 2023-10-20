import { AgendaService } from './agenda.service';
export declare class AgendaController {
    private readonly agendaService;
    constructor(agendaService: AgendaService);
    findAll(): Promise<import("../../model/entities/Agenda").Agenda[]>;
    deleteAgenda(id: number): Promise<void>;
}
