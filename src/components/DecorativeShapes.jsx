export function FloatingShapes({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full border border-gold-400/[0.04] animate-spin-slow" />
      <div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-gold-400/[0.03] animate-spin-slow"
        style={{ animationDirection: "reverse", animationDuration: "40s" }}
      />

      <div className="absolute top-[25%] right-[12%] w-3 h-3 bg-gold-400/15 rotate-45 animate-float-slow" />
      <div
        className="absolute top-[55%] right-[6%] w-2.5 h-2.5 bg-gold-400/10 rotate-45 animate-float-medium"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-[40%] left-[4%] w-2 h-2 bg-gold-400/10 rotate-45 animate-float-fast"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-[18%] left-[12%] w-1.5 h-1.5 rounded-full bg-gold-400/20 animate-float-medium"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-[65%] left-[18%] w-1.5 h-1.5 rounded-full bg-gold-400/15 animate-float-slow"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}

export function SectionDivider({ variant = "dots" }) {
  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center gap-2 py-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="rounded-full bg-gold-400/20"
            style={{
              width: i === 2 ? "5px" : "3px",
              height: i === 2 ? "5px" : "3px",
            }}
          />
        ))}
      </div>
    );
  }
  if (variant === "line") {
    return (
      <div className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent my-4" />
    );
  }
  return (
    <div className="flex items-center justify-center gap-4 py-3">
      <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400/25" />
      <div className="w-1.5 h-1.5 border border-gold-400/25 rotate-45" />
      <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-400/25" />
    </div>
  );
}

export function GlowOrb({ className = "" }) {
  return (
    <div
      className={`absolute rounded-full blur-[100px] animate-pulse-glow pointer-events-none ${className}`}
    />
  );
}
