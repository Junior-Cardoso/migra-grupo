import ProducaoPage from "@/components/ProducaoPage";
import carolinaAsset from "@/assets/team/carolina-leite.png.asset.json";

const ProducaoCarolina = () => (
  <ProducaoPage
    pageKey="carolina"
    eyebrow="MIGRA – UFPE"
    title="Profª Carolina Gonçalves"
    description="Produção acadêmica e intelectual da Profª Ana Carolina Gonçalves Leite."
    characterLeft={carolinaAsset.url}
    characterRight={carolinaAsset.url}
    tint="navy"
  />
);

export default ProducaoCarolina;
