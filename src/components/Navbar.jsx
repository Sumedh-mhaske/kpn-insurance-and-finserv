import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-2xl border-b border-white/4 shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-400/25 group-hover:shadow-gold-400/40 transition-shadow duration-500">
              <ShieldCheck
                className="w-5 h-5 text-navy-900"
                strokeWidth={2.5}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gold-400 font-extrabold text-xl leading-none font-poppins tracking-tight">
                KPN
              </span>
              <span className="text-[8px] text-slate-500 tracking-[0.2em] uppercase leading-none mt-1 font-medium">
                Insurance & Finserv
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 xl:px-5 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 font-poppins ${
                  activeSection === link.href.replace("#", "")
                    ? "text-gold-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gold-400/[0.08] rounded-lg border border-gold-400/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="relative group bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-900 px-6 py-2.5 rounded-xl text-[13px] font-bold hover:shadow-xl hover:shadow-gold-400/25 transition-all duration-500 font-poppins overflow-hidden"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-xl hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-950/98 backdrop-blur-2xl border-t border-white/[0.04] overflow-hidden"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all font-poppins ${
                    activeSection === link.href.replace("#", "")
                      ? "text-gold-400 bg-gold-400/[0.08]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuote();
                }}
                className="w-full mt-4 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 px-6 py-3.5 rounded-xl text-sm font-bold font-poppins"
              >
                Get Insurance Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
