import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="san-pham" className="bg-lightCream px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lotusGold">SẢN PHẨM NỔI BẬT</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-lotusGreen sm:text-5xl">6 món chay dinh dưỡng</h2>
          <p className="mt-4 text-textDarkGreen/74">Ngon lành, tiện lợi, giàu dinh dưỡng cho bữa ăn gia đình và những ngày lễ hội.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
