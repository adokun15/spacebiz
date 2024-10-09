//get list of transaction list;
import React from "react";

const TransactionTable = () => {
  return (
    <>
      <table className="w-full text-gray-500  text-left">
        <thead className="text-xs text-gray-500 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Transaction Ref
            </th>
            <th className="px-6 py-3">status</th>
            <th className="px-6 py-3">Amt. Received</th>
            <th className="px-6 py-3">Paid at</th>
            <th className="px-6 py-3">message</th>
            <th className="px-6 py-3">View Item</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              T232134242
            </th>
            <td className="px-6 py-4">pending</td>
            <td className="px-6 py-4">$4040</td>
            <td className="px-6 py-4">04-04-24</td>
            <td className="px-6 py-4">SuccessFul</td>
            <td className="px-6 py-4">view detail</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              T232134242
            </th>
            <td className="px-6 py-4">success</td>
            <td className="px-6 py-4">$40</td>
            <td className="px-6 py-4">04-03-23</td>
            <td className="px-6 py-4">Successful</td>
            <td className="px-6 py-4">view detail</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              T232134242
            </th>
            <td className="px-6 py-4">success</td>
            <td className="px-6 py-4">$40</td>
            <td className="px-6 py-4">04-03-23</td>
            <td className="px-6 py-4">Successful</td>
            <td className="px-6 py-4">view detail</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              T232134242
            </th>
            <td className="px-6 py-4">success</td>
            <td className="px-6 py-4">$40</td>
            <td className="px-6 py-4">04-03-23</td>
            <td className="px-6 py-4">Successful</td>
            <td className="px-6 py-4">view detail</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              T232134242
            </th>
            <td className="px-6 py-4">success</td>
            <td className="px-6 py-4">$40</td>
            <td className="px-6 py-4">04-03-23</td>
            <td className="px-6 py-4">Successful</td>
            <td className="px-6 py-4">view detail</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              T232134242
            </th>
            <td className="px-6 py-4">success</td>
            <td className="px-6 py-4">$40</td>
            <td className="px-6 py-4">04-03-23</td>
            <td className="px-6 py-4">Successful</td>
            <td className="px-6 py-4">view detail</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TransactionTable;
