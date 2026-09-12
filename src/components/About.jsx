import { ShieldCheck, Users, Clock, Award, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { FloatingShapes, GlowOrb, SectionDivider } from "./DecorativeShapes";

const stats = [
  { icon: ShieldCheck, value: "All Major", label: "Insurance Partners" },
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Clock, value: "24hr", label: "Quick Turnaround" },
  { icon: Award, value: "Udyam", label: "Registered" },
];

const highlights = [
  "Vehicle Insurance & Renewals",
  "Health & Life Insurance Plans",
  "RC Transfer & Documentation",
  "Loan Assistance & Refinance",
  "NOC & Hypothecation Services",
  "Complete RTO Solutions",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-navy-800 relative overflow-hidden"
    >
      <GlowOrb className="w-[400px] h-[400px] bg-gold-400/[0.03] top-0 -left-48" />
      <FloatingShapes />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          label="About Us"
          title="About KPN Insurance & Finserv"
          description="Your trusted partner for all insurance, loan, and vehicle documentation needs in Chhatrapati Sambhajinagar."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ===== LEFT — IMAGE + CARD ===== */}
          <ScrollReveal direction="right">
            <div className="space-y-5">
              {/* Professional image */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg">
                      <ShieldCheck
                        className="w-6 h-6 text-navy-900"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm font-poppins">
                        Protecting What Matters
                      </p>
                      <p className="text-gold-300 text-xs">Since Day One</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder card */}
              <div className="bg-navy-700/30 border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-400/15 flex items-center justify-center shrink-0">
                    <span className="text-gold-400 font-bold text-lg font-poppins">
                      PN
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-semibold tracking-[0.15em] uppercase">
                      Founded & Managed By
                    </p>
                    <p className="text-white font-bold text-lg font-poppins mt-0.5">
                      Prashant Navkar
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Proprietor, KPN Insurance & Finserv
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ===== RIGHT — TEXT + HIGHLIGHTS ===== */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="space-y-5">
                <p className="text-slate-300 leading-[1.9] text-[15px]">
                  <span className="text-gold-400 font-semibold">
                    KPN Insurance & Finserv
                  </span>{" "}
                  provides trusted insurance, loan, and RTO-related services
                  with fast processing and dedicated customer support. We are
                  committed to making insurance and documentation hassle-free
                  for everyone.
                </p>
                <p className="text-slate-400 leading-[1.9] text-[15px]">
                  We help customers with vehicle insurance, renewals, claims, RC
                  transfer, hypothecation removal, loan assistance, and complete
                  documentation services — all under one roof.
                </p>
                <p className="text-slate-400 leading-[1.9] text-[15px]">
                  Whether you need a quick car insurance renewal or complete RTO
                  paperwork, our team ensures a smooth, transparent, and fast
                  experience every time.
                </p>
              </div>
            </ScrollReveal>

            {/* Highlights list */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-gold-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Tags */}
            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap gap-2.5 mt-7">
                {[
                  "Udyam Registered",
                  "Chhatrapati Sambhajinagar",
                  "WhatsApp Support",
                  "Doorstep Service",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gold-400/[0.08] text-gold-400 text-[11px] font-semibold px-3.5 py-1.5 rounded-full border border-gold-400/12 font-poppins"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <SectionDivider variant="diamond" className="my-8" />

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.3 + i * 0.06}>
                  <div className="text-center bg-navy-700/20 border border-white/[0.04] rounded-xl p-4 hover:border-gold-400/15 transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-gold-400/10 flex items-center justify-center mx-auto mb-2.5">
                      <stat.icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <p className="text-white font-bold text-lg font-poppins leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-slate-500 text-[10px] mt-1 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
