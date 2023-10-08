import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { EspecialistaClinica } from './EspecialistaClinica';

@Entity({ name: 'agenda' })
export class Agenda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  horario: string;

  @Column({ type: 'date' })
  data: Date;

  @ManyToOne(
    () => EspecialistaClinica,
    (especialistaClinica) => especialistaClinica.id,
    { eager: true },
  )
  especialistaClinica: EspecialistaClinica;

  @Column({ default: 'L' })
  status: string;

  @Column({ default: '-1' })
  prontuario: string;

  @Column({ default: 'S' })
  bloqueado: string;

  @Column({ type: 'datetime', nullable: true })
  data_modificacao: Date | null;
}
