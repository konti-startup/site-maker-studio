import { Facebook, MessageCircle, Instagram } from "lucide-react";

const SocialFloat = () => {
  return (
    <div className="social-float hidden md:flex">
      <a
        href="#"
        className="social-button bg-blue-600 hover:bg-blue-700"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="social-button bg-green-500 hover:bg-green-600"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="social-button bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialFloat;
