import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { HorarioService } from './horario.service';
import { HorarioInputDTO } from './dtos/horario.dto';

@Controller('/api/horario')
export class HorarioController {
  constructor(private readonly horarioService: HorarioService) {}

  @Get()
  public findAll() {
    return this.horarioService.findAll();
  }

  @Post()
  public create(@Body() horarioDTO: HorarioInputDTO) {
    return this.horarioService.create(horarioDTO);
  }
}
