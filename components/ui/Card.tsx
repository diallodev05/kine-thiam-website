import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-sm border border-border bg-card p-6 md:p-8",
        "shadow-[0_24px_80px_-48px_rgba(0,0,0,0.14)] backdrop-blur-sm dark:shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)]",
        hover &&
          "transition-all duration-500 hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_32px_100px_-40px_rgba(198,169,107,0.18)] dark:hover:shadow-[0_32px_100px_-40px_rgba(198,169,107,0.12)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
