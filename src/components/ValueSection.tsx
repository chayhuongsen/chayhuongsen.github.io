import { HeartHandshake, Leaf, PackageCheck, ShieldCheck, Sparkles, Wheat } from "lucide-react";
import { coreValues } from "../data/products";

const icons = [Leaf, Wheat, ShieldCheck, HeartHandshake, Sparkles, PackageCheck];

export default function ValueSection() {
  return (
    <section className="bg-cream px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lotusGold">GIÁ TRỊ HƯƠNG SEN</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-lotusGreen sm:text-5xl">Thanh tịnh trong từng món chay</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <div key={title} className="paper-panel rounded-[24px] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lotus">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-lotusGreen text-softGold">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-bold text-lotusGreen">{title}</h3>
                <p className="mt-2 leading-7 text-textDarkGreen/74">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
