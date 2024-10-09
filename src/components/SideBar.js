import { Link } from "react-router-dom";

export default function SideBarComoponent({ mobile }) {
  return (
    <div
      className={`md:basis-1/4 hidden md:block  from-teal-800 bg-gradient-to-l to-teal-700 h-[100vh] text-white`}
    >
      <h1 className="text-4xl divide-y-2  text-center my-5">
        <Link to="/">SpaceBiz</Link>
      </h1>
      <ul className="text-center text-xl *:tracking-wider space-y-6 my-10">
        <li className="flex justify-center gap-1">
          <Link to={`/dashboard`}>Dashboard</Link>
        </li>
        <li className="flex justify-center gap-1">
          <Link to={`/dashboard/products`}>Product</Link>
        </li>
        <li className="flex justify-center gap-1">
          <Link to={`/dashboard/customers`}>Customers</Link>
        </li>
        <li className="flex justify-center gap-1">
          <Link to={`/dashboard/orders`}>Orders</Link>
        </li>
        <li className="flex justify-center gap-1">
          <Link to={`/dashboard/membership`}>Membership</Link>
        </li>
        <li className="flex justify-center gap-1">
          <Link to={`/dashboard/account`}>Account</Link>
        </li>
        <li className="flex justify-center gap-1">
          <Link to={`/dashboard/settings`}>Settings</Link>
        </li>
      </ul>
    </div>
  );
}
