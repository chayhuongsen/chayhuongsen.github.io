import { MessageCircle, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function FloatingContactButton() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
      <a aria-label="Gọi điện Hương Sen" href="tel:0981228448" className="grid h-12 w-12 place-items-center rounded-full bg-lotusGreen text-white shadow-gold transition hover:scale-105 sm:h-14 sm:w-14">
        <Phone size={21} />
      </a>
      <a aria-label="Zalo Hương Sen" href="/lien-he" className="grid h-12 w-12 place-items-center rounded-full bg-softGold text-xs font-bold text-deepGreen shadow-gold transition hover:scale-105 sm:h-14 sm:w-14 sm:text-sm">
        Zalo
      </a>
      <a aria-label="Liên hệ nhanh" href="/lien-he" className="grid h-12 w-12 place-items-center rounded-full bg-lightCream text-lotusGreen shadow-gold transition hover:scale-105 sm:h-14 sm:w-14">
        <MessageCircle size={21} />
      </a>
    </div>
  );
}
