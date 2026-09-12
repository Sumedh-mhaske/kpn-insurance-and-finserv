import {
  Zap,
  MapPin,
  MessageCircle,
  BarChart3,
  ShieldCheck,
  Building2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { FloatingShapes, GlowOrb } from "./DecorativeShapes";

const features = [
  {
    icon: Zap,
    title: "Fast Processing",
    desc: "Quick turnaround on all insurance, loan, and RTO services.",
    tag: "24hr",
  },
  {
    icon: MapPin,
    title: "Doorstep Service",
    desc: "We come to you — paperwork from the comfort of your home.",
    tag: null,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    desc: "Reach us instantly for quotes, queries, and updates.",
    tag: "Instant",
  },
  {
    icon: BarChart3,
    title: "Best Premium Comparison",
    desc: "Compare premiums across all major insurers for the best deal.",
    tag: "Save ₹",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    desc: "Expert advice on the right insurance policy and loan product.",
    tag: null,
  },
  {
    icon: Building2,
    title: "All Major Insurers",
    desc: "HDFC Ergo, Bajaj, ICICI, and all leading companies.",
    tag: "50+",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 sm:py-32 bg-navy-800 relative overflow-hidden"
    >
      <GlowOrb className="w-[500px] h-[500px] bg-gold-400/[0.03] -top-32 left-1/3" />
      <FloatingShapes />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          label="Why Choose Us"
          title="Why KPN Insurance?"
          description="We go the extra mile to make insurance and documentation simple, fast, and transparent."
        />

        {/* Image + Features Layout */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Left column — Image */}
          <ScrollReveal direction="right" className="lg:row-span-2">
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px] lg:min-h-0 group">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
                alt="Vehicle insurance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-gold-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 font-poppins">
                  Our Promise
                </p>
                <p className="text-white font-bold text-xl font-poppins leading-snug">
                  Your Protection,
                  <br />
                  Our Priority
                </p>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  Every policy, every document, every time.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right 2x2 grid — Features */}
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.07}>
              <div className="group bg-navy-700/20 border border-white/[0.04] rounded-2xl p-6 hover:border-gold-400/15 hover:bg-navy-700/30 transition-all duration-400 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gold-400/[0.08] flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-400">
                    <feature.icon className="w-5 h-5 text-gold-400 group-hover:text-navy-900 transition-colors duration-400" />
                  </div>
                  {feature.tag && (
                    <span className="bg-gold-400/[0.08] text-gold-400 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-gold-400/12 font-poppins">
                      {feature.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-white font-bold text-[15px] font-poppins mb-2 group-hover:text-gold-300 transition-colors duration-300 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-[1.7] group-hover:text-slate-400 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
