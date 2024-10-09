import StoreProductsList from "../../components/productsList";
import StoreProfile from "../../components/StoreProfile";

export default function MarketPlace() {
  return (
    <div className="md:mx-[20vw] mx-1 my-[3vh]">
      <StoreProfile />
      <div>
        <h3 className="md:text-5xl text-3xl border-b-2 w-fit m-auto px-3 border-l-2  text-center md:text-start text-teal-800">
          Product
        </h3>
        <StoreProductsList />
      </div>
    </div>
  );
}
