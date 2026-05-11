import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoHuongSen from "../assets/images/LogoHuongSen.png";
import OrderModal from "./OrderModal";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Sản phẩm", href: "/#san-pham" },
  { label: "Lễ hội Ẩm thực", href: "/#le-hoi" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-borderGold/35 bg-lightCream/90 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-borderGold bg-lotusGreen/95 p-1.5 shadow-gold">
              <img src={logoHuongSen} alt="Logo Hương Sen" className="h-full w-full object-contain" />
            </span>
            <span>
              <span className="block font-serif text-2xl font-bold leading-none tracking-wide text-lotusGreen">HƯƠNG SEN</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-lotusGold">Nhà hàng chay</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) =>
              item.href.includes("#") ? (
                <a key={item.label} href={item.href} className="text-sm font-semibold text-textDarkGreen transition hover:text-lotusGold">
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition hover:text-lotusGold ${isActive ? "text-lotusGold" : "text-textDarkGreen"}`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden items-center gap-2 rounded-full bg-lotusGreen px-5 py-3 text-sm font-semibold text-white shadow-gold transition hover:scale-105 lg:inline-flex"
          >
            <Phone size={17} /> Đặt hàng / Liên hệ
          </button>

          <button
            aria-label="Mở menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-full border border-borderGold/50 p-2 text-lotusGreen lg:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-borderGold/30 bg-lightCream px-4 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-2xl px-3 py-2 font-semibold text-textDarkGreen hover:bg-softGold/20">
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setModalOpen(true);
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lotusGreen px-5 py-3 font-semibold text-white"
              >
                <Phone size={17} /> Đặt hàng / Liên hệ
              </button>
            </div>
          </div>
        )}
      </header>
      <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
