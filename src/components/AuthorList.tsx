import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface AuthorListProps {
  authors: string[];
  /** How many authors to show before collapsing the rest. */
  max?: number;
  className?: string;
}

/**
 * Shows the authors of a publication. When there are more than `max`,
 * the remaining ones collapse into a "…+N" chip that reveals the full
 * list on hover (desktop) or tap (touch devices).
 */
const AuthorList = ({ authors, max = 2, className }: AuthorListProps) => {
  const list = (authors ?? []).filter(Boolean);
  if (list.length === 0) return null;

  const visible = list.slice(0, max);
  const hidden = list.slice(max);
  const full = list.join(", ");

  const label = (
    <span className="font-medium text-foreground/90">
      …+{hidden.length}
    </span>
  );

  const content = (
    <div className="max-w-[16rem]">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
        Autores
      </p>
      <ul className="space-y-0.5">
        {list.map((a) => (
          <li key={a} className="text-xs leading-snug">{a}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <span className={cn("inline text-muted-foreground", className)} title={full}>
      {visible.join(", ")}
      {hidden.length > 0 && (
        <>
          {", "}
          {/* Desktop: hover tooltip */}
          <span className="hidden sm:inline">
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="underline decoration-dotted underline-offset-2 hover:text-primary transition-colors"
                  aria-label={`Ver todos os ${list.length} autores`}
                  onClick={(e) => e.preventDefault()}
                >
                  {label}
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" align="start">{content}</TooltipContent>
            </Tooltip>
          </span>
          {/* Mobile: tap popover */}
          <span className="sm:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="underline decoration-dotted underline-offset-2"
                  aria-label={`Ver todos os ${list.length} autores`}
                >
                  {label}
                </button>
              </PopoverTrigger>
              <PopoverContent side="top" align="start" className="w-auto p-3">
                {content}
              </PopoverContent>
            </Popover>
          </span>
        </>
      )}
    </span>
  );
};

export default AuthorList;
