import { Link } from "react-router-dom";
//import InventoryInfo from "./InventoryInfo";
import InventoryOrdersDetail from "./InventoryOrdersDetail";
export default function ProductDetail() {
  return (
    <>
      <div className="flex gap-3 flex-wrap">
        <Link className="underline">Product </Link>
        {">"}
        <Link className="underline">Product Info</Link>
        {">"}
        <Link>Order</Link>
      </div>
      <InventoryOrdersDetail />

      {/*
      <InventoryInfo />
      */}
    </>
  );
}
