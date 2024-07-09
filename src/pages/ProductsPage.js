import FooterSection from "../components/FooterSection";
import { SquaredImg } from "../ui/Images";

import FirstProduct from "../assets/productDisplay/karly-gomez-vhumDnhVdrQ-unsplash 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function ProductsPage() {
  return (
    <>
      <section className="mx-[10%] my-[3rem]">
        <h1 className="text-center text-4xl my-[3rem]">Products List</h1>
        <main className="md:flex block w-full min-h-[40vh] gap-[2%]">
          <div className="w-[20%] hidden md:block">
            <article className="bg-white shadow min-h-[140px] pb-4">
              <h3 className="bg-primary_color text-center font-sans_serif py-2 text-white">
                Product Category
              </h3>
              <ul className="text-center leading-10 font-sans_serif">
                <li>Pot</li>
                <li>Pan</li>
                <li>Cutlery</li>
                <li>TableCloth</li>
                <li>Knives</li>
              </ul>
            </article>
            <article className="bg-white my-4 shadow min-h-[140px] pb-4">
              <h3 className="bg-primary_color text-center font-sans_serif py-2 text-white">
                Materials
              </h3>
              <ul className="mx-[3%] gap-3 grid-cols-2 grid items-center my-[10%]">
                <li className=" border border-slate-300 border-solid">
                  Ceramic
                  <span className="mx-2">x</span>
                </li>
                <li className=" border border-slate-300 border-solid">
                  Steel
                  <span className="mx-2">x</span>
                </li>
                <li className=" border border-slate-300 border-solid">
                  Aluminium
                  <span className="mx-2">x</span>
                </li>
                <li className=" border border-slate-300 border-solid">
                  Wood
                  <span className="mx-2">x</span>
                </li>
              </ul>
            </article>
          </div>
          <div className="md:grid *:block block md:w-[70%] w-full gap-6 grid-cols-2">
            <Link
              to="someProductId"
              className="bg-white block my-4 p-4 shadow-lg min-h-[140px] pb-4"
            >
              <div>
                <SquaredImg imgSrc={FirstProduct} />
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
                <SquaredImg imgSrc={FirstProduct} />
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
                <SquaredImg imgSrc={FirstProduct} />
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
                <SquaredImg imgSrc={FirstProduct} />
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
        </main>

        <div className="flex my-[3rem] gap-[2%] justify-end">
          <p>
            <FontAwesomeIcon icon={faArrowLeft} />
          </p>
          <ul className="flex gap-[10px] ">
            <li>1</li>
            <li className="text-white bg-text_heading_color  px-2">2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
