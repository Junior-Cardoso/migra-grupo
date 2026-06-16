import ProducaoPage from "@/components/ProducaoPage";
import characterLeft from "@/assets/characters/char-2.webp";
import characterRight from "@/assets/characters/char-6.webp";

const Producao = () => (
  <ProducaoPage
    pageKey="migra"
    eyebrow="MIGRA – UFPE"
    title="Produção"
    description="Repositório de publicações do grupo de pesquisa MIGRA – UFPE."
    characterLeft={characterLeft}
    characterRight={characterRight}
    tint="muted"
  />
);

export default Producao;
