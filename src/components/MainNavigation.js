import SearchIcon from "../assets/Icon/search-icon.svg";
import ProfileIcon from "../assets/Icon/profile-light.svg";
import CartIcon from "../assets/Icon/nav-cart.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../Provider/Modal";
import MobileNav from "./MobileNavigation";

export default function MainNavigation() {
  const { toggleNavModal, navModal } = useModal();
  return (
    <div className="relative">
      {navModal && <MobileNav />}

      <nav className="flex px-[5.3rem] items-center justify-between py-[1rem]">
        <header>
          <h1 className="text-[#1D3B4A] font-sans_serif md:block hidden text-3xl">
            Acookwares
          </h1>
          <button onClick={toggleNavModal} className="md:hidden block text-3xl">
            <FontAwesomeIcon icon={faBars} className="text-primary_color" />
          </button>
        </header>
        <ul className="md:flex hidden text-descriptive_color  gap-7">
          <li>
            <Link
              className={({ isActive }) => (isActive ? "underline" : undefined)}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>About Us</li>
          <li>
            <Link
              to="/products"
              className={({ isActive }) => (isActive ? "underline" : undefined)}
            >
              Our Product
            </Link>
          </li>
          <li>Blog</li>
        </ul>

        <div className="flex gap-4 justify-between">
          <div className="flex gap-3">
            <img src={SearchIcon} alt="Search Icon" />
            <input
              className="hidden md:inline-flex"
              placeholder="Search"
              disabled
            />
          </div>

          <img src={CartIcon} className="hidden md:inline" alt="Search Icon" />
          <p className="hidden md:inline">Cart(2)</p>
          <img src={ProfileIcon} alt="Search Icon" />
        </div>
      </nav>
    </div>
  );
}
