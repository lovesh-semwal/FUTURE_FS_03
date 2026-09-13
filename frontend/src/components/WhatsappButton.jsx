import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917906355028"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with BEAST FEAST on WhatsApp"
      className="fixed bottom-6! right-6! z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-xl transition hover:scale-110 hover:bg-green-700"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;