import { FormEvent, useState } from "react";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import BackdropSection from "../components/BackdropSection";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <BackdropSection as="main" variant={4} className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <section className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="paper-panel min-w-0 rounded-[28px] p-5 shadow-lotus sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-lotusGold sm:text-sm sm:tracking-[0.3em]">Liên hệ</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-lotusGreen sm:text-5xl">Kết nối với Hương Sen</h1>
          <p className="mt-5 text-sm leading-7 text-textDarkGreen/76 sm:text-base sm:leading-8">
            Hương Sen luôn sẵn sàng tư vấn sản phẩm chay dinh dưỡng cho gia đình, nhà hàng và khách tham quan lễ hội.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex min-w-0 items-start gap-3 rounded-[20px] border border-borderGold/45 bg-lightCream p-4 text-sm leading-6 text-textDarkGreen/82 sm:text-base">
              <MapPin className="mt-0.5 shrink-0 text-lotusGold" />
              <span>Số 16 Cổ Điển A, Thanh Trì, Hà Nội, Việt Nam</span>
            </div>
            <a href="tel:0981228448" className="flex min-w-0 items-center gap-3 rounded-[20px] border border-borderGold/45 bg-lightCream p-4 text-sm text-textDarkGreen/82 sm:text-base">
              <Phone className="shrink-0 text-lotusGold" />
              <span>0981 228 448</span>
            </a>
            <a href="mailto:huongsen.biz@gmail.com" className="flex min-w-0 items-center gap-3 rounded-[20px] border border-borderGold/45 bg-lightCream p-4 text-sm text-textDarkGreen/82 sm:text-base">
              <Mail className="shrink-0 text-lotusGold" />
              <span className="min-w-0 break-words">huongsen.biz@gmail.com</span>
            </a>
            <div className="flex min-w-0 items-center gap-3 rounded-[20px] border border-borderGold/45 bg-lightCream p-4 text-sm text-textDarkGreen/82 sm:text-base">
              <Globe2 className="shrink-0 text-lotusGold" />
              <span className="min-w-0 break-words">chayhuongsen.github.io</span>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-[24px] border border-borderGold/50 shadow-lotus">
            <iframe
              title="Bản đồ Nhà Hàng Chay Hương Sen"
              src="https://www.google.com/maps?q=S%E1%BB%91%2016%20C%E1%BB%95%20%C4%90i%E1%BB%83n%20A%2C%20Thanh%20Tr%C3%AC%2C%20H%C3%A0%20N%E1%BB%99i&output=embed"
              className="h-64 w-full sm:h-72"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="paper-panel ornate-frame min-w-0 rounded-[28px] p-5 shadow-lotus sm:p-8">
          <h2 className="font-serif text-3xl font-bold text-lotusGreen sm:text-4xl">Gửi liên hệ</h2>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-semibold text-textDarkGreen">
              Họ tên
              <input required minLength={2} className="w-full min-w-0 rounded-2xl border border-borderGold/45 bg-white/70 px-4 py-3 outline-none focus:border-lotusGold" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-textDarkGreen">
              Số điện thoại
              <input required pattern="[0-9+ ]{8,15}" className="w-full min-w-0 rounded-2xl border border-borderGold/45 bg-white/70 px-4 py-3 outline-none focus:border-lotusGold" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-textDarkGreen">
              Email
              <input type="email" required className="w-full min-w-0 rounded-2xl border border-borderGold/45 bg-white/70 px-4 py-3 outline-none focus:border-lotusGold" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-textDarkGreen">
              Nội dung
              <textarea required rows={5} className="w-full min-w-0 resize-none rounded-2xl border border-borderGold/45 bg-white/70 px-4 py-3 outline-none focus:border-lotusGold" />
            </label>
          </div>
          <button className="mt-6 w-full rounded-full bg-lotusGreen px-7 py-3 font-semibold text-white shadow-gold transition hover:scale-105 sm:w-auto">Gửi liên hệ</button>
          {sent && <p className="mt-4 rounded-2xl bg-lotusGreen/10 p-4 font-semibold text-lotusGreen">Cảm ơn quý khách đã liên hệ với Hương Sen.</p>}
        </form>
      </section>
    </BackdropSection>
  );
}
