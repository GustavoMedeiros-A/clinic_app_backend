import { ProntuarioService } from './prontuario.service';
import { ProntuarioDTO } from './dtos/Prontuario.dto';
export declare class ProntuarioController {
    private readonly prontuarioService;
    constructor(prontuarioService: ProntuarioService);
    findAll(): Promise<import("../../model/entities/Prontuario").Prontuario[]>;
    createProntuario(prontuarioDto: ProntuarioDTO): Promise<ProntuarioDTO>;
    deleteProntuario(id: number): Promise<void>;
}
