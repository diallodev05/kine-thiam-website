import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45";

const variants = {
  primary:
    "bg-gold text-ink shadow-[0_0_0_1px_rgba(198,169,107,0.35)] hover:shadow-[0_0_32px_rgba(198,169,107,0.35)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-gold/50 bg-transparent text-foreground hover:border-gold hover:bg-gold-dim hover:shadow-[0_0_24px_rgba(198,169,107,0.12)]",
  ghost:
    "text-foreground/90 hover:text-gold underline-offset-4 hover:underline",
};

export function Button({
  children,
  variant = "primary",
  className,
  href,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
