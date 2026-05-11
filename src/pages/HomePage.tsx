import FestivalSection from "../components/FestivalSection";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import ValueSection from "../components/ValueSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductGrid />
      <FestivalSection />
      <ValueSection />
    </main>
  );
}
