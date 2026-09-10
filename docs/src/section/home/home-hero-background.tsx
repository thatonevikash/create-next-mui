export function HeroBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 [--grid-color:var(--site-grid)]"
      style={{
        backgroundImage:
          "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
}
