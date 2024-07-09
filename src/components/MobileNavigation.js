import { Link } from "react-router-dom";
import { useModal } from "../Provider/Modal";
import CartIcon from "../assets/Icon/nav-cart.svg";

export default function MobileNav() {
  const { toggleNavModal } = useModal();
  return (
    <>
      <div
        onClick={toggleNavModal}
        className="fixed z-[90] h-[100vh] bg-[rgba(0,0,0,0.5)] top-0 w-full backdrop-blur-lg"
      ></div>
      <div
        className={` fixed z-[1200] w-[80%]  px-[1rem] py-5 top-0 h-[100vh]  bg-white  `}
      >
        <p
          onClick={toggleNavModal}
          className="block cursor-pointer text-right my-3 text-2xl font-sans_serif"
        >
          x
        </p>
        <div>
          <h1 className="text-center text-3xl text-primary_color ">
            Acookwares
          </h1>
          <ul className="text-center leading-[4rem] ">
            <li onClick={toggleNavModal}>
              <Link
                className={({ isActive }) =>
                  isActive ? "underline" : undefined
                }
                to="/"
              >
                Home
              </Link>
            </li>
            <li>About Us</li>

            <li onClick={toggleNavModal}>
              <Link
                to="/products"
                className={({ isActive }) =>
                  isActive ? "underline" : undefined
                }
              >
                Our Product
              </Link>
            </li>
            <li>Blog</li>

            <Link
              onClick={toggleNavModal}
              to="/cart"
              className="flex gap-2 justify-center"
            >
              <img src={CartIcon} alt="Search Icon" className="block" />
              <p className="">Cart(2)</p>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
