import { Mail, MapPin, Phone } from "lucide-react";
import logoHuongSen from "../assets/images/LogoHuongSenOK.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deepGreen text-white">
      <div className="lotus-watermark" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1fr_1.05fr] lg:px-8 lg:py-16">
        <div>
          <div className="flex items-center gap-4">
            <img src={logoHuongSen} alt="Logo Hương Sen" className="h-20 w-24 object-contain sm:h-24 sm:w-32" />
            <span className="font-serif text-5xl font-bold tracking-wide text-white drop-shadow-sm sm:text-6xl">HƯƠNG SEN</span>
          </div>
          <p className="mt-8 max-w-2xl text-2xl leading-[1.75] text-white/88 sm:text-3xl">
            Mang đến những sản phẩm chay ngon lành - dinh dưỡng - an toàn, vì sức khỏe và lòng từ bi.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-4xl font-semibold text-softGold sm:text-5xl">Liên hệ với chúng tôi</h3>
          <div className="mt-8 space-y-7 text-2xl text-white/88 sm:text-3xl">
            <p className="flex gap-5">
              <MapPin size={38} className="mt-1 shrink-0 text-softGold" />
              <span>Số 16 Cổ Điển A, Thanh Trì, Hà Nội, Việt Nam</span>
            </p>
            <a className="flex gap-5 transition hover:text-softGold" href="tel:0981228448">
              <Phone size={38} className="mt-1 shrink-0 text-softGold" />
              <span>0981228448</span>
            </a>
            <a className="flex gap-5 transition hover:text-softGold" href="mailto:huongsen.biz@gmail.com">
              <Mail size={38} className="mt-1 shrink-0 text-softGold" />
              <span>huongsen.biz@gmail.com</span>
            </a>
            <a className="flex gap-5 transition hover:text-softGold" href="https://chayhuongsen.github.io/">
              <img src={logoHuongSen} alt="" aria-hidden="true" className="mt-1 h-[38px] w-[38px] shrink-0 object-contain" />
              <span>chayhuongsen.github.io</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/12 px-4 py-4 text-center text-sm text-white/68">
        © 2026 Nhà Hàng Chay Hương Sen. All rights reserved.
      </div>
    </footer>
  );
}
