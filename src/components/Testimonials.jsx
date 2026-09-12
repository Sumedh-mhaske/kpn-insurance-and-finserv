import { Star, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { sendWhatsApp } from "../utils/whatsapp";
import { GlowOrb } from "./DecorativeShapes";

export default function Testimonials() {
  const handleReview = () => {
    sendWhatsApp(
      "Hi! I'd like to share my experience with KPN Insurance & Finserv.",
    );
  };

  return (
    <section className="py-24 sm:py-32 bg-navy-950 relative overflow-hidden">
      <GlowOrb className="w-[400px] h-[400px] bg-gold-400/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          label="Testimonials"
          title="What Our Customers Say"
          description="We're just getting started — your feedback matters to us."
        />

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[...Array(3)].map((_, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-navy-800/20 border border-dashed border-white/[0.06] rounded-2xl p-7 text-center flex flex-col items-center justify-center min-h-[200px]">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-white/[0.06]"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic">
                  "Your review could be here!"
                </p>
                <p className="text-slate-700 text-xs mt-1.5">
                  Share your experience
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-10 text-center">
          <button
            onClick={handleReview}
            className="inline-flex items-center gap-2.5 bg-gold-400/[0.08] border border-gold-400/15 text-gold-400 px-7 py-3.5 rounded-2xl text-sm font-semibold hover:bg-gold-400/[0.15] hover:border-gold-400/25 transition-all duration-400 font-poppins"
          >
            <MessageCircle className="w-4 h-4" />
            Be the First to Review
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
