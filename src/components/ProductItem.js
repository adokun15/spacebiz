import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <Link to={`/products/${product?.id}`} className="text-3xl text-red">
      {product?.productName}
    </Link>
  );
}
