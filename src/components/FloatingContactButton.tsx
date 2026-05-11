import { MessageCircle, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function FloatingContactButton() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a aria-label="Gọi điện Hương Sen" href="tel:0981228448" className="grid h-14 w-14 place-items-center rounded-full bg-lotusGreen text-white shadow-gold transition hover:scale-105">
        <Phone size={22} />
      </a>
      <a aria-label="Zalo Hương Sen" href="/lien-he" className="grid h-14 w-14 place-items-center rounded-full bg-softGold text-sm font-bold text-deepGreen shadow-gold transition hover:scale-105">
        Zalo
      </a>
      <a aria-label="Liên hệ nhanh" href="/lien-he" className="grid h-14 w-14 place-items-center rounded-full bg-lightCream text-lotusGreen shadow-gold transition hover:scale-105">
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
