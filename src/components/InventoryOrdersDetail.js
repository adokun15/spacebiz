import React from "react";
import Card from "./Card";

const InventoryOrdersDetail = () => {
  return (
    <>
      <Card className="relative overflow-x-auto">
        <table className="w-full text-gray-500  text-left">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th className="px-6 py-3">Customer Number</th>
              <th className="px-6 py-3">Price(stock)</th>
              <th className="px-6 py-3">Paid Date</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Akin
              </th>
              <td className="px-6 py-4">342343242434</td>
              <td className="px-6 py-4">$34</td>
              <td className="px-6 py-4">23-04-24</td>
              <td className="px-6 py-4">View Transaction</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Order 2
              </th>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Order 3
              </th>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Order 4
              </th>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Order 5
              </th>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default InventoryOrdersDetail;
