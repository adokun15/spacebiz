import Product1 from "../assets/productDisplay/blue-ceramic-pot.png";
import Rating3 from "../assets/ratings/3-star.png";
import colorAvaliable from "../assets/productDisplay/available-color/red-black-slate.png";
import FooterSection from "../components/FooterSection";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SquaredImg } from "../ui/Images";

import Review1 from "../assets/Review/portrait-upset-american-black-person_23-2148749581 1.png";
export default function SingleProductPage() {
  return (
    <>
      <section className="mx-[10%] my-[3rem]">
        <h1 className="text-center text-4xl my-[3rem]">Product Details</h1>
        <main className="flex gap-[2%]">
          <div className="w-[50%]">
            <img src={Product1} alt="product" />
          </div>
          <article className="w-[50%]">
            <header>
              <h2>CERAMIC POT</h2>
              <h4>CERAMIC POT with blue color</h4>
            </header>
            <div className="my-4">
              <img src={Rating3} alt="product" />
            </div>
            <p className="min-h-[10vh] my-1">description</p>
            <div className="flex justify-between my-4 px-5 w-full">
              <img src={colorAvaliable} alt="product" />
              <p>use coupon</p>
            </div>
            <div className="flex justify-between my-4">
              <p>
                price<span>#29000</span>
              </p>
              <div>
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>

            <div className="flex justify-between my-4">
              <button>Add to Cart</button>
              <button>Buy now</button>
            </div>
          </article>
        </main>
        <div className="flex ">
          <img className="h-[100px] " src={Product1} alt="product" />
          <img src={Product1} alt="product" />
          <img src={Product1} alt="product" />
        </div>

        <div className="my-6">
          <h3 className="text-center text-2xl">You may like this</h3>
          <div className="grid md:block md:w-[70%] w-[90%] gap-6 grid-cols-2">
            <Link
              to="someProductId"
              className="bg-white my-4 p-4 shadow-lg min-h-[140px] pb-4"
            >
              <div>
                <SquaredImg imgSrc={Product1} />
              </div>
              <header className="flex">
                <h2 className="text-xl font-sans_serif font-[700]">
                  Ceramic Pot <span>(in stock)</span>
                </h2>
                <div>ratings</div>
              </header>
              <p>Some BRIEF Name</p>
              <div>Color avalaible</div>
              <div className="flex justify-between">
                <p>£23,000</p>
                <button>
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </Link>
            <Link
              to="someProductId"
              className="bg-white my-4 p-4 shadow-lg min-h-[140px] pb-4"
            >
              <div>
                <SquaredImg imgSrc={Product1} />
              </div>
              <header className="flex">
                <h2 className="text-xl font-sans_serif font-[700]">
                  Ceramic Pot <span>(in stock)</span>
                </h2>
                <div>ratings</div>
              </header>
              <p>Some BRIEF Name</p>
              <div>Color avalaible</div>
              <div className="flex justify-between">
                <p>£23,000</p>
                <button>
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </Link>
            <Link
              to="someProductId"
              className="bg-white my-4 p-4 shadow-lg min-h-[140px] pb-4"
            >
              <div>
                <SquaredImg imgSrc={Product1} />
              </div>
              <header className="flex">
                <h2 className="text-xl font-sans_serif font-[700]">
                  Ceramic Pot <span>(in stock)</span>
                </h2>
                <div>ratings</div>
              </header>
              <p>Some BRIEF Name</p>
              <div>Color avalaible</div>
              <div className="flex justify-between">
                <p>£23,000</p>
                <button>
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <article>
            <h4 className="bg-primary_color text-white w-fit px-4 py-2  text-2xl">
              Description
            </h4>
            <p>Some Description</p>
          </article>
          <article>
            <h4 className="bg-primary_color text-white w-fit px-4 py-2  text-2xl">
              Key details
            </h4>
            <p>Some Details</p>
          </article>
          <article>
            <h4 className="bg-primary_color text-white w-fit px-4 py-2  text-2xl">
              Reviews
            </h4>
            <div>
              <div className="bg-white my-4 px-3 rounded shadow-lg">
                <div className="flex justify-between ">
                  <div className="flex gap-4">
                    <SquaredImg cls="h-[100px] w-[100px]" imgSrc={Review1} />
                    <div>
                      <h2 className="text-3xl ">Title 1</h2>
                      <p className="opacity-75">Descripption</p>
                    </div>
                  </div>
                  <h3 className="">12 HOURS AGO</h3>
                </div>
                <p>This is some Comment</p>
              </div>
              <div className="bg-white my-4 px-3 rounded shadow-lg">
                <div className="flex justify-between ">
                  <div className="flex gap-4">
                    <SquaredImg cls="h-[100px] w-[100px]" imgSrc={Review1} />
                    <div>
                      <h2 className="text-3xl ">Title 1</h2>
                      <p className="opacity-75">Descripption</p>
                    </div>
                  </div>
                  <h3 className="">12 HOURS AGO</h3>
                </div>
                <p>This is some Comment</p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
