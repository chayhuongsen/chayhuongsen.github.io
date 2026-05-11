import { Navigate, useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { products } from "../data/products";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return <ProductDetail product={product} />;
}
