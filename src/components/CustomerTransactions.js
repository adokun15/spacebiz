import React from "react";
import TransactionTable from "./TransactionTable";
import Card from "./Card";
//Get CUSTOMER tRANSACTION lIST
const CustomerTransactions = () => {
  return (
    <Card className="relative overflow-x-scroll">
      <TransactionTable />
    </Card>
  );
};

export default CustomerTransactions;
