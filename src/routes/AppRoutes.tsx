import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";

export default function AppRoutes() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <>
      {!isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/san-pham/:slug" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}
