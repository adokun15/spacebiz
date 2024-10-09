import React from "react";
import Card from "./Card";
import Logo from "../asset/demo-image-product/orange-polo-front.jpg";
import Button from "./Button";

const InventoryInfo = () => {
  return (
    <>
      <Card>
        <div className="w-36 my-4 h-36 rounded-full overflow-hidden">
          <img src={Logo} alt={Logo} className="aspect-square bg-cover" />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <article>
            <p className="text-2xl text-teal-700 fira-sans-medium">
              Product Name
            </p>
            <p>Cream Once</p>
          </article>
          <article>
            <p className="text-2xl text-teal-700 fira-sans-medium">
              Product Price
            </p>
            <p>Cream Once</p>
          </article>
          <article>
            <p className="text-2xl text-teal-700 fira-sans-medium">In Stock</p>
            <p>4</p>
          </article>

          <article>
            <p className="text-2xl text-teal-700 fira-sans-medium">
              Product Url Slug
            </p>
            <p>shoe-got-hoes</p>
          </article>
        </div>
      </Card>
      <Card className="space-y-3">
        <h2>Do you want a delivery field to be added?</h2>
        <Button clxName="bg-teal-800 text-white">Add field</Button>
      </Card>
      <Card className=" items-center w-[60%] space-y-3 flex justify-between">
        <p>Yaba</p>
        <p>200</p>
        <p>edit | delete</p>
      </Card>
    </>
  );
};

export default InventoryInfo;
