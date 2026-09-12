import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { sendWhatsApp } from "../utils/whatsapp";

export default function WhatsAppButton() {
  const handleClick = () => {
    sendWhatsApp("Hi KPN Insurance! I need help with your services.");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 0.8, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 group"
    >
      <MessageCircle className="w-5 h-5 text-white" fill="white" />
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
      </span>
    </motion.button>
  );
}
