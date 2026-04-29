import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
  maxLen?: number;
  placeholder?: string;
  hint?: string;
}

export const EditField = ({
  label, value, onChange, multiline, rows = 3, maxLen, placeholder, hint,
}: FieldProps) => (
  <div className="space-y-1.5">
    <div className="flex items-center justify-between">
      <Label className="text-xs font-medium text-foreground">{label}</Label>
      {maxLen && (
        <span className={`text-[10px] ${value.length > maxLen ? "text-destructive" : "text-muted-foreground"}`}>
          {value.length}/{maxLen}
        </span>
      )}
    </div>
    {multiline ? (
      <Textarea
        value={value}
        onChange={(e) => onChange(maxLen ? e.target.value.slice(0, maxLen) : e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="text-sm"
      />
    ) : (
      <Input
        value={value}
        onChange={(e) => onChange(maxLen ? e.target.value.slice(0, maxLen) : e.target.value)}
        placeholder={placeholder}
        className="text-sm"
      />
    )}
    {hint && <p className="text-[10px] text-muted-foreground">{hint}</p>}
  </div>
);
