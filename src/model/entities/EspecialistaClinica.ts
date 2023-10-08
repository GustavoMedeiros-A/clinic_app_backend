import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Clinica } from './Clinica';
import { Especialista } from './Especialista';

@Entity({ name: 'especialista_clinica' })
export class EspecialistaClinica {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Clinica, (clinica) => clinica.id, { eager: true })
  clinica: Clinica;

  @ManyToOne(() => Especialista, (especialista) => especialista.id, {
    eager: true,
  })
  especialista: Especialista;
}
