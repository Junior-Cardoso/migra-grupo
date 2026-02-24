import { useEffect, useRef } from "react";

const Bitrix24Script = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptInjectedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || scriptInjectedRef.current) return;
    
    // Only inject once
    scriptInjectedRef.current = true;

    const script = document.createElement("script");
    script.setAttribute("data-b24-form", "click/4/2p97e1");
    script.setAttribute("data-skip-moving", "true");
    script.innerHTML = `(function(w,d,u){
      var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
    })(window,document,'https://cdn.bitrix24.com.br/b36341485/crm/form/loader_4.js');`;
    
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} style={{ display: "none" }} />;
};

export default Bitrix24Script;
