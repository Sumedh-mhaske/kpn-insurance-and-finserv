import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { serviceCategories, services } from "../data/services";
import { FloatingShapes, GlowOrb, SectionDivider } from "./DecorativeShapes";
import { ArrowRight } from "lucide-react";
import { sendWhatsApp } from "../utils/whatsapp";

export default function Services() {
  const [activeTab, setActiveTab] = useState("insurance");
  const activeServices = services[activeTab];

  const handleServiceClick = (title) => {
    sendWhatsApp(
      `Hi KPN Insurance! I'm interested in ${title}. Please share more details.`,
    );
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-navy-950 relative overflow-hidden"
    >
      <GlowOrb className="w-[500px] h-[500px] bg-gold-400/[0.03] top-1/3 -right-48" />
      <FloatingShapes />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          label="Our Services"
          title="What We Offer"
          description="Comprehensive insurance, loan, and RTO services tailored to your needs — fast, reliable, and transparent."
        />

        {/* Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {serviceCategories.map((cat) => {
              const count = services[cat.id].length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-400 font-poppins ${
                    activeTab === cat.id
                      ? "text-navy-900"
                      : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {activeTab === cat.id && (
                    <motion.div
                      layoutId="activeServiceTab"
                      className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-xl shadow-lg shadow-gold-400/20"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {cat.label}
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                        activeTab === cat.id
                          ? "bg-navy-900/20 text-navy-900"
                          : "bg-white/10 text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {activeServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.06}>
                <div
                  onClick={() => handleServiceClick(service.title)}
                  className="group bg-navy-800/40 border border-white/[0.05] rounded-2xl p-7 hover:border-gold-400/20 hover:bg-navy-800/60 transition-all duration-400 h-full cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold-400/[0.08] flex items-center justify-center mb-5 group-hover:bg-gold-400/15 group-hover:scale-105 transition-all duration-400">
                    <service.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="text-white font-bold text-[15px] font-poppins mb-2.5 group-hover:text-gold-300 transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-[1.75] group-hover:text-slate-400 transition-colors duration-300">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-1.5 mt-5 text-gold-400/0 group-hover:text-gold-400 transition-all duration-400">
                    <span className="text-xs font-semibold font-poppins">
                      Learn More
                    </span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>

        <SectionDivider variant="line" className="mt-14" />
      </div>
    </section>
  );
}
