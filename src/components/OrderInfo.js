import Button from "./Button";
import React from "react";
import Card from "./Card";

const OrderInfo = () => {
  return (
    <main className="md:flex *:w-full  gap-4">
      <Card className="space-y-6">
        <div classNam="space-y-4">
          <div>
            <h2 className="text-3xl">Checkout Order</h2>
            <article className="gap-3 my-2 flex">
              <Button clxName="text-teal-800 bg-gray-100 fira-sans-regular">
                Cancel Order
              </Button>
              <Button clxName="bg-teal-800 text-white fira-sans-regular">
                Mark as Delivered
              </Button>
            </article>
          </div>
          <div className="divide-y-2 space-y-4">
            <article className="flex justify-between">
              <h4 className="md:text-xl text-[16px] text-teal-800 fira-sans-medium">
                Green Polo
                <span className="block text-xs text-gray-300">
                  Green Polo x 3
                </span>
              </h4>
              <p className="fira-sans-medium md:text-xl text-[16px]">20000</p>
            </article>
            <article className="flex justify-between">
              <h4 className="md:text-xl text-teal-800 text-[16px] fira-sans-medium">
                Red Polo
                <span className="block text-xs text-gray-300">
                  Red Polo x 2
                </span>
              </h4>
              <p className="md:text-xl fira-sans-medium text-[16px]">13000</p>
            </article>
          </div>
          <article className="flex justify-between">
            <h4 className="text-xl text-teal-800 fira-sans-medium">
              Shipping Fees
            </h4>
            <p className=" fira-sans-medium">300</p>
          </article>
          <article className="flex justify-between items-center">
            <h4 className="text-3xl text-teal-800 fira-sans-medium">Total</h4>
            <p className="fira-sans-medium">23000</p>
          </article>
        </div>
      </Card>
      <Card>
        <h2 className="text-3xl">Customer Information</h2>
        <div className="my-4 space-y-5">
          <article>
            <h4 className="fira-sans-medium text-xl">Name</h4>
            <p>Daniel Amos</p>
          </article>
          <article>
            <h4 className="fira-sans-medium text-xl">Email</h4>
            <p>a@gmail.com</p>
          </article>
          <article>
            <h4 className="fira-sans-medium text-xl">Phone Number</h4>
            <p>+2344324034232</p>
          </article>
        </div>
        <Button clxName="bg-teal-800 text-white fira-sans-regular">
          View Transaction
        </Button>
      </Card>
    </main>
  );
};

export default OrderInfo;
