import {
  Globe, BookOpen, Scale, FileText, Headphones, Music2, MapPin,
  ArrowRight, Mail, GraduationCap, Compass, Radio, Map, Users, Info,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Globe, BookOpen, Scale, FileText, Headphones, Music2, MapPin, ArrowRight,
  Mail, GraduationCap, Compass, Radio, Map, Users, Info,
};

export const resolveIcon = (name: string | undefined | null): LucideIcon =>
  (name && ICONS[name]) || Info;
