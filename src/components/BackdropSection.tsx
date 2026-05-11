import type { ReactNode } from "react";
import background1 from "../assets/images/BackGround1.png";
import background2 from "../assets/images/BackGround2.png";
import background3 from "../assets/images/BackGround3.png";
import background4 from "../assets/images/BackGround4.png";

const backgrounds = {
  1: background1,
  2: background2,
  3: background3,
  4: background4,
};

type Props = {
  children: ReactNode;
  id?: string;
  variant?: keyof typeof backgrounds;
  className?: string;
  overlay?: "light" | "soft" | "none";
  as?: "section" | "main";
};

export default function BackdropSection({ children, id, variant = 1, className = "", overlay = "light", as = "section" }: Props) {
  const Component = as;
  const overlayClass =
    overlay === "none"
      ? ""
      : overlay === "soft"
        ? "bg-lightCream/45"
        : "bg-gradient-to-b from-lightCream/78 via-lightCream/64 to-cream/82";

  return (
    <Component id={id} className={`relative overflow-hidden ${className}`}>
      <img src={backgrounds[variant]} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      {overlayClass && <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
