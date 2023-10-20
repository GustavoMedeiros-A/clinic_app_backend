import { HorarioService } from './horario.service';
import { HorarioInputDTO } from './dtos/horario.dto';
export declare class HorarioController {
    private readonly horarioService;
    constructor(horarioService: HorarioService);
    findAll(): Promise<import("../../model/entities/Horario").Horario[]>;
    create(horarioDTO: HorarioInputDTO): Promise<import("../../model/entities/Horario").Horario>;
}
