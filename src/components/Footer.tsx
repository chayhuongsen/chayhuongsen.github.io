import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { LotusMark } from "./LotusDecoration";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deepGreen text-white">
      <div className="lotus-watermark" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-softGold">
            <LotusMark className="h-12 w-12" />
            <span className="font-serif text-3xl font-bold text-white">HƯƠNG SEN</span>
          </div>
          <p className="mt-4 leading-7 text-white/76">
            Mang đến những sản phẩm chay ngon lành - dinh dưỡng - an toàn, vì sức khỏe và lòng từ bi.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-2xl font-semibold text-softGold">Liên hệ với chúng tôi</h3>
          <div className="mt-4 space-y-3 text-sm text-white/82">
            <p className="flex gap-3"><MapPin size={18} className="shrink-0 text-softGold" />Số 16 Cổ Điển A, Thanh Trì, Hà Nội, Việt Nam</p>
            <a className="flex gap-3" href="tel:0981228448"><Phone size={18} className="text-softGold" />0981228448</a>
            <a className="flex gap-3" href="mailto:huongsen.biz@gmail.com"><Mail size={18} className="text-softGold" />huongsen.biz@gmail.com</a>
            <p>chayhuongsen.github.io</p>
          </div>
        </div>
        <div>
          <h3 className="font-serif text-2xl font-semibold text-softGold">Kết nối với Hương Sen</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {[Facebook, Youtube].map((Icon, index) => (
              <span key={index} className="grid h-11 w-11 place-items-center rounded-full border border-softGold/50 text-softGold">
                <Icon size={20} />
              </span>
            ))}
            <span className="grid h-11 w-11 place-items-center rounded-full border border-softGold/50 text-sm font-bold text-softGold">Zalo</span>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-softGold/50 text-sm font-bold text-softGold">TT</span>
          </div>
          <div className="mt-5 grid h-24 w-24 place-items-center rounded-xl border border-softGold/50 bg-white/92 text-xs font-bold text-lotusGreen">QR</div>
        </div>
      </div>
      <div className="border-t border-white/12 px-4 py-4 text-center text-sm text-white/68">
        © 2026 Nhà Hàng Chay Hương Sen. All rights reserved.
      </div>
    </footer>
  );
}
