import { motion } from "framer-motion";
import { Phone, X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function OrderModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-deepGreen/55 px-4 py-6 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="paper-panel relative max-h-[calc(100vh-3rem)] w-full max-w-md overflow-y-auto rounded-[24px] p-6 text-center shadow-lotus sm:p-7"
      >
        <button
          aria-label="Đóng"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-borderGold/50 p-2 text-textDarkGreen hover:bg-softGold/20"
        >
          <X size={18} />
        </button>
        <p className="font-serif text-2xl font-bold text-lotusGreen">Liên hệ Hương Sen</p>
        <p className="mt-3 text-sm leading-6 text-textDarkGreen/80">
          Đặt hàng nhanh qua hotline hoặc ghé gian hàng Hương Sen tại Summer Fest 2026.
        </p>
        <a
          href="tel:0981228448"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-lotusGreen px-6 py-3 font-semibold text-white shadow-gold transition hover:scale-105"
        >
          <Phone size={18} /> 0981 228 448
        </a>
      </motion.div>
    </div>
  );
}
