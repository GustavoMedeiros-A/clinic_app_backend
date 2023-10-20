import { EspecialistaService } from './especialista.service';
import { EspecialistaDTO } from './dtos/especialista.dto';
export declare class EspecialistaController {
    private readonly especialistaService;
    constructor(especialistaService: EspecialistaService);
    findAll(): Promise<import("../../model/entities/Especialista").Especialista[]>;
    create(especialistaDTO: EspecialistaDTO): Promise<EspecialistaDTO>;
    delete(id: number): Promise<void>;
}
