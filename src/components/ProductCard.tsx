import { motion } from "framer-motion";
import { Leaf, PackageCheck, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../data/products";

type Props = {
  product: Product;
  index: number;
};

const tags = [
  ["Thuần chay", Leaf],
  ["Dinh dưỡng", Sparkles],
  ["Không bảo quản", ShieldCheck],
  ["Tiện lợi", PackageCheck],
];

export default function ProductCard({ product, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06 }}
      className="group paper-panel relative overflow-hidden rounded-[24px] p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-lotusGold hover:shadow-lotus"
    >
      <span className="absolute left-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-lotusGreen font-serif text-xl font-bold text-softGold shadow-gold">
        {String(product.id).padStart(2, "0")}
      </span>
      <div className="overflow-hidden rounded-[20px]">
        <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.08]" />
      </div>
      <div className="pt-5">
        <p className="font-serif text-2xl font-bold text-lotusGreen">{product.name}</p>
        <p className="mt-1 text-sm font-semibold text-lotusGold">{product.englishName}</p>
        <p className="mt-3 min-h-12 text-sm leading-6 text-textDarkGreen/76">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-lotusGreen">
          {tags.map(([label, Icon]) => (
            <span key={label as string} className="inline-flex items-center gap-1 rounded-full border border-borderGold/45 bg-lightCream px-2 py-1">
              <Icon size={13} /> {label as string}
            </span>
          ))}
        </div>
        <Link to={`/san-pham/${product.slug}`} className="mt-5 inline-flex rounded-full bg-lotusGreen px-5 py-2.5 text-sm font-semibold text-white shadow-gold transition hover:scale-105">
          Xem chi tiết
        </Link>
      </div>
    </motion.article>
  );
}
