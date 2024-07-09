import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import ModalProvider from "../Provider/Modal";

export default function RootPage() {
  return (
    <ModalProvider>
      <MainNavigation />
      <Outlet />
    </ModalProvider>
  );
}
