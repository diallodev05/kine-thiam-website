import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  contained?: boolean;
};

export function Section({
  id,
  children,
  className,
  contained = true,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div
        className={cn(
          contained && "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10",
        )}
      >
        {children}
      </div>
    </section>
  );
}
