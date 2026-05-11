import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Leaf, ShieldCheck, Wheat } from "lucide-react";
import { products } from "../data/products";
import LotusDecoration from "./LotusDecoration";

const badges = [
  ["100% Thuần chay", Leaf],
  ["Dinh dưỡng lành mạnh", Wheat],
  ["Không chất bảo quản", ShieldCheck],
  ["Từ tâm tử tế", HeartHandshake],
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper px-4 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
      <LotusDecoration className="left-4 top-24 h-36 w-36 text-lotusGreen/25" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm font-bold uppercase tracking-[0.34em] text-lotusGold">NHÀ HÀNG CHAY HƯƠNG SEN</p>
          <h1 className="mt-5 font-script text-5xl font-bold leading-tight text-lotusGreen sm:text-6xl lg:text-7xl">
            Ăn chay để
            <span className="block">trưởng dưỡng lòng từ bi</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium text-textDarkGreen/78">
            Thực phẩm chay dinh dưỡng - An lành mỗi ngày
          </p>
          <div className="paper-panel ornate-frame mt-7 max-w-xl rounded-[24px] p-6 shadow-lotus">
            <p className="font-serif text-xl font-bold text-lotusGreen">ĐỒNG HÀNH CÙNG LỄ HỘI ẨM THỰC CHAY</p>
            <p className="mt-2 text-sm leading-6 text-textDarkGreen/78">Tinh hoa ẩm thực chay Việt - Lành mạnh & Sáng tạo</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#san-pham" className="inline-flex items-center gap-2 rounded-full bg-lotusGreen px-6 py-3 font-semibold text-white shadow-gold transition hover:scale-105">
              Xem sản phẩm <ArrowRight size={18} />
            </a>
            <a href="#le-hoi" className="rounded-full border border-borderGold bg-lightCream px-6 py-3 font-semibold text-lotusGreen transition hover:scale-105 hover:bg-softGold/20">
              Ghé gian hàng
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {badges.map(([label, Icon], index) => (
              <motion.div
                key={label as string}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-borderGold/45 bg-lightCream/80 p-3 text-center shadow-sm"
              >
                <Icon className="mx-auto text-lotusGold" size={22} />
                <p className="mt-2 text-xs font-bold text-textDarkGreen">{label as string}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative min-h-[380px] sm:min-h-[560px]">
          <LotusDecoration className="right-10 top-2 h-44 w-44 text-lotusGold/40" />
          <div className="absolute inset-0 rounded-full bg-lotusGreen/10 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-4 pt-8 sm:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.slug}
                animate={{ y: [0, index % 2 ? -12 : 12, 0] }}
                transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                className={`overflow-hidden rounded-[24px] border border-borderGold/60 bg-lightCream p-2 shadow-lotus ${index === 0 || index === 4 ? "sm:translate-y-12" : ""}`}
              >
                <img src={product.image} alt={product.name} className="aspect-[4/3] w-full rounded-[18px] object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
