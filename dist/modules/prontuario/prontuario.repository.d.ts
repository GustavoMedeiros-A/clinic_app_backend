import { Repository } from 'typeorm';
import { Prontuario } from 'src/model/entities/Prontuario';
import { ProntuarioDTO } from './dtos/Prontuario.dto';
export declare class ProntuarioRepository {
    private readonly prontuarioModel;
    constructor(prontuarioModel: Repository<Prontuario>);
    findById(id: number): Promise<Prontuario>;
    findAll(): Promise<Prontuario[]>;
    createProntuario(prontuarioDto: ProntuarioDTO): Promise<Prontuario>;
    deleteById(id: number): Promise<void>;
}
