import { FormEvent, useState } from "react";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main className="bg-paper px-4 py-14 lg:px-8 lg:py-20">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lotusGold">Liên hệ</p>
          <h1 className="mt-4 font-serif text-5xl font-bold text-lotusGreen">Kết nối với Hương Sen</h1>
          <p className="mt-5 leading-8 text-textDarkGreen/76">
            Hương Sen luôn sẵn sàng tư vấn sản phẩm chay dinh dưỡng cho gia đình, nhà hàng và khách tham quan lễ hội.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex gap-3 rounded-[20px] border border-borderGold/45 bg-lightCream p-4"><MapPin className="shrink-0 text-lotusGold" />Số 16 Cổ Điển A, Thanh Trì, Hà Nội, Việt Nam</div>
            <a href="tel:0981228448" className="flex gap-3 rounded-[20px] border border-borderGold/45 bg-lightCream p-4"><Phone className="text-lotusGold" />0981228448</a>
            <a href="mailto:huongsen.biz@gmail.com" className="flex gap-3 rounded-[20px] border border-borderGold/45 bg-lightCream p-4"><Mail className="text-lotusGold" />huongsen.biz@gmail.com</a>
            <div className="flex gap-3 rounded-[20px] border border-borderGold/45 bg-lightCream p-4"><Globe2 className="text-lotusGold" />chayhuongsen.github.io</div>
          </div>
          <div className="mt-8 overflow-hidden rounded-[24px] border border-borderGold/50 shadow-lotus">
            <iframe
              title="Bản đồ Nhà Hàng Chay Hương Sen"
              src="https://www.google.com/maps?q=S%E1%BB%91%2016%20C%E1%BB%95%20%C4%90i%E1%BB%83n%20A%2C%20Thanh%20Tr%C3%AC%2C%20H%C3%A0%20N%E1%BB%99i&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="paper-panel ornate-frame rounded-[28px] p-6 shadow-lotus sm:p-8">
          <h2 className="font-serif text-3xl font-bold text-lotusGreen">Gửi liên hệ</h2>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-semibold text-textDarkGreen">
              Họ tên
              <input required minLength={2} className="rounded-2xl border border-borderGold/45 bg-white/70 px-4 py-3 outline-none focus:border-lotusGold" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-textDarkGreen">
              Số điện thoại
              <input required pattern="[0-9+ ]{8,15}" className="rounded-2xl border border-borderGold/45 bg-white/70 px-4 py-3 outline-none focus:border-lotusGold" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-textDarkGreen">
              Email
              <input type="email" required className="rounded-2xl border border-borderGold/45 bg-white/70 px-4 py-3 outline-none focus:border-lotusGold" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-textDarkGreen">
              Nội dung
              <textarea required rows={5} className="resize-none rounded-2xl border border-borderGold/45 bg-white/70 px-4 py-3 outline-none focus:border-lotusGold" />
            </label>
          </div>
          <button className="mt-6 rounded-full bg-lotusGreen px-7 py-3 font-semibold text-white shadow-gold transition hover:scale-105">Gửi liên hệ</button>
          {sent && <p className="mt-4 rounded-2xl bg-lotusGreen/10 p-4 font-semibold text-lotusGreen">Cảm ơn quý khách đã liên hệ với Hương Sen.</p>}
        </form>
      </section>
    </main>
  );
}
