import { Leaf, ShieldCheck, Sparkles } from "lucide-react";
import BackdropSection from "../components/BackdropSection";
import LotusDecoration from "../components/LotusDecoration";
import { products } from "../data/products";

export default function AboutPage() {
  return (
    <BackdropSection as="main" variant={1} className="px-4 py-14 lg:px-8 lg:py-20">
      <LotusDecoration className="right-8 top-20 h-44 w-44 text-lotusGreen/20" />
      <section className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <div className="paper-panel rounded-[28px] p-6 shadow-lotus sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lotusGold">Giới thiệu</p>
          <h1 className="mt-4 font-serif text-5xl font-bold leading-tight text-lotusGreen">Câu chuyện Hương Sen</h1>
          <p className="mt-5 leading-8 text-textDarkGreen/78">
            Nhà Hàng Chay Hương Sen được hình thành từ niềm tin rằng mỗi bữa ăn chay có thể nuôi dưỡng thân tâm,
            mở rộng lòng từ bi và góp phần tạo nên lối sống an lành cho cộng đồng.
          </p>
          <p className="mt-4 leading-8 text-textDarkGreen/78">
            Chúng tôi chọn nguyên liệu tự nhiên, chế biến cẩn trọng và giữ hương vị thanh lành để sản phẩm tiện lợi
            nhưng vẫn trọn vẹn tinh thần ẩm thực chay Việt.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.slice(0, 4).map((product, index) => (
            <img key={product.slug} src={product.image} alt={product.name} className={`rounded-[24px] border border-borderGold/50 object-cover shadow-lotus ${index % 2 ? "mt-8" : ""}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="paper-panel ornate-frame rounded-[28px] p-7 shadow-lotus lg:p-10">
          <h2 className="font-script text-4xl font-bold text-lotusGreen">Ăn chay để trưởng dưỡng lòng từ bi</h2>
          <p className="mt-4 max-w-4xl leading-8 text-textDarkGreen/76">
            Triết lý của Hương Sen đặt sự tử tế ở trung tâm: tử tế với cơ thể, với người dùng, với nguyên liệu và với
            môi trường. Vì vậy từng món chay đều hướng tới sự cân bằng giữa dinh dưỡng, hương vị và sự an tâm.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lotusGold">Vì sao chọn Hương Sen?</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-lotusGreen">Cam kết từ nguyên liệu đến bữa ăn</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Nguyên liệu tự nhiên", Leaf, "Ưu tiên thực vật, đậu nành, rong biển, nấm và gia vị quen thuộc."],
            ["An toàn mỗi ngày", ShieldCheck, "Không chất bảo quản, hướng dẫn bảo quản rõ ràng cho từng sản phẩm."],
            ["Tinh thần từ tâm", Sparkles, "Mỗi món ăn được tạo nên để lan tỏa sự an lành và yêu thương."],
          ].map(([title, Icon, text]) => (
            <div key={title as string} className="paper-panel rounded-[24px] p-6 shadow-sm">
              <Icon className="text-lotusGold" size={34} />
              <h3 className="mt-4 font-serif text-2xl font-bold text-lotusGreen">{title as string}</h3>
              <p className="mt-2 leading-7 text-textDarkGreen/74">{text as string}</p>
            </div>
          ))}
        </div>
      </section>
    </BackdropSection>
  );
}
