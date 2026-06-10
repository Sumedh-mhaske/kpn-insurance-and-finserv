export const WHATSAPP_NUMBER = "917743940361";

export const sendWhatsApp = (message) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const getQuoteMessage = (data) => {
  return (
    `🛡️ *Insurance Quote Request - KPN Insurance*\n\n` +
    `📋 *Vehicle Type:* ${data.vehicleType}\n` +
    `📋 *Insurance Type:* ${data.insuranceType}\n` +
    `👤 *Name:* ${data.name}\n` +
    `📱 *Phone:* ${data.phone}\n` +
    `${data.regNumber ? `🔢 *Reg Number:* ${data.regNumber}\n` : ""}` +
    `\n---\nSent from KPN Insurance Website`
  );
};

export const getContactMessage = (data) => {
  return (
    `📩 *New Inquiry - KPN Insurance*\n\n` +
    `👤 *Name:* ${data.name}\n` +
    `📱 *Phone:* ${data.phone}\n` +
    `${data.email ? `📧 *Email:* ${data.email}\n` : ""}` +
    `📋 *Service:* ${data.service}\n` +
    `💬 *Message:* ${data.message}\n` +
    `\n---\nSent from KPN Insurance Website`
  );
};
