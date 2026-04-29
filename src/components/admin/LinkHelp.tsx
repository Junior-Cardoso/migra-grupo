import { HelpCircle } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

/**
 * Pequeno botão de ajuda explicando os tipos de link aceitos.
 * Usado ao lado dos campos de link nos formulários do admin.
 */
export const LinkHelp = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-5 w-5 p-0 text-muted-foreground hover:text-primary"
        aria-label="Como preencher o link"
      >
        <HelpCircle className="h-3.5 w-3.5" />
      </Button>
    </PopoverTrigger>
    <PopoverContent side="top" align="end" className="w-80 text-xs space-y-2.5">
      <p className="font-semibold text-sm text-foreground">Como preencher o link</p>

      <div className="space-y-2">
        <div>
          <p className="font-medium text-foreground">
            <code className="bg-muted px-1 py-0.5 rounded text-[10px]">/sobre</code> — outra página do site
          </p>
          <p className="text-muted-foreground text-[11px] leading-relaxed">
            Use a barra <code className="bg-muted px-1 rounded">/</code> para ir a outra página.
            Exemplos: <code className="bg-muted px-1 rounded">/sobre</code>,{" "}
            <code className="bg-muted px-1 rounded">/blog</code>,{" "}
            <code className="bg-muted px-1 rounded">/grupos-de-estudo</code>.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">
            <code className="bg-muted px-1 py-0.5 rounded text-[10px]">#contato</code> — seção da mesma página
          </p>
          <p className="text-muted-foreground text-[11px] leading-relaxed">
            Use o <code className="bg-muted px-1 rounded">#</code> para rolar até uma seção da página atual.
            Exemplo: <code className="bg-muted px-1 rounded">#contato</code> leva até a área de contato no fim da página.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">
            <code className="bg-muted px-1 py-0.5 rounded text-[10px]">https://...</code> — site externo
          </p>
          <p className="text-muted-foreground text-[11px] leading-relaxed">
            Cole o endereço completo (começando com <code className="bg-muted px-1 rounded">https://</code>)
            para abrir um site fora do MIGRA.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">
            <code className="bg-muted px-1 py-0.5 rounded text-[10px]">mailto:</code> — abrir e-mail
          </p>
          <p className="text-muted-foreground text-[11px] leading-relaxed">
            Exemplo: <code className="bg-muted px-1 rounded">mailto:migra@ufpe.br</code>.
          </p>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);
