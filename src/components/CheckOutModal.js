import success from "../assets/checkoutModal/Credit card payment.png";
import { useModal } from "../Provider/Modal";
export default function CheckOutModal() {
  const { toggleCheckOutModal } = useModal();
  return (
    <>
      <div
        onClick={toggleCheckOutModal}
        className="fixed z-[90] h-[100vh] bg-[rgba(0,0,0,0.5)] top-0 w-full blur-"
      ></div>
      <div
        className={` fixed z-[1200] h-fit w-[90%] left-[5%] py-5 top-[20%] my-[1rem] bg-white m-auto `}
      >
        <div>
          <img src={success} alt="some pic" />
        </div>
        <h1>Congratulations</h1>
        <p>You are Checkouted already</p>
        <button onClick={toggleCheckOutModal}>Close</button>
      </div>
    </>
  );
}
