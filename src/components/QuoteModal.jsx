import { useState } from "react";
import { X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getQuoteMessage, sendWhatsApp } from "../utils/whatsapp";

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    vehicleType: "Car",
    insuranceType: "New Insurance",
    name: "",
    phone: "",
    regNumber: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    sendWhatsApp(getQuoteMessage(form));
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95%] max-w-lg"
          >
            <div className="bg-navy-700 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-poppins">
                      Get Insurance Quote
                    </h3>
                    <p className="text-xs text-slate-400">
                      We'll respond within minutes
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                      Vehicle Type
                    </label>
                    <select
                      name="vehicleType"
                      value={form.vehicleType}
                      onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Car">Car</option>
                      <option value="Bike">Bike</option>
                      <option value="Commercial Vehicle">
                        Commercial Vehicle
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                      Insurance Type
                    </label>
                    <select
                      name="insuranceType"
                      value={form.insuranceType}
                      onChange={handleChange}
                      className="w-full bg-navy-900 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="New Insurance">New Insurance</option>
                      <option value="Renewal">Renewal</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                    Vehicle Reg Number (Optional)
                  </label>
                  <input
                    type="text"
                    name="regNumber"
                    value={form.regNumber}
                    onChange={handleChange}
                    placeholder="e.g. MH-20-AB-1234"
                    className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-400/50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold py-3 rounded-lg text-sm hover:from-gold-400 hover:to-gold-500 transition-all duration-300 mt-2 font-poppins"
                >
                  Get Free Quote on WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
