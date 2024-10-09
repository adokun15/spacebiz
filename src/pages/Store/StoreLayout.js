//end users
import { Link, Outlet } from "react-router-dom";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function StoreLayout() {
  return (
    <main>
      <nav className="flex sticky justify-between py-6 px-4 bg-teal-800 text-white">
        <h2 className="text-3xl fira-sans-bold-h2">SpaceBiz</h2>
        <div className="md:hidden block text-2xl">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className=" hidden md:flex gap-4 px-6 items-center">
          <Link>Report Seller</Link>
          <Link>About Us</Link>
          <Link>Contact Us</Link>
          <Link>
            <Button clxName="bg-white py-2 text-xl fira-sans-regular text-teal-800 ">
              Create your Store
            </Button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </main>
  );
}
