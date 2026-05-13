import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoHuongSen from "../assets/images/LogoHuongSenOK.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-borderGold/25 bg-deepGreen text-white">
      <div className="lotus-watermark" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lightCream p-2 shadow-gold ring-1 ring-borderGold/45 sm:h-14 sm:w-14">
              <img src={logoHuongSen} alt="Logo Hương Sen" className="h-full w-full object-contain" />
            </span>
            <div className="min-w-0">
              <div className="truncate font-serif text-3xl font-bold tracking-wide text-white drop-shadow-sm sm:text-4xl">
                HƯƠNG SEN
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-softGold">Nhà hàng chay</div>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
            Mang đến những sản phẩm chay ngon lành, dinh dưỡng và an toàn cho bữa ăn gia đình, lễ hội và lối sống an lành mỗi ngày.
          </p>
        </div>

        <div className="grid min-w-0 gap-4 rounded-[28px] border border-softGold/35 bg-white/8 p-5 shadow-[0_10px_32px_rgba(0,0,0,0.12)] sm:p-6">
          <h3 className="font-serif text-3xl font-semibold text-softGold sm:text-4xl">Liên hệ với chúng tôi</h3>

          <div className="grid gap-4 text-sm leading-6 text-white/86 sm:text-base">
            <a
              href="https://maps.google.com/?q=Số 16 Cổ Điển A, Thanh Trì, Hà Nội, Việt Nam"
              className="flex min-w-0 items-start gap-3 transition hover:text-softGold"
            >
              <MapPin size={19} className="mt-0.5 shrink-0 text-softGold" />
              <span>Số 16 Cổ Điển A, Thanh Trì, Hà Nội, Việt Nam</span>
            </a>
            <a className="flex min-w-0 items-center gap-3 transition hover:text-softGold" href="tel:0981228448">
              <Phone size={19} className="shrink-0 text-softGold" />
              <span>0981 228 448</span>
            </a>
            <a className="flex min-w-0 items-center gap-3 transition hover:text-softGold" href="mailto:huongsen.biz@gmail.com">
              <Mail size={19} className="shrink-0 text-softGold" />
              <span className="min-w-0 break-words">huongsen.biz@gmail.com</span>
            </a>
          </div>

          <Link
            to="/lien-he"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-softGold px-5 py-3 text-sm font-semibold text-deepGreen transition hover:bg-white"
          >
            Gửi liên hệ
          </Link>
        </div>
      </div>
      <div className="border-t border-white/12 px-4 py-4 text-center text-sm text-white/68">
        © 2026 Nhà Hàng Chay Hương Sen. All rights reserved.
      </div>
    </footer>
  );
}
