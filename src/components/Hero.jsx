import {
  MessageCircle,
  ArrowRight,
  Shield,
  Car,
  FileCheck,
  HandCoins,
} from "lucide-react";
import { motion } from "framer-motion";
import { sendWhatsApp } from "../utils/whatsapp";
import ScrollReveal from "./ScrollReveal";
import { FloatingShapes, GlowOrb } from "./DecorativeShapes";

const quickServices = [
  { icon: Shield, label: "Insurance", count: "50+ Plans" },
  { icon: Car, label: "RTO Works", count: "All Services" },
  { icon: FileCheck, label: "RC Transfer", count: "Fast Process" },
  { icon: HandCoins, label: "Loan Help", count: "Lowest Rate" },
];

export default function Hero({ onOpenQuote }) {
  const handleWhatsApp = () => {
    sendWhatsApp("Hi KPN Insurance! I'm interested in your services.");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-950"
    >
      <div className="absolute inset-0 grid-pattern" />
      <GlowOrb className="w-[600px] h-[600px] bg-gold-400/[0.04] -top-48 -right-48" />
      <GlowOrb className="w-[400px] h-[400px] bg-gold-400/[0.03] bottom-0 -left-32" />
      <FloatingShapes />

      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[18rem] sm:text-[26rem] font-black text-white/[0.012] font-poppins leading-none select-none pointer-events-none">
        KPN
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 sm:pt-32 pb-24 sm:pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ===== LEFT CONTENT ===== */}
          <div className="max-w-xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2.5 bg-gold-400/[0.08] border border-gold-400/15 rounded-full px-5 py-2 mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
                </span>
                <span className="text-gold-400 text-[11px] font-semibold tracking-[0.15em] uppercase font-poppins">
                  Trusted Insurance Partner
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black text-white leading-[1.08] font-poppins tracking-tight">
                One Stop Solution For{" "}
                <span className="shimmer-text">Insurance, Loan</span>
                <br className="hidden sm:block" /> & Vehicle{" "}
                <span className="relative inline-block">
                  Documentation
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M1 5.5C47 2 153 2 199 5.5"
                      stroke="url(#gold-grad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="200"
                      style={{ animation: "dash 2s ease forwards" }}
                    />
                    <defs>
                      <linearGradient
                        id="gold-grad"
                        x1="0"
                        y1="0"
                        x2="200"
                        y2="0"
                      >
                        <stop stopColor="#D4A843" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#D4A843" />
                        <stop offset="1" stopColor="#D4A843" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </ScrollReveal>

            {/* FIX: More spacing after heading */}
            <ScrollReveal delay={0.2}>
              <p className="text-slate-400 text-[15px] sm:text-base mt-9 leading-[1.85]">
                Car Insurance, Bike Insurance, Health Insurance, Loan Services,
                RC Transfer, NOC, Hypothecation & All RTO Works{" "}
                <span className="text-gold-400 font-medium">
                  Under One Roof.
                </span>
              </p>
            </ScrollReveal>

            {/* FIX: Better button padding + centering */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button
                  onClick={onOpenQuote}
                  className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-900 px-8 py-[14px] rounded-2xl text-sm font-bold hover:shadow-2xl hover:shadow-gold-400/25 transition-all duration-500 font-poppins overflow-hidden"
                >
                  <span className="relative z-10">Get Insurance Quote</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="group inline-flex items-center justify-center gap-2.5 border border-white/15 text-white px-8 py-[14px] rounded-2xl text-sm font-semibold hover:bg-white/[0.04] hover:border-white/25 transition-all duration-500 font-poppins"
                >
                  <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors shrink-0">
                    <MessageCircle className="w-[15px] h-[15px] text-[#25D366]" />
                  </div>
                  <span>Contact on WhatsApp</span>
                </button>
              </div>
            </ScrollReveal>

            {/* FIX: More margin after buttons */}
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-7 sm:gap-9 mt-14 pt-8 border-t border-white/[0.05]">
                {["Trusted", "Fast", "Reliable"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span className="text-slate-500 text-sm font-medium font-poppins">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ===== RIGHT VISUAL CARD ===== */}
          <div className="hidden lg:flex justify-center">
            <ScrollReveal delay={0.2} direction="left">
              <div className="relative w-[370px]">
                <div className="absolute -inset-6 bg-gradient-to-br from-gold-400/[0.07] via-transparent to-gold-400/[0.03] rounded-[2rem] blur-2xl" />

                <div className="relative bg-gradient-to-br from-navy-700/50 to-navy-800/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

                  <div className="p-8">
                    <div className="text-center mb-7">
                      <div className="inline-block relative mb-4">
                        <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 flex items-center justify-center shadow-xl shadow-gold-400/20 rotate-3 hover:rotate-0 transition-transform duration-500">
                          <span className="text-navy-900 font-black text-4xl font-poppins -rotate-3 hover:rotate-0 transition-transform duration-500">
                            K
                          </span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-navy-800" />
                      </div>
                      <h3 className="text-white font-bold text-xl font-poppins">
                        KPN Insurance
                      </h3>
                      <p className="text-gold-400 text-[10px] tracking-[0.25em] uppercase mt-1 font-semibold">
                        & Finserv
                      </p>
                      <p className="text-slate-500 text-xs mt-2">
                        Complete Insurance & Financial Solutions
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      {quickServices.map((item) => (
                        <div
                          key={item.label}
                          className="group flex items-center gap-3.5 bg-white/[0.03] hover:bg-gold-400/[0.06] border border-white/[0.04] hover:border-gold-400/12 rounded-xl px-4 py-3 transition-all duration-300"
                        >
                          <div className="w-9 h-9 rounded-lg bg-gold-400/10 group-hover:bg-gold-400/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                            <item.icon className="w-[16px] h-[16px] text-gold-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-[13px] font-medium leading-tight">
                              {item.label}
                            </p>
                            <p className="text-slate-500 text-[11px] leading-tight mt-0.5">
                              {item.count}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-green-400/80 text-xs font-medium">
                        Available Now
                      </span>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-3 -left-3 bg-gradient-to-br from-gold-400 to-gold-600 text-navy-900 px-3.5 py-1.5 rounded-xl shadow-lg shadow-gold-400/20 z-20"
                >
                  <p className="text-[10px] font-extrabold font-poppins tracking-wide">
                    ⭐ TRUSTED
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-3 -right-3 bg-navy-700/90 backdrop-blur-sm border border-white/10 text-white px-3.5 py-1.5 rounded-xl shadow-lg z-20"
                >
                  <p className="text-[10px] font-extrabold font-poppins tracking-wide">
                    🚀 FAST PROCESS
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-navy-800 to-transparent" />
    </section>
  );
}
