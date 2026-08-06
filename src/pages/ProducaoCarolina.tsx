import ProducaoPage from "@/components/ProducaoPage";
import carolinaAsset from "@/assets/team/carolina-leite.png.asset.json";

const ProducaoCarolina = () => (
  <ProducaoPage
    pageKey="carolina"
    eyebrow="MIGRA – UFPE"
    title="Profª Carolina Leite"
    description="Produção acadêmica e intelectual da Profª Carolina Leite, cofundadora do MIGRA."
    portraitImage={carolinaAsset.url}
    tint="navy"
  />
);

export default ProducaoCarolina;
