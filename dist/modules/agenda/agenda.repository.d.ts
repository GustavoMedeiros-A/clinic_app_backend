import { Repository } from 'typeorm';
import { Agenda } from 'src/model/entities/Agenda';
export declare class AgendaRepository {
    private readonly agendaModel;
    constructor(agendaModel: Repository<Agenda>);
    findById(id: number): Promise<Agenda>;
    findAll(): Promise<Agenda[]>;
    deleteById(id: number): Promise<void>;
}
