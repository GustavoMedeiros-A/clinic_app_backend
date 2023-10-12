import { BadRequestException, Injectable } from "@nestjs/common";
import { DiaSemanaRepository } from "./dia_semana.repository";
import { DiaSemanaDTO } from "./dtos/dia_semana.dto";



@Injectable()
export class DiaSemanaService {
    constructor(private readonly diaSemanaRepository: DiaSemanaRepository) {}


    async findAll() {
        return await this.diaSemanaRepository.findAll()
    }

    async create(diaSemana: DiaSemanaDTO): Promise<DiaSemanaDTO> {
        const nameExist = await this.diaSemanaRepository.findByName(diaSemana.dia_semana)
        if(nameExist) {
            throw new BadRequestException({message: "Dia da semana já cadastrado"})
        }
        return await this.diaSemanaRepository.create(diaSemana)
    }

}