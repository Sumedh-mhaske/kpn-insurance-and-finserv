import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({ label, title, description }) {
  return (
    <div className="w-full text-center mb-14 sm:mb-16 lg:mb-20">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2.5 bg-gold-400/[0.08] border border-gold-400/15 rounded-full px-5 py-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <span className="text-gold-400 text-[11px] font-semibold tracking-[0.2em] uppercase font-poppins">
            {label}
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-5xl font-extrabold text-white font-poppins leading-[1.15] mx-auto max-w-4xl px-4">
          {title}
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="flex items-center justify-center gap-3 mt-6 mb-6">
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-gold-400/50" />
          <div className="w-2 h-2 rounded-full bg-gold-400/40" />
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-gold-400/50" />
        </div>
      </ScrollReveal>

      {description && (
        <ScrollReveal delay={0.2}>
          <p className="text-slate-400 text-sm sm:text-base leading-[1.8] max-w-2xl mx-auto px-4">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
