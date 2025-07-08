export interface Aluno {
  id?: number;
  nome: string;
  cpf: string;
  email: string;
  login: string;
  senha: string;
  mediaMotorista: number;
  mediaCaronista: number;
}
export interface NovoAluno {
  nome: string;
  cpf: string;
  email: string;
  login: string;
  senha: string;
}