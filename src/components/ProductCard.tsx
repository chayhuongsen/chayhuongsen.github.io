import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../data/products";

type Props = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-borderGold/35 bg-white/65 shadow-[0_14px_36px_rgba(0,63,45,0.08)] transition duration-300 hover:-translate-y-1 hover:border-lotusGold hover:shadow-lotus"
    >
      <Link to={`/san-pham/${product.slug}`} className="block overflow-hidden" aria-label={`Xem chi tiết ${product.name}`}>
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-lotusGold sm:tracking-[0.24em]">
          {String(product.id).padStart(2, "0")} - {product.englishName}
        </div>

        <h3 className="mt-3 font-serif text-2xl font-bold text-lotusGreen">{product.name}</h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-textDarkGreen/80 sm:text-base">
          {product.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-textDarkGreen/75">
          <span className="rounded-full bg-softGold/15 px-3 py-1.5">{product.netWeight}</span>
          <span className="rounded-full bg-softGold/15 px-3 py-1.5">Bảo quản lạnh</span>
        </div>

        <Link
          to={`/san-pham/${product.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-lotusGreen transition hover:text-lotusGold"
        >
          Xem chi tiết <ArrowRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}
