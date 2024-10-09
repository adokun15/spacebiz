import Button from "../../components/Button";
import Card from "../../components/Card";

export default function ProductComponent() {
  return (
    <>
      <Card className="flex justify-between">
        <h2 className="text-xl fira-sans-medium t">Products</h2>
        <Button clxName="bg-teal-800 text-white">Create new product</Button>
      </Card>
      <Card className="relative overflow-x-auto">
        <div className="pb-4">
          <label className="sr-only">Search</label>
          <input
            className="block py-2 px-4 outline-none  focus:border-teal-800 focus:ring-teal-800 ring-1 w-80 rounded-lg border border-gray-300 text-sm text-gray-900  bg-gray-100"
            placeholder="Search For Product"
          />
        </div>
        <table className="w-full text-gray-500  text-left">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th className="px-6 py-3">Product Image</th>
              <th className="px-6 py-3">Product Category</th>
              <th className="px-6 py-3">Available</th>
              <th className="px-6 py-3">Product Price</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Product 1
              </th>
              <td className="px-6 py-4">Pic 2</td>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Product 2
              </th>
              <td className="px-6 py-4">Pic 2</td>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Product 3
              </th>
              <td className="px-6 py-4">Pic 3</td>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Product 4
              </th>
              <td className="px-6 py-4">Pic 4</td>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Product 5
              </th>
              <td className="px-6 py-4">Pic 5</td>
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
}
