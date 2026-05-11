import { Gift, MapPin, Sparkles, Truck, Utensils } from "lucide-react";
import brochure from "../assets/images/BrochureCovers.svg";

const highlights = ["Nhiều ưu đãi hấp dẫn", "Quà tặng khi mua hàng", "Dùng thử miễn phí", "Giao hàng nhanh tại lễ hội"];
const icons = [Sparkles, Gift, Utensils, Truck];

export default function FestivalSection() {
  return (
    <section id="le-hoi" className="bg-lightCream px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] bg-deepGreen shadow-lotus lg:grid-cols-[1.05fr_.95fr]">
        <div className="p-7 text-white sm:p-10 lg:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-softGold">Summer Fest 2026</p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">ƯU ĐÃI ĐẶC BIỆT TẠI LỄ HỘI ẨM THỰC CHAY</h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/78">
            Khám phá tinh hoa ẩm thực chay Việt tại gian hàng Nhà Hàng Chay Hương Sen.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = icons[index];
              return (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-softGold/35 bg-white/8 p-4">
                  <Icon className="text-softGold" size={22} />
                  <span className="font-semibold">{item}</span>
                </div>
              );
            })}
          </div>
          <a href="/lien-he" className="mt-8 inline-flex rounded-full bg-softGold px-6 py-3 font-bold text-deepGreen shadow-gold transition hover:scale-105">
            Ghé gian hàng ngay
          </a>
        </div>
        <div className="relative bg-lotusGreen/48 p-7 sm:p-10">
          <img src={brochure} alt="Brochure Hương Sen tại lễ hội" className="rounded-[24px] border border-softGold/50 shadow-gold" />
          <div className="mt-6 rounded-[24px] border border-softGold/45 bg-lightCream p-5 text-textDarkGreen shadow-gold">
            <p className="font-serif text-2xl font-bold text-lotusGreen">Thông tin lễ hội</p>
            <div className="mt-3 space-y-2 text-sm leading-6">
              <p><strong>Gian hàng:</strong> Nhà Hàng Chay Hương Sen</p>
              <p><strong>Thời gian:</strong> 20/05 - 25/05/2026</p>
              <p className="flex gap-2"><MapPin size={18} className="shrink-0 text-lotusGold" />Công viên Thống Nhất, đường Trần Nhân Tông, Hà Nội</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
