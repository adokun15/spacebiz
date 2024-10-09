import { Link } from "react-router-dom";
//import OrderShipping from "./OrderShipping";
import OrderInfo from "./OrderInfo";

export default function OrderDetail() {
  return (
    <>
      <div className="flex gap-3 flex-wrap">
        <Link className="underline">Order </Link>
        {">"}
        <Link className="underline">Order Info</Link>
        {">"}
        <Link>Shipping Info</Link>
      </div>
      <OrderInfo />
      {/*
      <OrderShipping />
  */}
    </>
  );
}
