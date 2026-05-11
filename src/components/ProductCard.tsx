import { motion } from "framer-motion";
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06 }}
      className="group paper-panel relative overflow-hidden rounded-[24px] p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-lotusGold hover:shadow-lotus"
    >
      <Link to={`/san-pham/${product.slug}`} className="block" aria-label={`Xem chi tiết ${product.name}`}>
        <div className="overflow-hidden rounded-[20px]">
          <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.08]" />
        </div>
        <div className="pt-5">
          <p className="text-center font-serif text-2xl font-bold text-lotusGreen">{product.name}</p>
        </div>
      </Link>
    </motion.article>
  );
}
