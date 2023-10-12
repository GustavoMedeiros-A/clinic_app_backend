import { Body, Controller, Get, Post } from "@nestjs/common";
import { DiaSemanaService } from "./dia_semana.service";
import { DiaSemanaDTO } from "./dtos/dia_semana.dto";


@Controller("/api/dia_semana")
export class DiaSemanaController {
    constructor(private readonly diaSemanaService: DiaSemanaService) {}

    @Get()
    public findAll() {
        return this.diaSemanaService.findAll()
    }

    @Post()
    public create(@Body() diaSemana: DiaSemanaDTO) {
        return this.diaSemanaService.create(diaSemana)
    }

}