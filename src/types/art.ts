export interface CREAUser {
  nome: string;
  registroCREA: string;
  registroNacional: string;
  processoRegistro: string;
  cpf: string;
  titulos: string[];
  atribuicao: string;
  restricoes: string;
  dataCadastro: string;
  dataRegistro: string;
  situacaoRegistro: string;
  ultimoAnoPago: string | number;
  email: string;
  observacao: string;
  possuiCarteiraDigital: boolean;
  situacaoCarteira: string;
  dataSituacao: string;
  telefone: string; // Keeping this around just in case
}

export interface CompanyInfo {
  nome: string;
  cnpj: string;
  endereco: string;
}

export interface ART {
  id: string;
  numero: string;
  dataRegistro: string;
  status: 'Ativa' | 'Baixada' | 'Cancelada';
  resumo: string;
  textoCompleto: string;
  usuario: CREAUser;
  empresa: CompanyInfo;
}
