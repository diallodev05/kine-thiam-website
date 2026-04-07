import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="w-full space-y-2">
      {label ? (
        <label
          htmlFor={inputId}
          className="block text-xs font-medium uppercase tracking-[0.2em] text-foreground/55"
        >
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={cn(
          "w-full rounded-sm border border-border bg-card px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/35 transition-colors",
          "focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30",
          error && "border-red-400/50",
          className,
        )}
        {...props}
      />
      {error ? (
        <p className="text-xs text-red-300/90" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
