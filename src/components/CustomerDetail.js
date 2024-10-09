import React from "react";
import { Link } from "react-router-dom";
//import CustomerInfo from "./CustomerInfo";
import CustomerTransactions from "./CustomerTransactions";

const CustomerDetail = () => {
  return (
    <>
      <div className="flex gap-3 flex-wrap">
        <Link className="underline">Customers </Link>
        {">"}
        <Link className="underline">Customer Information</Link>
        {">"}
        <Link>Transactions</Link>
      </div>
      {/*

<CustomerInfo />
*/}
      <CustomerTransactions />
    </>
  );
};

export default CustomerDetail;
