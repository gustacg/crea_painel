import { ART } from "@/types/art";
import { FileBadge, ArrowRight, CalendarDays, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArtSelectorProps {
  onSelect: (art: ART) => void;
}

const mockArts: ART[] = [
  {
    id: "art-1",
    numero: "MA20230012345",
    dataRegistro: "10/05/2023",
    status: "Ativa",
    resumo: "Execução de Projeto Elétrico Predial",
    textoCompleto: "Anotação de Responsabilidade Técnica referente à execução do projeto elétrico predial para o empreendimento X, contemplando entrada de energia, distribuição e pontos de consumo. Responsável pelo dimensionamento e aprovação junto à concessionária local.",
    usuario: {
      nome: "Gustavo Engenheiro",
      registroCREA: "123456789-MA",
      registroNacional: "258963147",
      processoRegistro: "PR-2023/123",
      cpf: "123.456.789-00",
      titulos: ["Engenheiro Eletricista", "Engenheiro de Segurança do Trabalho"],
      atribuicao: "Art. 8º da Resolução nº 218/73",
      restricoes: "Nenhuma",
      dataCadastro: "15/01/2010",
      dataRegistro: "20/02/2010",
      situacaoRegistro: "Ativo",
      ultimoAnoPago: 2024,
      email: "gustavo.eng@email.com",
      observacao: "Profissional regular",
      possuiCarteiraDigital: true,
      situacaoCarteira: "Válida",
      dataSituacao: "01/01/2024",
      telefone: "(98) 99999-9999"
    },
    empresa: {
      nome: "Construtora Alfa Ltda",
      cnpj: "12.345.678/0001-90",
      endereco: "Av. dos Holandeses, 1000 - São Luís, MA"
    }
  },
  {
    id: "art-2",
    numero: "MA20230054321",
    dataRegistro: "22/08/2023",
    status: "Baixada",
    resumo: "Laudo Técnico de Instalações",
    textoCompleto: "Elaboração de laudo técnico atestando as condições de segurança das instalações elétricas do edifício Y. O laudo inclui medição piezométrica e de aterramento.",
    usuario: {
      nome: "Gustavo Engenheiro",
      registroCREA: "123456789-MA",
      registroNacional: "258963147",
      processoRegistro: "PR-2023/123",
      cpf: "123.456.789-00",
      titulos: ["Engenheiro Eletricista"],
      atribuicao: "Art. 8º da Resolução nº 218/73",
      restricoes: "Nenhuma",
      dataCadastro: "15/01/2010",
      dataRegistro: "20/02/2010",
      situacaoRegistro: "Baixado Temporariamente",
      ultimoAnoPago: 2023,
      email: "gustavo.eng@email.com",
      observacao: "Nenhuma especial",
      possuiCarteiraDigital: false,
      situacaoCarteira: "Expirada",
      dataSituacao: "31/12/2023",
      telefone: "(98) 99999-9999"
    },
    empresa: {
      nome: "Edifício Y Condomínio",
      cnpj: "98.765.432/0001-10",
      endereco: "Rua do Sol, 200 - Centro, São Luís, MA"
    }
  },
  {
    id: "art-3",
    numero: "MA20240009876",
    dataRegistro: "15/01/2024",
    status: "Ativa",
    resumo: "Projeto Estrutural de Concreto Armado",
    textoCompleto: "ART de projeto estrutural englobando fundações profundas e superestrutura em concreto armado para prédio residencial de 12 pavimentos.",
    usuario: {
      nome: "Gustavo Engenheiro",
      registroCREA: "123456789-MA",
      registroNacional: "258963147",
      processoRegistro: "PR-2023/123",
      cpf: "123.456.789-00",
      titulos: ["Engenheiro Civil"],
      atribuicao: "Art. 7º da Resolução nº 218/73",
      restricoes: "Nenhuma",
      dataCadastro: "15/01/2010",
      dataRegistro: "20/02/2010",
      situacaoRegistro: "Ativo",
      ultimoAnoPago: 2024,
      email: "gustavo.eng@email.com",
      observacao: "Mestre em Estruturas",
      possuiCarteiraDigital: true,
      situacaoCarteira: "Válida",
      dataSituacao: "02/01/2024",
      telefone: "(98) 99999-9999"
    },
    empresa: {
      nome: "Incorporadora Beta S.A.",
      cnpj: "45.678.901/0001-50",
      endereco: "Av. Litorânea, 5000 - São Luís, MA"
    }
  }
];

export const ArtSelector = ({ onSelect }: ArtSelectorProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-10 py-8 md:py-12 px-4">
      <div className="flex flex-col items-center text-center gap-3">
        <img src="/Logo preta.png" alt="CREA-MA" className="h-12 md:h-16 max-w-[200px] object-contain mb-4" loading="lazy" />
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#003399]">Selecione sua A.R.T. para revisão</h2>
        <p className="text-base md:text-lg text-muted-foreground w-full max-w-2xl font-medium">
          Selecione uma Anotação de Responsabilidade Técnica abaixo para visualizar os detalhes,
          anexar documentos obrigatórios e realizar a análise inteligente via IA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {mockArts.map((art) => (
          <button
            key={art.id}
            onClick={() => onSelect(art)}
            className="flex flex-col text-left bg-card hover:bg-accent/50 border border-border/60 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-[1.5rem] p-6 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#003399] to-[#427BBD] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-start justify-between w-full mb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-[#003399]">
                <FileBadge className="h-6 w-6" />
              </div>
              <span className={cn(
                "text-xs font-semibold px-2.5 py-1 rounded-full",
                art.status === "Ativa" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                art.status === "Baixada" ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" :
                "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              )}>
                {art.status}
              </span>
            </div>

            <h3 className="text-lg font-bold mb-1 group-hover:text-[#003399] transition-colors">{art.numero}</h3>
            <p className="text-sm font-medium text-foreground/80 mb-4 line-clamp-2">
              {art.resumo}
            </p>

            <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-border/50 w-full mb-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Building2 className="h-3.5 w-3.5" />
                <span className="truncate">{art.empresa.nome}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>Registrada em {art.dataRegistro}</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-between mt-auto text-sm font-semibold text-[#003399]">
              <span>Selecionar ART</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
