import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { ClinicaDTO } from './dtos/clinica.dto';

@Controller('/api/clinica')
export class ClinicaController {
  constructor(private readonly clinicaService: ClinicaService) {}

  @Get()
  public findAll() {
    return this.clinicaService.findAll();
  }

  @Post()
  public createClinica(@Body() clinicaDto: ClinicaDTO) {
    return this.clinicaService.createClinica(clinicaDto);
  }

  @Delete(':id')
  public deleteProntuario(@Param() id: number) {
    return this.clinicaService.deleteById(id);
  }
}
