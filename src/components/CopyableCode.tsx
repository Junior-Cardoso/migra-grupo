import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";

interface CopyableCodeProps {
  html: string;
  css?: string;
  title?: string;
}

export const CopyableCode = ({ html, css, title = "Código" }: CopyableCodeProps) => {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const copyToClipboard = async (text: string, type: 'html' | 'css') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'html') {
        setCopiedHtml(true);
        setTimeout(() => setCopiedHtml(false), 2000);
      } else {
        setCopiedCss(true);
        setTimeout(() => setCopiedCss(false), 2000);
      }
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* HTML */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">HTML</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(html, 'html')}
              className="h-7 px-2"
            >
              {copiedHtml ? (
                <>
                  <Check className="w-3 h-3 mr-1" />
                  <span className="text-xs">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 mr-1" />
                  <span className="text-xs">Copiar</span>
                </>
              )}
            </Button>
          </div>
          <pre className="text-xs overflow-x-auto bg-muted p-4 rounded-lg">
            {html}
          </pre>
        </div>

        {/* CSS (opcional) */}
        {css && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground">CSS</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(css, 'css')}
                className="h-7 px-2"
              >
                {copiedCss ? (
                  <>
                    <Check className="w-3 h-3 mr-1" />
                    <span className="text-xs">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 mr-1" />
                    <span className="text-xs">Copiar</span>
                  </>
                )}
              </Button>
            </div>
            <pre className="text-xs overflow-x-auto bg-muted p-4 rounded-lg">
              {css}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};