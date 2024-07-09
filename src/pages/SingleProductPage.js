import Product1 from "../assets/productDisplay/karly-gomez-vhumDnhVdrQ-unsplash 1.png";
import ProductT1 from "../assets/productDisplay/red ceramic pot/becca-tapert-A_L2xNKgENg-unsplash 1.png";
import ProductT2 from "../assets/productDisplay/red ceramic pot/becca-tapert-sY5RjMB1KkE-unsplash 1.png";
import ProductT3 from "../assets/productDisplay/red ceramic pot/kelsey-todd-8T8NEADBxyo-unsplash 1.png";
import Rating3 from "../assets/ratings/3-star.png";
import FooterSection from "../components/FooterSection";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { SquaredImg } from "../ui/Images";

import Review1 from "../assets/Review/portrait-upset-american-black-person_23-2148749581 1.png";
import Review2 from "../assets/Review/smiley-african-woman-with-golden-earrings_23-2148747979 1.png";
export default function SingleProductPage() {
  const navigate = useNavigate();
  const toCart = () => navigate("/cart");
  const toCheckOut = () => navigate("/checkout");
  return (
    <>
      <section className="mx-[10%] my-[3rem]">
        <h1 className="text-center text-4xl my-[3rem]">Product Details</h1>
        <main className="md:flex block gap-[2%]">
          <div className="w-[50%]">
            <img src={Product1} alt="product" />
          </div>
          <article className="md:w-[50%] w-full">
            <header>
              <h2 className="text-2xl my-5">CERAMIC POT</h2>
              <h4>CERAMIC POT with blue color</h4>
            </header>
            <div className="my-4">
              <img src={Rating3} alt="product" />
            </div>
            <p className="min-h-[10vh] my-1">description</p>
            <div className="flex justify-between my-4">
              <p>
                <span>#29000</span>
              </p>
              <div>
                <button className="border border-solid border-primary_color px-3">
                  -
                </button>
                <span className="mx-4">2</span>
                <button className="bg-primary_color px-3 text-white">+</button>
              </div>
            </div>

            <div className="flex gap-4 md:justify-between my-4">
              <button
                onClick={toCart}
                className="border border-solid border-primary_color px-10 py-3"
              >
                Add to Cart
              </button>
              <button
                onClick={toCheckOut}
                className="bg-primary_color px-10 py-3 text-white"
              >
                Buy now
              </button>
            </div>
          </article>
        </main>
        <div className="flex w-full px-5 md:w-[50%] gap-5">
          <img className="h-[100px] " src={ProductT1} alt="product" />
          <img src={ProductT2} className="h-[100px]" alt="product" />
          <img src={ProductT3} alt="product" className="h-[100px]" />
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
          <article className="mb-5">
            <h4 className="bg-primary_color text-white w-fit px-4 py-2  text-2xl">
              Description
            </h4>
            <p>Some Description</p>
          </article>

          <article className="my-5">
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
                    <SquaredImg
                      scls="h-[100px] rounded-[50%] w-[100px]"
                      imgSrc={Review1}
                    />
                    <div>
                      <h2 className="text-3xl ">Title 1</h2>
                      <p className="opacity-75">Descripption</p>
                    </div>
                  </div>
                  <h3 className="">12 HOURS AGO</h3>
                </div>
                <p>This is some Comment 1</p>
              </div>
              <div className="bg-white my-4 px-3 rounded shadow-lg">
                <div className="flex justify-between ">
                  <div className="flex gap-4">
                    <SquaredImg
                      cls="h-[100px] rounded-[50%] w-[100px]"
                      imgSrc={Review2}
                    />
                    <div>
                      <h2 className="text-3xl ">Title 2</h2>
                      <p className="opacity-75">Description</p>
                    </div>
                  </div>
                  <h3 className="">2 HOURS AGO</h3>
                </div>
                <p>This is some Comment 2</p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
