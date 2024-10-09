import redPolo from "../asset/demo-image-product/red-polo-front.jpg";
import blackPolo from "../asset/demo-image-product/black-polo-front.jpg";
import greenPolo from "../asset/demo-image-product/green-polo-front.jpg";
import orangePolo from "../asset/demo-image-product/orange-polo-front.jpg";
import Button from "./Button";
export default function StoreProductsList() {
  return (
    <ul className="md:grid block *:m-auto *:shadow *:pb-4 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5 space-y-4 md:space-y-0">
      <li className="rounded-2xl overflow-hidden w-fit">
        <img src={redPolo} width={250} height={270} alt={redPolo} />
        <p className="mx-6 my-2 text-xl text-pretty text-teal-900 fira-sans-semibold">
          Red Polo
        </p>
        <p className="mx-7 fira-sans-regular text-teal-900 ">6,000</p>
        <Button clxName="bg-teal-700 m-auto block text-white">Buy Now</Button>
      </li>
      <li className="rounded-2xl overflow-hidden w-fit">
        <img src={blackPolo} width={250} height={270} alt={blackPolo} />
        <p className="mx-6 my-2 text-xl text-pretty text-teal-900 fira-sans-semibold">
          Black Polo
        </p>
        <p className="mx-7 fira-sans-regular text-teal-900 ">8000</p>
        <Button clxName="bg-teal-700 m-auto block text-white">Buy Now</Button>
      </li>
      <li className="rounded-2xl overflow-hidden w-fit">
        <img src={greenPolo} width={250} height={270} alt={greenPolo} />
        <p className="mx-6 my-2 text-xl text-pretty text-teal-900 fira-sans-semibold">
          Green Polo
        </p>
        <p className="mx-7 fira-sans-regular text-teal-900 ">8000</p>
        <Button clxName="bg-teal-700 m-auto block text-white">Buy Now</Button>
      </li>
      <li className="rounded-2xl overflow-hidden w-fit">
        <img src={orangePolo} width={250} height={270} alt={orangePolo} />
        <p className="mx-6 my-2 text-xl text-pretty text-teal-900 fira-sans-semibold">
          Orange Polo
        </p>
        <p className="mx-7 fira-sans-regular text-teal-900 ">5000</p>
        <Button clxName="bg-teal-700 m-auto block text-white">Buy Now</Button>
      </li>
    </ul>
  );
}
