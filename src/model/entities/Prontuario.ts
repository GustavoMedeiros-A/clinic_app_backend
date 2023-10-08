import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'prontuario' })
export class Prontuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  validade_atendimento: number | null;

  @Column()
  prontuario: string;

  @Column({ nullable: true })
  senha: string | null;

  @Column({ nullable: true })
  pasta_prontuario: string | null;

  @Column({ type: 'int', nullable: true })
  foto_prontuario_uri: number | null;

  @Column({ type: 'date', nullable: true })
  data_nascimento: Date | null;

  @Column({ length: 2, nullable: true })
  sequencial: string | null;

  @Column({ nullable: true })
  email: string | null;

  @Column({ nullable: true })
  chave_recuperar_senha: string | null;

  @Column()
  bloqueado: string;

  @Column()
  nome: string;

  @Column()
  situacao: string;

  @Column()
  sexo: string;

  @Column()
  CPF: string;

  @Column()
  posto_graduacao: string;

  @Column()
  identidade: string;

  @Column()
  expedidor: string;

  @Column()
  codom: string;

  @Column()
  preccp: string;

  @Column()
  estado_civil: string;

  @Column()
  naturalidade: string;

  @Column()
  nome_pai: string;

  @Column()
  nome_mae: string;

  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  complemento: string;

  @Column()
  telefone_residencial: string;

  @Column()
  telefone_celular: string;

  @Column()
  telefone_comercial: string;
}
