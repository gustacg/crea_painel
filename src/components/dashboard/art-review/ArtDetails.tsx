import { ART } from "@/types/art";
import { ArrowLeft, User, Building2, AlignLeft, Paperclip, UploadCloud, Cpu, Award, CheckCircle2, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArtDetailsProps {
  art: ART;
  onBack: () => void;
}

const attachmentTypes = [
  "Atestado",
  "Contrato",
  "Relatório Fotográfico",
  "Nota Fiscal",
  "Declaração",
  "Anuência"
];

export const ArtDetails = ({ art, onBack }: ArtDetailsProps) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden absolute inset-0 bg-background text-foreground">
      
      {/* 1. Menu Lateral Esquerdo Fixo: Informações do Profissional */}
      <aside className="w-full md:w-80 lg:w-[340px] shrink-0 border-r border-border/60 bg-card/30 flex flex-col h-full overflow-hidden">
        {/* Back Button & Title Header */}
        <div className="px-6 py-5 border-b border-border/50 flex items-center justify-between sticky top-0 bg-card/95 backdrop-blur z-10">
          <button
            onClick={onBack}
            className="p-2 -ml-2 rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            aria-label="Voltar para a seleção"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">Profissional</span>
            <User className="h-4 w-4 text-[#003399]" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-6 pb-24 flex flex-col gap-6">
          {/* Main Info */}
          <div className="flex flex-col gap-1">
            <span className="text-xl font-bold text-foreground leading-tight">{art.usuario.nome}</span>
            <span className="text-sm font-medium text-muted-foreground mt-1">CPF: {art.usuario.cpf}</span>
            <span className="text-sm font-medium text-muted-foreground">{art.usuario.email}</span>
          </div>

          {/* Titulos */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Títulos</span>
            <div className="flex flex-wrap gap-2">
              {art.usuario.titulos.map((titulo, idx) => (
                <span key={idx} className="bg-background border border-border/60 text-foreground/80 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center shadow-sm">
                  {titulo}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-border/50" />

          {/* Registros */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Registros & Processo</span>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <InfoSlot label="CREA" value={art.usuario.registroCREA} />
              <InfoSlot label="Nacional" value={art.usuario.registroNacional} />
              <InfoSlot label="Processo" value={art.usuario.processoRegistro} className="col-span-2" />
              <InfoSlot label="Cadastro" value={art.usuario.dataCadastro} />
              <InfoSlot label="Registro" value={art.usuario.dataRegistro} />
            </div>
          </div>

          <div className="w-full h-px bg-border/50" />

          {/* Situação */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Situação Atual</span>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between p-2.5 bg-background rounded-lg border border-border/50">
                <span className="text-sm font-semibold text-foreground">Registro</span>
                <span className={cn(
                  "text-[11px] font-bold px-2 py-1 rounded-full flex items-center gap-1",
                  art.usuario.situacaoRegistro === "Ativo" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                )}>
                  {art.usuario.situacaoRegistro === "Ativo" ? <CheckCircle2 className="h-3 w-3" /> : <ShieldAlert className="h-3 w-3" />}
                  {art.usuario.situacaoRegistro}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InfoSlot label="Último Pgt" value={String(art.usuario.ultimoAnoPago)} />
                <InfoSlot label="C. Digital" value={art.usuario.possuiCarteiraDigital ? "Sim" : "Não"} />
                <InfoSlot label="Situação C." value={art.usuario.situacaoCarteira} />
                <InfoSlot label="Data C." value={art.usuario.dataSituacao} />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-border/50" />

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Atribuições</span>
            <div className="flex flex-col gap-3">
              <InfoSlot label="Atribuição Principal" value={art.usuario.atribuicao} />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-medium mb-1">Restrições</span>
                <span className="text-sm font-semibold text-destructive bg-destructive/10 p-2.5 rounded-xl border border-destructive/20">{art.usuario.restricoes}</span>
              </div>
              <InfoSlot label="Observação" value={art.usuario.observacao} className="italic mt-1" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area: Documents */}
      <main className="flex-1 flex flex-col min-w-0 bg-background overflow-hidden relative">
        
        {/* 3. Documentos e Anexos (Ocupando o resto todo) */}
        <section className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar relative">
          
          <div className="flex flex-col gap-3 max-w-5xl mx-auto w-full min-h-full p-6 md:p-8 lg:p-12 relative">
            <div className="flex flex-col gap-2 mb-8">
              
              <div className="flex flex-col gap-1.5 mb-2">
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "w-fit text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider",
                    art.status === "Ativa" ? "bg-emerald-500/10 text-emerald-600" :
                    art.status === "Baixada" ? "bg-slate-500/10 text-slate-600" : "bg-red-500/10 text-red-600"
                  )}>
                    {art.status}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">Registrada em {art.dataRegistro}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#003399] leading-tight mb-1">A.R.T. {art.numero}</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 flex-1 content-start pb-24">
              {attachmentTypes.map((type, idx) => (
                <div key={idx} className="bg-card border-2 border-dashed border-border/70 hover:border-[#003399] hover:bg-[#003399]/5 transition-all duration-300 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-5 relative group hover:shadow-lg cursor-pointer aspect-[4/3] overflow-hidden">
                  <div className="p-4 bg-muted/80 rounded-full group-hover:scale-110 group-hover:bg-[#003399]/10 shadow-sm transition-all duration-300">
                    <UploadCloud className="h-8 w-8 text-muted-foreground group-hover:text-[#003399] transition-colors" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-base font-bold text-foreground">{type}</span>
                    <span className="text-xs font-semibold text-muted-foreground mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity">Selecionar ou arrastar</span>
                  </div>
                  <button 
                    className="absolute inset-0 w-full h-full opacity-0" 
                    aria-label={`Anexar ${type}`}
                    onClick={() => {
                      alert(`Upload modal for ${type}`);
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-auto sticky bottom-6 z-10 flex justify-end w-full pointer-events-none">
              <button className="pointer-events-auto bg-[#003399] hover:bg-[#002266] text-white font-bold py-4 px-10 rounded-full shadow-[0_8px_30px_rgb(0,51,153,0.3)] hover:shadow-[0_8px_30px_rgb(0,51,153,0.5)] transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1 active:translate-y-0 text-lg">
                <Cpu className="h-6 w-6" />
                <span className="tracking-widest uppercase">Analisar com IA</span>
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

// Helper component for label-value pairs
const InfoSlot = ({ label, value, className }: { label: string, value: string, className?: string }) => (
  <div className={cn("flex flex-col", className)}>
    <span className="text-[10px] text-muted-foreground mb-0.5 font-bold uppercase tracking-wider">{label}</span>
    <span className="text-sm font-semibold text-foreground tracking-tight">{value}</span>
  </div>
);
