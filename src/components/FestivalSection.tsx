import { Gift, MapPin, Sparkles, Truck, Utensils } from "lucide-react";
import festivalBooth from "../assets/images/FestivalBooth2026.png";
import BackdropSection from "./BackdropSection";

const highlights = ["Nhiều ưu đãi hấp dẫn", "Quà tặng khi mua hàng", "Dùng thử miễn phí", "Giao hàng nhanh tại lễ hội"];
const icons = [Sparkles, Gift, Utensils, Truck];

export default function FestivalSection() {
  return (
    <BackdropSection id="le-hoi" variant={3} className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20" overlay="soft">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] bg-deepGreen shadow-lotus lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0 p-6 text-white sm:p-8 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-softGold sm:text-sm sm:tracking-[0.3em]">Summer Fest 2026</p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Ưu đãi đặc biệt tại Lễ hội Ẩm thực Chay
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
            Khám phá tinh hoa ẩm thực chay Việt tại gian hàng Nhà Hàng Chay Hương Sen.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = icons[index];
              return (
                <div key={item} className="flex min-w-0 items-center gap-3 rounded-2xl border border-softGold/35 bg-white/8 p-4">
                  <Icon className="shrink-0 text-softGold" size={22} />
                  <span className="font-semibold leading-6">{item}</span>
                </div>
              );
            })}
          </div>
          <a
            href="/lien-he"
            className="mt-8 inline-flex w-full justify-center rounded-full bg-softGold px-6 py-3 font-bold text-deepGreen shadow-gold transition hover:scale-105 sm:w-auto"
          >
            Ghé gian hàng ngay
          </a>
        </div>

        <div className="relative min-w-0 bg-lotusGreen/48 p-6 sm:p-8 lg:p-10">
          <div className="overflow-hidden rounded-[24px] border border-softGold/50 shadow-gold">
            <img
              src={festivalBooth}
              alt="Gian hàng Hương Sen tại Summer Fest 2026"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-6 rounded-[24px] border border-softGold/45 bg-lightCream p-5 text-textDarkGreen shadow-gold">
            <p className="font-serif text-2xl font-bold text-lotusGreen">Thông tin lễ hội</p>
            <div className="mt-3 space-y-2 text-sm leading-6">
              <p><strong>Gian hàng:</strong> Nhà Hàng Chay Hương Sen</p>
              <p><strong>Thời gian:</strong> 20/05 - 25/05/2026</p>
              <p className="flex gap-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-lotusGold" />
                <span>Công viên Thống Nhất, đường Trần Nhân Tông, Hà Nội</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackdropSection>
  );
}
