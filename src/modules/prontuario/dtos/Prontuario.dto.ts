export interface ProntuarioDTO {
  id?: number;
  validade_atendimento?: number | null;
  prontuario: string;
  senha?: string | null;
  pasta_prontuario?: string | null;
  foto_prontuario_uri?: number | null;
  data_nascimento?: Date | null;
  sequencial?: string | null;
  email?: string | null;
  chave_recuperar_senha?: string | null;
  bloqueado: string;
  nome: string;
  situacao: string;
  sexo: string;
  CPF: string;
  posto_graduacao: string;
  identidade: string;
  expedidor: string;
  codom: string;
  preccp: string;
  estado_civil: string;
  naturalidade: string;
  nome_pai: string;
  nome_mae: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  complemento: string;
  telefone_residencial: string;
  telefone_celular: string;
  telefone_comercial: string;
}
