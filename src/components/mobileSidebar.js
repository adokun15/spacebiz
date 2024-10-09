import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const MobileSidebar = ({ closemenu }) => {
  return (
    <>
      <div
        className={`fixed h-[100vh] z-[10] backdrop-blur-sm w-full top-0 bg-[rgba(0,0,0,0.2)] `}
      ></div>
      <div
        className={` bg-white w-[80%] h-[100vh]  z-[60] text-main_color  top-0 text-2xl  fixed`}
      >
        <h1 className="text-4xl divide-y-2  text-center my-5">
          <Link to="/">SpaceBiz</Link>
        </h1>
        <ul className="text-center text-xl *:tracking-wider space-y-6 my-10">
          <li onClick={closemenu} className="flex justify-center gap-1">
            <Link to={`/dashboard`}>Dashboard</Link>
          </li>
          <li onClick={closemenu} className="flex justify-center gap-1">
            <Link to={`/dashboard/products`}>Product</Link>
          </li>
          <li onClick={closemenu} className="flex justify-center gap-1">
            <Link to={`/dashboard/customers`}>Customers</Link>
          </li>
          <li onClick={closemenu} className="flex justify-center gap-1">
            <Link to={`/dashboard/orders`}>Orders</Link>
          </li>
          <li onClick={closemenu} className="flex justify-center gap-1">
            <Link to={`/dashboard/membership`}>Membership</Link>
          </li>
          <li onClick={closemenu} className="flex justify-center gap-1">
            <Link to={`/dashboard/account`}>Account</Link>
          </li>
          <li onClick={closemenu} className="flex justify-center gap-1">
            <Link to={`/dashboard/settings`}>Settings</Link>
          </li>
        </ul>
        <Button
          clxName="bg-teal-800 text-white m-auto block"
          onClick={closemenu}
        >
          Close
        </Button>
      </div>
    </>
  );
};

export default MobileSidebar;
