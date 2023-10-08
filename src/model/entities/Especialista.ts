import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'especialista' })
export class Especialista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unsigned: true })
  codigo: number;

  @Column({ type: 'int', nullable: true })
  matricula: number | null;

  @Column()
  nome: string;

  @Column()
  profissao: string;

  @Column()
  identidade: string;

  @Column()
  expedidor: string;

  @Column()
  rua: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  telefone_residencial: string;

  @Column()
  telefone_comercial: string;

  @Column()
  telefone_celular: string;

  @Column()
  bloqueado: string;

  @Column()
  posto: string;

  @Column({ name: 'nome_de_guerra' })
  nomeDeGuerra: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  obs: string | null;

  @Column({ name: 'codigo_dgp' })
  codigoDGP: string;
}
