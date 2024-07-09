import Img1 from "../assets/productDisplay/blue-ceramic-pot.png";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SquaredImg } from "../ui/Images";
export default function CartPage() {
  return (
    <section className="mx-[10%]">
      <div className="flex gap-7 my-10 items-center">
        <h2 className="text-4xl">Shopping Cart(2)</h2>
        <p>Order History</p>
        <p>
          <FontAwesomeIcon className="mr-3" icon={faTrash} />
          <span>Delete</span>
        </p>
      </div>
      <main className="flex gap-4">
        <article className="w-[65%]  *:min-h-[20vh]">
          <div className="bg-white flex justify-between px-3 rounded shadow-lg">
            <div className="flex gap-4">
              <SquaredImg cls="h-[100px] w-[100px]" imgSrc={Img1} />
              <div>
                <h2 className="text-3xl ">Title 1</h2>
                <p className="opacity-75">Descripption</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl">#30,320</h3>
              <div className="my-3">
                <button className="border border-solid border-primary_color px-3 text-2xl">
                  -
                </button>
                <soan className="mx-4">2</soan>
                <button className="bg-primary_color text-white px-3 text-2xl">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white my-4 flex justify-between px-3 rounded shadow-lg">
            <div className="flex gap-4">
              <SquaredImg cls="h-[100px] w-[100px]" imgSrc={Img1} />
              <div>
                <h2 className="text-3xl ">Title 1</h2>
                <p className="opacity-75">Descripption</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl">#30,320</h3>
              <div className="my-3">
                <button className="border border-solid border-primary_color px-3 text-2xl">
                  -
                </button>
                <soan className="mx-4">2</soan>
                <button className="bg-primary_color text-white px-3 text-2xl">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white flex justify-between px-3 rounded shadow-lg">
            <div className="flex gap-4">
              <SquaredImg cls="h-[100px] w-[100px]" imgSrc={Img1} />
              <div>
                <h2 className="text-3xl ">Title 1</h2>
                <p className="opacity-75">Descripption</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl">#30,320</h3>
              <div className="my-3">
                <button className="border border-solid border-primary_color px-3 text-2xl">
                  -
                </button>
                <soan className="mx-4">2</soan>
                <button className="bg-primary_color text-white px-3 text-2xl">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className="w-[30%]">
          <div className="min-h-[40vh] bg-white shadow-md px-[5%]">
            <h2 className="bg-primary_color py-4 text-white text-center">
              Order Summary
            </h2>
            <ul className="text-center my-5 leading-8">
              <li>
                <p>
                  Sub-Total: <span>#30000</span>
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Sub-Total: <span>#30000</span>
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Sub-Total: <span>#30000</span>
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Sub-Total: <span>#30000</span>
                </p>
              </li>
            </ul>
          </div>
          <button className="w-full my-8 bg-primary_color text-white py-2">
            Check out
          </button>
        </article>
      </main>
    </section>
  );
}
