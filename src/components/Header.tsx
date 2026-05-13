import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoHuongSen from "../assets/images/LogoHuongSenOK.png";
import OrderModal from "./OrderModal";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Sản phẩm", href: "/#san-pham" },
  { label: "Lễ hội Ẩm thực", href: "/#le-hoi" },
  { label: "Liên hệ", href: "/lien-he" },
];

function isHashActive(pathname: string, hash: string, href: string) {
  return pathname === "/" && href.startsWith("/#") && hash === href.replace("/", "");
}

function linkClass(active: boolean) {
  return `rounded-full px-3 py-2 text-sm font-semibold transition md:px-4 ${
    active ? "bg-lotusGreen text-white shadow-sm" : "text-textDarkGreen hover:bg-softGold/20 hover:text-lotusGold"
  }`;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { hash, pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [hash, pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-borderGold/25 bg-lightCream/82 shadow-[0_12px_36px_rgba(0,63,45,0.08)] backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-5 lg:px-8">
          <Link to="/" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3" aria-label="Trang chủ Hương Sen">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lotusGreen/95 p-2 shadow-gold ring-1 ring-borderGold/45 sm:h-12 sm:w-14">
              <img src={logoHuongSen} alt="Logo Hương Sen" className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-serif text-xl font-bold leading-none tracking-wide text-lotusGreen sm:text-2xl">
                HƯƠNG SEN
              </span>
              <span className="mt-1 block truncate text-[9px] font-semibold uppercase tracking-[0.22em] text-lotusGold sm:text-[10px]">
                Nhà hàng chay
              </span>
            </span>
          </Link>

          <div className="hidden items-center rounded-full border border-borderGold/35 bg-white/45 p-1.5 shadow-sm xl:flex">
            {navItems.map((item) =>
              item.href.includes("#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={linkClass(isHashActive(pathname, hash, item.href))}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="hidden items-center gap-2 rounded-full bg-lotusGreen px-4 py-2.5 text-sm font-semibold text-white shadow-gold transition hover:-translate-y-0.5 hover:bg-deepGreen md:inline-flex"
            >
              <Phone size={17} />
              <span className="hidden lg:inline">Đặt hàng / Liên hệ</span>
              <span className="lg:hidden">Liên hệ</span>
            </button>

            <button
              aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-full border border-borderGold/45 bg-white/45 text-lotusGreen shadow-sm xl:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-borderGold/25 bg-lightCream/96 px-4 py-4 shadow-lotus backdrop-blur-xl xl:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 font-semibold text-textDarkGreen transition hover:bg-softGold/20 hover:text-lotusGold"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setModalOpen(true);
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lotusGreen px-5 py-3 font-semibold text-white shadow-gold"
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
