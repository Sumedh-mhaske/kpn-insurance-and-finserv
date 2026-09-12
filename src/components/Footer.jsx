import { ShieldCheck, Phone, Mail, MapPin, ArrowUp, Heart } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Car Insurance",
  "Bike Insurance",
  "Health Insurance",
  "Life Insurance",
  "Vehicle Loan",
  "RC Transfer",
  "NOC Services",
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-navy-950">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-400/15">
                <ShieldCheck
                  className="w-5 h-5 text-navy-900"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <span className="text-gold-400 font-extrabold text-xl font-poppins">
                  KPN
                </span>
                <span className="text-[8px] text-slate-600 tracking-[0.2em] uppercase block -mt-0.5 font-semibold">
                  Insurance & Finserv
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-[1.8] mb-5">
              Complete Insurance & Financial Solutions. Your trusted partner in
              Chhatrapati Sambhajinagar.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.05] rounded-lg px-3 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-slate-500 text-[11px] font-medium">
                Udyam Registered
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm font-poppins mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-gold-400 transition-colors duration-300 hover:pl-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm font-poppins mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-slate-500 text-sm hover:text-gold-400 transition-colors duration-300 hover:pl-1 inline-block"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm font-poppins mb-6">
              Reach Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+917743940361"
                className="flex items-center gap-3 text-slate-500 text-sm hover:text-gold-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-gold-400/50 shrink-0" />
                +91 7743940361
              </a>
              <a
                href="mailto:prashantnavkar86@gmail.com"
                className="flex items-center gap-3 text-slate-500 text-sm hover:text-gold-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-gold-400/50 shrink-0" />
                <span className="break-all text-[13px]">
                  prashantnavkar86@gmail.com
                </span>
              </a>
              <div className="flex items-start gap-3 text-slate-500 text-sm">
                <MapPin className="w-4 h-4 text-gold-400/50 shrink-0 mt-0.5" />
                <span className="text-[13px] leading-relaxed">
                  Chhatrapati Sambhajinagar, Maharashtra - 431001
                </span>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.04]">
              <p className="text-slate-600 text-xs">
                Mon - Sat: 10:00 AM - 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} KPN Insurance & Finserv. Made with
            <Heart className="w-3 h-3 text-gold-400/40" fill="currentColor" />
            in Chhatrapati Sambhajinagar
          </p>
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-gold-400 hover:border-gold-400/20 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
