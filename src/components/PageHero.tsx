import ScrollReveal from "@/components/ScrollReveal";
import heroPattern from "@/assets/hero-pattern.webp";

type Tint = "teal" | "navy" | "gold" | "sand" | "neutral" | "muted";

const TINT_STYLES: Record<Tint, string> = {
  // Soft tints starting from white -> very subtle palette color
  teal: "bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(178_60%_94%)_100%)]",
  navy: "bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(205_45%_92%)_100%)]",
  gold: "bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(38_55%_90%)_100%)]",
  sand: "bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(38_35%_88%)_100%)]",
  muted: "bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(40_20%_92%)_100%)]",
  neutral: "bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(210_15%_92%)_100%)]",
};

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Character on the left (mirrored by default). */
  character: string;
  /** Character on the right (normal orientation by default). Should differ from `character`. */
  characterRight?: string;
  /** Invert mirroring: left becomes normal, right becomes mirrored. */
  flipCharacters?: boolean;
  tint?: Tint;
}

const PageHero = ({ eyebrow, title, description, character, characterRight, flipCharacters = false, tint = "neutral" }: PageHeroProps) => {
  const rightChar = characterRight ?? character;
  const leftClass = flipCharacters ? "" : "scale-x-[-1]";
  const rightClass = flipCharacters ? "scale-x-[-1]" : "";
  return (
    <section className={`pt-16 ${TINT_STYLES[tint]} relative overflow-hidden`}>
      {/* Pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] bg-no-repeat bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${heroPattern})` }}
      />

      {/* Standard fixed height container */}
      <div className="max-w-6xl mx-auto px-6 relative h-[320px] md:h-[360px] flex items-center">
        {/* Left character */}
        <img
          src={character}
          alt=""
          aria-hidden="true"
          className={`hidden lg:block absolute left-0 bottom-0 h-[280px] xl:h-[320px] w-auto object-contain pointer-events-none select-none opacity-90 ${leftClass}`}
        />

        {/* Centered text */}
        <div className="relative z-10 mx-auto text-center max-w-2xl px-4">
          <ScrollReveal>
            {eyebrow && (
              <p className="text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-3">
                {eyebrow}
              </p>
            )}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-secondary uppercase tracking-wide mb-3">
              {title}
            </h1>
            <div className="w-12 h-1 bg-accent rounded-full mb-4 mx-auto" />
            {description && (
              <p className="text-foreground/70 text-base md:text-lg">
                {description}
              </p>
            )}
          </ScrollReveal>
        </div>

        {/* Right character */}
        <img
          src={rightChar}
          alt=""
          aria-hidden="true"
          className={`hidden lg:block absolute right-0 bottom-0 h-[280px] xl:h-[320px] w-auto object-contain pointer-events-none select-none opacity-90 ${rightClass}`}
        />

        {/* Mobile/tablet: single character on the right */}
        <img
          src={rightChar}
          alt=""
          aria-hidden="true"
          className="lg:hidden absolute right-0 bottom-0 h-44 md:h-56 w-auto object-contain pointer-events-none select-none opacity-60"
        />
      </div>
    </section>
  );
};

export default PageHero;
