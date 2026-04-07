export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="pointer-events-none fixed left-4 top-4 z-[200] -translate-y-[120%] rounded-sm bg-gold px-4 py-2.5 text-sm font-medium text-ink opacity-0 shadow-lg transition-[opacity,transform] duration-200 ease-out focus:pointer-events-auto focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-foreground/25 focus:ring-offset-2 focus:ring-offset-background"
    >
      Aller au contenu
    </a>
  );
}
