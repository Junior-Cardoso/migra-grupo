import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Bitrix24CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "login" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const BITRIX_FORM_DATA = "click/4/2p97e1";
const BITRIX_LOADER_SRC = "https://cdn.bitrix24.com.br/b36341485/crm/form/loader_4.js";

const Bitrix24CTAButton = ({
  children,
  className,
  variant = "login",
  size = "lg",
}: Bitrix24CTAButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenTriggerRef = useRef<HTMLButtonElement>(null);
  const scriptInjectedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || !hiddenTriggerRef.current || scriptInjectedRef.current) return;
    
    scriptInjectedRef.current = true;

    const script = document.createElement("script");
    script.setAttribute("data-b24-form", BITRIX_FORM_DATA);
    script.setAttribute("data-skip-moving", "true");
    script.innerHTML = `(function(w,d,u){
      var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
    })(window,document,'${BITRIX_LOADER_SRC}');`;

    // Insert script immediately BEFORE the hidden trigger (Bitrix requirement)
    containerRef.current.insertBefore(script, hiddenTriggerRef.current);
  }, []);

  const handleClick = () => {
    hiddenTriggerRef.current?.click();
  };

  return (
    <div ref={containerRef} className="inline-block">
      {/* Hidden trigger - Bitrix will bind to this element (right after the script) */}
      <button
        ref={hiddenTriggerRef}
        type="button"
        style={{ display: "none" }}
        aria-hidden="true"
      />
      {/* Visible CTA button */}
      <Button
        type="button"
        variant={variant}
        size={size}
        className={cn(className)}
        onClick={handleClick}
      >
        {children}
      </Button>
    </div>
  );
};

export default Bitrix24CTAButton;
