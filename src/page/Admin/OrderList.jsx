import React from "react";

const Orderlist = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto mt-10">
      <h1 className="text-center text-2xl font-semibold">Order Lists</h1>
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Order ID
                </th>
                <th
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Payment ID
                </th>
                <th
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  User ID
                </th>
                <th
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Amount
                </th>
                <th
                  className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  123
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  2134234234
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  234324
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  $100
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  pending
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orderlist;
