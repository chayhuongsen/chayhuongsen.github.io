import { motion } from "framer-motion";
import homepageExact from "../assets/images/HuongSenHomepageExact.png";

export default function HeroSection() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-[#f8efd9]">
      <motion.div
        initial={{ opacity: 0, scale: 1.015 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative h-screen w-[calc(100vh*1916/821)] max-w-none sm:h-auto sm:w-screen sm:max-w-[1916px]"
        style={{ aspectRatio: "1916 / 821" }}
      >
        <img
          src={homepageExact}
          alt="Nhà Hàng Chay Hương Sen - Ăn chay để trưởng dưỡng lòng từ bi"
          className="h-full w-full object-contain"
          fetchPriority="high"
        />
        <a
          href="#san-pham"
          aria-label="Xem sản phẩm"
          className="absolute left-[18%] top-[70.5%] h-[6.7%] w-[10.8%] rounded-full focus:outline-none focus:ring-2 focus:ring-lotusGold focus:ring-offset-2 focus:ring-offset-[#f8efd9]"
        />
        <a
          href="#le-hoi"
          aria-label="Ghé gian hàng"
          className="absolute left-[29.2%] top-[70.5%] h-[6.7%] w-[9.4%] rounded-full focus:outline-none focus:ring-2 focus:ring-lotusGold focus:ring-offset-2 focus:ring-offset-[#f8efd9]"
        />
        <a
          href="tel:0981228448"
          aria-label="Gọi điện Hương Sen"
          className="absolute right-[0.8%] top-[79.7%] h-[6.1%] w-[2.7%] rounded-full focus:outline-none focus:ring-2 focus:ring-lotusGold focus:ring-offset-2 focus:ring-offset-[#f8efd9]"
        />
        <a
          href="/lien-he"
          aria-label="Liên hệ Zalo Hương Sen"
          className="absolute right-[0.8%] top-[87.0%] h-[6.1%] w-[2.7%] rounded-full focus:outline-none focus:ring-2 focus:ring-lotusGold focus:ring-offset-2 focus:ring-offset-[#f8efd9]"
        />
      </motion.div>
    </section>
  );
}
