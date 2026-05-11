import { ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoHuongSen from "../assets/images/LogoHuongSenOK.png";
import type { Product } from "../data/products";
import { products } from "../data/products";
import BackdropSection from "./BackdropSection";
import ProductCard from "./ProductCard";

export default function ProductDetail({ product }: { product: Product }) {
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <BackdropSection as="main" variant={1} className="px-4 py-10 lg:px-8 lg:py-16">
      <article className="ornate-frame paper-panel mx-auto max-w-5xl rounded-[30px] p-5 shadow-lotus sm:p-8 lg:p-12">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-3 text-lotusGreen">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-lotusGreen p-1.5 shadow-gold">
              <img src={logoHuongSen} alt="Logo Hương Sen" className="h-full w-full object-contain" />
            </span>
            <span className="font-serif text-2xl font-bold">HƯƠNG SEN</span>
          </div>
          <span className="mx-auto mt-5 grid h-16 w-16 place-items-center rounded-full bg-lotusGreen font-serif text-3xl font-bold text-softGold shadow-gold">
            {String(product.id).padStart(2, "0")}
          </span>
          <h1 className="mt-5 font-serif text-4xl font-bold text-lotusGreen sm:text-6xl">{product.name}</h1>
          <p className="mt-2 text-lg font-semibold text-lotusGold">{product.englishName}</p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-[28px] border border-borderGold/60 bg-lightCream p-3 shadow-gold">
          <img src={product.image} alt={product.name} className="aspect-[4/3] w-full rounded-[22px] object-cover" />
        </div>
        <section className="mx-auto mt-8 max-w-3xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.26em] text-lotusGold">Tờ giới thiệu sản phẩm</p>
          <div className="mt-4 overflow-hidden rounded-[28px] border border-borderGold/60 bg-lightCream shadow-lotus">
            <div className="relative aspect-[745/1055] w-full overflow-hidden">
              <img
                src={product.menuImage}
                alt={`Tờ giới thiệu ${product.name}`}
                className={`absolute top-0 h-full max-w-none object-cover ${product.menuSide === "left" ? "left-0 w-[200%]" : "right-0 w-[200%]"}`}
              />
            </div>
          </div>
        </section>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["Thành phần", product.ingredients],
            ["Bảo quản", product.storage],
            ["Hướng dẫn sử dụng", product.usage],
            ["Khối lượng tịnh", product.netWeight],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[20px] border border-borderGold/45 bg-lightCream/75 p-5">
              <p className="font-serif text-xl font-bold text-lotusGreen">{label}</p>
              <p className="mt-2 leading-7 text-textDarkGreen/76">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="tel:0981228448" className="inline-flex items-center gap-2 rounded-full bg-lotusGreen px-6 py-3 font-semibold text-white shadow-gold transition hover:scale-105">
            <Phone size={18} /> Đặt hàng / Liên hệ
          </a>
          <Link to="/#san-pham" className="inline-flex items-center gap-2 rounded-full border border-borderGold bg-lightCream px-6 py-3 font-semibold text-lotusGreen">
            <ArrowLeft size={18} /> Quay lại danh sách sản phẩm
          </Link>
        </div>
      </article>
      <section className="mx-auto mt-14 max-w-7xl">
        <h2 className="text-center font-serif text-4xl font-bold text-lotusGreen">Sản phẩm liên quan</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((item, index) => (
            <ProductCard key={item.slug} product={item} index={index} />
          ))}
        </div>
      </section>
    </BackdropSection>
  );
}
