import React from "react";
import Card from "./Card";
import Button from "./Button";

const CustomerInfo = () => {
  return (
    <>
      <Card>
        <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-4 block gap-5">
          <article>
            <p className="text-2xl text-teal-700 fira-sans-medium">
              Customer Name
            </p>
            <p>Akin</p>
          </article>
          <article>
            <p className="text-2xl text-teal-700 fira-sans-medium">
              Customer Email
            </p>
            <p>a@gmail.com</p>
          </article>
          <article>
            <p className="text-2xl text-teal-700 fira-sans-medium">
              Total Amount Spent
            </p>
            <p>$40,303</p>
          </article>

          <article>
            <p className="text-2xl text-teal-700 fira-sans-medium">
              Phone Number
            </p>
            <p>+2348668656565</p>
          </article>
        </div>
        <div className="flex flex-wrap md:p-4 my-4 py-2 gap-2 items-center">
          <p>Joined on 4th Oct, 2024</p>
          <Button clxName="bg-red-500 text-white">Report Customer</Button>
          <Button clxName="bg-teal-800 text-white">Connect on WhatApp</Button>
        </div>
      </Card>
    </>
  );
};

export default CustomerInfo;
