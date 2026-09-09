export function HeroBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 [--grid-color:rgba(100,116,139,0.12)] dark:[--grid-color:rgba(148,163,184,0.08)]"
      style={{
        backgroundImage:
          "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
}
