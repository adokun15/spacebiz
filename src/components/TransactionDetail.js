//Expects A pARAMS:
import React from "react";
import Button from "./Button";
import Card from "./Card";

const TransactionDetail = () => {
  return (
    <>
      <div className="my-4 flex items-center gap-4">
        <Button clxName="bg-teal-700 text-white">Back</Button>
        <p>Transaction</p>
      </div>
      <Card>
        <div className="md:grid md:grid-cols-3 space-y-4 md:space-y-0 gap-5">
          <article>
            <h4 className="text-2xl text-teal-700 fira-sans-medium">
              Transaction Id
            </h4>
            <p>T323423423</p>
          </article>
          <article>
            <h4 className="text-2xl text-teal-700 fira-sans-medium">
              Terminal Message
            </h4>
            <p>Succesful</p>
          </article>
          <article>
            <h4 className="text-2xl text-teal-700 fira-sans-medium">
              Transaction Amount
            </h4>
            <p>$2,323</p>
          </article>
          <article>
            <h4 className="text-2xl text-teal-700 fira-sans-medium">From</h4>
            <p>a@gmail.com</p>
          </article>
          <article>
            <h4 className="text-2xl text-teal-700 fira-sans-medium">
              Bank Debit
            </h4>
            <p>Zenith Bank</p>
          </article>
          <article>
            <h4 className="text-2xl text-teal-700 fira-sans-medium">
              Paid At{" "}
            </h4>
            <p>23-04-24</p>
          </article>
        </div>
        <div className="my-4 flex gap-4">
          <Button clxName="bg-gray-100 text-teal-800">Report an Issue</Button>
          <Button clxName="bg-red-500 text-white">Request Refund</Button>
        </div>
      </Card>
    </>
  );
};

export default TransactionDetail;
