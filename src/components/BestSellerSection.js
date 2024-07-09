import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FirstProductPot from "../assets/productDisplay/blue-ceramic-pot-2.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function BestSellerSection() {
  return (
    <section>
      <header>
        <h1 className="text-center text-3xl">Best Seller</h1>
      </header>
      <article className="mx-[10%] justify-between md:flex block gap-10">
        <Link
          to="products/someProductId"
          className="bg-white my-4 p-4 shadow-lg min-h-[140px] pb-4"
        >
          <div>
            <img src={FirstProductPot} alt="Some pic" />
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
          to="products/someProductId"
          className="bg-white my-4 p-4 shadow-lg min-h-[140px] pb-4"
        >
          <div>
            <img src={FirstProductPot} alt="Some pic" />
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
          to="products/someProductId"
          className="bg-white my-4 p-4 shadow-lg min-h-[140px] pb-4"
        >
          <div>
            <img src={FirstProductPot} alt="Some pic" />
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
      </article>
    </section>
  );
}
