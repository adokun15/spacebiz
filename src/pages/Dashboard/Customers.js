import Card from "../../components/Card";
import Input from "../../components/Input";

export default function CustomersComponent() {
  return (
    <>
      <Card className="flex justify-between flex-wrap space-y-3 md:space-y-0">
        <h2 className="text-xl fira-sans-medium ">Customer</h2>
        <Input placeholder="Search by Name" />
      </Card>

      <Card className="relative overflow-x-auto">
        <table className="w-full text-gray-500  text-left">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th className="px-6 py-3">Customer Email</th>
              <th className="px-6 py-3">Customer Contact</th>
              <th className="px-6 py-3">Connect</th>
              <th className="px-6 py-3">View Info</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Customer 1
              </th>
              <td className="px-6 py-4">a@gmail.com</td>
              <td className="px-6 py-4">24</td>
              <td className="px-6 py-4">+23491232343434</td>
              <td className="px-6 py-4">Gmail | Whatapp</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Customer 2
              </th>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Customer 3
              </th>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Customer 4
              </th>
              <td className="px-6 py-4">Category 1</td>
              <td className="px-6 py-4">yes</td>
              <td className="px-6 py-4">$43</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b hover:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Customer 5
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
}
