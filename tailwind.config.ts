import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lotusGreen: "#064E3B",
        deepGreen: "#003F2D",
        lotusGold: "#C88A1A",
        softGold: "#E5B75A",
        cream: "#FFF6E3",
        lightCream: "#FFF9EC",
        borderGold: "#D6A53A",
        textDarkGreen: "#063C2D",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
        script: ["Playfair Display", "Cormorant Garamond", "serif"],
      },
      boxShadow: {
        lotus: "0 22px 60px rgba(0, 63, 45, 0.18)",
        gold: "0 12px 34px rgba(200, 138, 26, 0.22)",
      },
      backgroundImage: {
        paper:
          "radial-gradient(circle at 18% 12%, rgba(229,183,90,.18), transparent 28%), radial-gradient(circle at 78% 18%, rgba(6,78,59,.12), transparent 24%), linear-gradient(135deg, #FFF9EC 0%, #FFF6E3 46%, #F7E5BF 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
