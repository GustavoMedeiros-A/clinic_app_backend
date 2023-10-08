import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'dia_semana' })
export class DiaSemana {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dia_semana: string;
}
