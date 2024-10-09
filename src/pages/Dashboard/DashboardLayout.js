//seller
import { Outlet } from "react-router-dom";
import SideBarComoponent from "../../components/SideBar";
import { PhoneCallIcon, PowerIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MobileSidebar from "../../components/mobileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { ModalAction } from "../../state/endpoints/modal";

export default function DashboardLayout() {
  const { DashboardSideBar } = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  const toggleMenu = () => dispatch(ModalAction.toggleDashBoardSideBar());
  return (
    <div className="relative">
      {DashboardSideBar && <MobileSidebar closemenu={toggleMenu} />}
      <main className="max-w-full md:flex md:h-[100vh] overflow-y-hidden">
        <SideBarComoponent />
        <div className="md:px-10 p-5 space-y-5 basis-3/4 overflow-y-scroll">
          <button onClick={toggleMenu}>
            <span className="md:hidden text-2xl">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
          <nav className="flex justify-between shadow py-2 px-3  rounded-xl w-full">
            <h1 className="text-xl md:text-3xl text-ellipsis">
              Ohida Collection
            </h1>
            <div className="text-xs md:text-xl flex gap-4">
              <button>
                {" "}
                <PhoneCallIcon className="inline-block mx-3" />
                Invite
              </button>
              <button className="text-xs md:text-xl">
                <PowerIcon
                  width={20}
                  height={20}
                  className="inline-block mx-3"
                />
                logout
              </button>
            </div>
          </nav>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
