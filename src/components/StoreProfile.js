import { Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function StoreProfile() {
  return (
    <div className="bg-gradient-to-tr my-10 rounded-2xl  space-y-5 from-teal-100 to-green-300 border-3 border-teal-700 border-2 shadow border-solid px-5 py-4">
      <h3 className="lg:text-6xl md:text-4xl text-3xl text-teal-800">
        Abike Collection{" "}
      </h3>
      <article className="fira-sans-thin-italic flex gap-5 ">
        <p className="fira-sans-regular">Clothing Accessories</p>
        <p className="fira-sans-regular">New Arrival</p>
      </article>
      <article className="fira-sans-regular my-4">
        Store is a demo.. but this store sell any thing cloth related some other
        thing too
      </article>
      <Link className="underline block capitalize">
        <Info className="inline-block mx-3" />
        Can't find what you am looking for. Contact Seller.
      </Link>
    </div>
  );
}
