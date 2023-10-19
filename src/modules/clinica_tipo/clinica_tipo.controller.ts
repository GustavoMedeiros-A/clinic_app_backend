import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { ClinicaTipoService } from './clinica_tipo.service';
import { ClinicaTipoDTO } from './dtos/clinica_tipo.dto';

@Controller('/api/clinica_tipo')
export class ClinicaTipoController {
  constructor(private readonly clinicaTipoService: ClinicaTipoService) {}

  @Get()
  public findAll() {
    return this.clinicaTipoService.findAll();
  }

  @Post()
  public createClinica(@Body() clinicaTipoDto: ClinicaTipoDTO) {
    return this.clinicaTipoService.createClinica(clinicaTipoDto);
  }

  @Delete(':id')
  public deleteProntuario(@Param() id: number) {
    return this.clinicaTipoService.deleteById(id);
  }
}
