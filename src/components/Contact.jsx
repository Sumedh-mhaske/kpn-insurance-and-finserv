import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { getContactMessage, sendWhatsApp } from "../utils/whatsapp";
import { FloatingShapes, GlowOrb } from "./DecorativeShapes";

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7743940361",
    href: "tel:+917743940361",
  },
  {
    icon: Mail,
    label: "Email",
    value: "prashantnavkar86@gmail.com",
    href: "mailto:prashantnavkar86@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chhatrapati Sambhajinagar, MH - 431001",
    href: null,
  },
  { icon: Clock, label: "Hours", value: "Mon - Sat: 10 AM - 7 PM", href: null },
];

const serviceOptions = [
  "Car Insurance",
  "Bike Insurance",
  "Health Insurance",
  "Life Insurance",
  "Commercial Vehicle Insurance",
  "Vehicle Loan",
  "Personal Loan",
  "RC Transfer",
  "NOC Services",
  "Hypothecation Removal",
  "Duplicate RC",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Car Insurance",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    sendWhatsApp(getContactMessage(form));
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-navy-800 relative overflow-hidden"
    >
      <GlowOrb className="w-[500px] h-[500px] bg-gold-400/[0.03] -bottom-48 -right-48" />
      <FloatingShapes />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          label="Contact Us"
          title="Get In Touch"
          description="Have a question or need assistance? Reach out and we'll respond promptly."
        />

        {/* Contact info cards — full width, above form */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {contactCards.map((item) => (
              <div
                key={item.label}
                className="bg-navy-700/25 border border-white/[0.05] rounded-xl p-5 hover:border-gold-400/15 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-400/[0.08] flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 text-gold-400" />
                </div>
                <p className="text-slate-500 text-[10px] font-semibold tracking-[0.12em] uppercase mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-white text-[13px] font-medium hover:text-gold-400 transition-colors leading-snug"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white text-[13px] font-medium leading-snug">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Form — 3 columns */}
          <ScrollReveal className="lg:col-span-3">
            <div className="bg-navy-700/25 border border-white/[0.06] rounded-2xl p-7 sm:p-8">
              <div className="mb-7">
                <h3 className="text-white font-bold text-lg font-poppins">
                  Send Us a Message
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  We'll respond on WhatsApp
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-2 font-semibold tracking-wide uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-navy-900/50 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400/40 focus:bg-navy-900/70 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-2 font-semibold tracking-wide uppercase">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your phone number"
                      className="w-full bg-navy-900/50 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400/40 focus:bg-navy-900/70 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-2 font-semibold tracking-wide uppercase">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full bg-navy-900/50 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400/40 focus:bg-navy-900/70 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-2 font-semibold tracking-wide uppercase">
                      Service
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-navy-900/50 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400/40 focus:bg-navy-900/70 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-2 font-semibold tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what you need..."
                    className="w-full bg-navy-900/50 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400/40 focus:bg-navy-900/70 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-900 px-8 py-3.5 rounded-xl text-sm font-bold hover:shadow-xl hover:shadow-gold-400/25 transition-all duration-500 font-poppins overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send on WhatsApp
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Right — Map + CTA */}
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal delay={0.1}>
              <div className="bg-navy-700/25 border border-white/[0.05] rounded-2xl overflow-hidden h-[240px]">
                <iframe
                  src="https://www.google.com/maps?q=Chhatrapati+Sambhajinagar+Maharashtra+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(0.8) brightness(0.7) contrast(1.1)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KPN Insurance Location"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-gold-400/[0.08] to-gold-400/[0.02] border border-gold-400/12 rounded-2xl p-6">
                <p className="text-gold-400 text-sm font-bold font-poppins mb-1.5">
                  Need Quick Help?
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Chat with us directly on WhatsApp for instant support and
                  quotes.
                </p>
                <a
                  href="https://wa.me/917743940361?text=Hi%20KPN%20Insurance!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#20BD5A] transition-colors font-poppins shadow-lg shadow-[#25D366]/20"
                >
                  Open WhatsApp
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
