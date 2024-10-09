import { ChevronDown, Info } from "lucide-react";
import DashboardAnalytics from "../../components/Analytics";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function SellerHome() {
  return (
    <main>
      <h3 className="text-2xl my-3  px-2 py-1 rounded w-fit">Account Info</h3>
      <h6 className="text-xs px-2 my-1">
        <Link className="underline text-teal-700 ">
          View Store {/*Generate Store Link*/}
        </Link>
      </h6>
      <div className="shadow p-4 space-y-3 rounded divide-y-2">
        <p className="md:text-2xl text-xl">
          Total Amount Made
          <Button>
            <span className="border inline-block mx-1 mb-3 px-2 p-1 rounded">
              This Week
              <ChevronDown className="inline-block" />
            </span>
          </Button>
          <span className="block text-5xl">$130,505</span>
        </p>
        <p className="md:text-2xl text-xl mb-8">
          Pending Amount Made
          <span className="inline-block md:block mt-4 text-5xl">$1070</span>
          <span className="block  text-xs my-3">
            {" "}
            <Info width={12} height={12} className="inline-block mx-1" /> Payout
            is Tomorrow. Also 92% of a single product sale will be sent to you.
          </span>
        </p>
      </div>
      <h3 className="text-2xl my-3  px-2 py-1 rounded w-fit">Store </h3>
      <DashboardAnalytics />
      <h3 className="text-2xl my-3  px-2 py-1 rounded w-fit">Pending Order</h3>
      <div>
        You Have 12 Pending Orders.{" "}
        <Button clxName="bg-teal-800 text-white">Attend to this Orders</Button>
      </div>
    </main>
  );
}
