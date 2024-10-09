import React from "react";
import Card from "./Card";

const OrderShipping = () => {
  return (
    <>
      <Card>
        <h2 className="text-3xl">Shipping Address</h2>
        <div className="my-4 space-y-5">
          <article>
            <h4 className="fira-sans-medium text-xl">Address</h4>
            <p>Adeleke Road, Iyana-Ipaja</p>
          </article>
          <article>
            <h4 className="fira-sans-medium text-xl">City</h4>
            <p>Lagos</p>
          </article>
          <article>
            <h4 className="fira-sans-medium text-xl">State</h4>
            <p>Lagos</p>
          </article>
          <article>
            <h4 className="fira-sans-medium text-xl">Country</h4>
            <p>Nigeria</p>
          </article>
        </div>

        <p className=" bg-gray-100 px-3 py-5">Please deliver before Thursday</p>
      </Card>
    </>
  );
};

export default OrderShipping;
