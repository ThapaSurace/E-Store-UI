import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const UserList = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto mt-10">
      <h1 className="text-center text-2xl font-semibold mb-4 text-slate-900">
        User Lists
      </h1>
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th scope="col">User Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-100">
                <td>123</td>
                <td>user.username</td>
                <td>user.email</td>
                <td>aactive</td>
                <td>
                  <MdOutlineDeleteOutline
                    size={25}
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
