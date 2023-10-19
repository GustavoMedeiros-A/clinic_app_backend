import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { EspecialistaClinicaService } from './especialista_clinica.service';
import { EspecialistaClinicaInputDTO } from './dtos/especialistaClinica.dto';

@Controller('/api/especialista_clinica')
export class EspecialistaClinicaController {
  constructor(
    private readonly especialistaClinicaService: EspecialistaClinicaService,
  ) {}

  @Get()
  public findAll() {
    return this.especialistaClinicaService.findAll();
  }

  @Post()
  public create(@Body() especialistaClinicaDTO: EspecialistaClinicaInputDTO) {
    return this.especialistaClinicaService.create(especialistaClinicaDTO);
  }
}
