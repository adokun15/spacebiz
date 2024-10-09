import Logo from "../../asset/demo-image-product/red-polo-front.jpg";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

/**
 * 
 
 */
//Transaction details are sent to their whatapp: issue like a refund
//or Dispute or Subscription About TO expire new Orders
export default function AccountComponent() {
  return (
    <>
      <Card>
        <h1 className="fira-sans-medium text-3xl">Profile Account</h1>
        <div className="w-36 my-4 h-36 rounded-full overflow-hidden">
          <img src={Logo} alt={Logo} className="aspect-square bg-cover" />
        </div>
        <Link className="underline">Change Logo</Link>
        <div className=" my-4 md:grid-cols-3 md:grid space-y-3">
          <article>
            <h3 className="fira-sans-semibold">Business Name</h3>
            <p>Abike Collection</p>
          </article>
          <article>
            <h3 className="fira-sans-semibold">Email</h3>
            <p>Abike@gmail.com</p>
          </article>
          <article>
            <h3 className="fira-sans-semibold">Phone Number</h3>
            <p>+23480343434222</p>
          </article>
        </div>

        <Button clxName="bg-teal-800 text-white">Edit Profile</Button>
      </Card>
      <Card className="space-y-4">
        <h1 className="fira-sans-medium text-3xl">Bank Details</h1>
        <div className="fira-sans-regular">
          <p>Opay ( 8129584035)</p>
          <p>Daniel AMOS</p>
        </div>
        <Button clxName="bg-teal-800 text-white">Edit Bank Detail</Button>
      </Card>
      <Card className="space-y-4">
        <h1 className="fira-sans-medium text-3xl">Verify Email</h1>
        <div className=" flex gap-5 flex-wrap items-center">
          <p className="">
            Your Email<span className="fira-sans-semibold"> a@gmail.com </span>{" "}
            has not been verify!
          </p>
          <Button clxName="text-white fira-sans-regular bg-amber-700">
            Verify Now!
          </Button>
        </div>
      </Card>
      <Card className="space-y-3">
        <h1 className="fira-sans-medium text-3xl">
          Customer Service: Refunds & Dispute (Complaints)
        </h1>
        <p className="font-medium text-[20px]">
          If you have any Issues. Concerning delay payment or product etc
        </p>
        <div>
          Reach out to our{" "}
          <Link className="text-teal-800 underline">Email</Link>
        </div>
      </Card>
    </>
  );
}
