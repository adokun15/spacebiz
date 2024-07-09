import { Link } from "react-router-dom";
import CheckOutModal from "../components/CheckOutModal";
import { useModal } from "../Provider/Modal";

export default function CheckOutPage() {
  const { checkOutModal, toggleCheckOutModal } = useModal();

  return (
    <div class="relative">
      {checkOutModal && <CheckOutModal />}
      <main className="flex">
        <article className="bg-gray-300 w-[50%] min-h-[100vh] py-10 px-[5%]">
          <p>
            <Link to="..">Back</Link>
          </p>

          <div>
            <h1 className="text-4xl my-3">Delivery Information</h1>
            <form className=" my-4 *:leading-10">
              <label>Name</label>
              <input
                className="bg-transparent  w-4/5  block px-3 border border-solid border-black"
                placeholder="Enter Name"
              />
              <label>Phone Number</label>
              <input
                className="bg-transparent  w-4/5 px-3 block border border-solid border-black"
                placeholder="Enter Number"
              />{" "}
              <label>Delivery Address</label>
              <input
                className="bg-transparent px-3 border  w-4/5 block border-solid border-black"
                placeholder="Enter Name"
              />{" "}
              <div className="flex gap-4">
                <article className="*:block">
                  <label>State</label>
                  <input
                    className="bg-transparent px-3 border border-solid border-black"
                    placeholder="Enter Name"
                  />
                </article>
                <article className="*:block">
                  <label>City</label>
                  <input
                    className="bg-transparent px-3 border border-solid border-black"
                    placeholder="Enter Name"
                  />
                </article>
              </div>
              <div>
                <input type="checkbox" />
                <span>Set As Default Address</span>
              </div>
              <div className="flex justify-end gap-5 ">
                <p>Cancel</p>
                <button className="bg-primary_color px-3 py-1 text-white">
                  Save
                </button>
              </div>
            </form>
          </div>
        </article>
        <article className="min-h-[100vh] leading-10 py-10 px-[5%]">
          <h1 className="text-3xl mb-10">Card Details</h1>
          <form>
            <label className="text-2xl">Card Name</label>
            <input
              className="bg-transparent px-3 block w-full border border-solid border-black"
              placeholder="Enter Card Name"
            />

            <label className="text-2xl mt-5">Card Number</label>
            <input
              className="bg-transparent px-3 block w-full border border-solid border-black"
              placeholder="Enter Card Number"
            />

            <div className="flex gap-4">
              <article>
                <label>Expiration Number</label>
                <input
                  className="bg-transparent px-3 block w-full border border-solid border-black"
                  placeholder="Enter Expiration Number"
                />
              </article>
              <article>
                <label>CVV</label>
                <input
                  className="bg-transparent px-3 block w-full border border-solid border-black"
                  placeholder="Enter CVV Number"
                />
              </article>
            </div>
          </form>
          <button
            className="bg-primary_color w-full my-4 text-white"
            onClick={toggleCheckOutModal}
          >
            Checkout
          </button>
        </article>
      </main>
    </div>
  );
}
