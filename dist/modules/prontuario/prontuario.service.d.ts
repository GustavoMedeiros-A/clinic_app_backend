import { ProntuarioRepository } from './prontuario.repository';
import { ProntuarioDTO } from './dtos/Prontuario.dto';
export declare class ProntuarioService {
    private readonly prontuarioRepository;
    constructor(prontuarioRepository: ProntuarioRepository);
    findAll(): Promise<import("../../model/entities/Prontuario").Prontuario[]>;
    createProntuario(prontuarioDto: ProntuarioDTO): Promise<ProntuarioDTO>;
    deleteById(id: number): Promise<void>;
}
