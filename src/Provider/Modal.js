"use client";
import { createContext, useState, useContext } from "react";

export const ModalContext = createContext({
  navModal: false,
  checkOutModal: false,
  toggleCheckOutModal: () => {},
  toggleNavModal: () => {},
});

export default function ModalProvider({ children }) {
  const [navModal, setNavModal] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);

  const toggleNavModal = () => setNavModal((prevState) => !prevState);
  const toggleCheckOutModal = () => setCheckoutModal((prevState) => !prevState);

  return (
    <ModalContext.Provider
      value={{
        navModal,
        checkoutModal,
        toggleNavModal,
        toggleCheckOutModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
