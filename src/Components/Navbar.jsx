import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  const currentUser = false;
  const isAdmin = true
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b shadow-sm sticky top-0 z-20 bg-white">
      <div className="container flex justify-between items-center p-4">
        {/* left */}
        <div className="hidden md:flex md:gap-2 md:items-center">
          <span className="text-slate-900 text-xl">EN</span>
          <input type="search" placeholder="Search" />
        </div>

        {/* middle */}
        <div className="text-xl md:text-2xl font-semibold text-slate-950">
          E-BOOK
        </div>

        {/* right */}
        <div className="flex items-center gap-2">
          {currentUser ? (
            <>
              <div className="relative">
                <IoPersonCircle
                  size={28}
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
                {open && (
                  <div className="absolute top-8 -left-20 flex flex-col gap-1 rounded-md border py-4 w-36 bg-white shadow-sm">
                    <span className="cursor-pointer hover:bg-slate-800 hover:text-white py-2 w-full text-center font-semibold">
                      Order
                    </span>
                    <span className="cursor-pointer hover:bg-slate-800 hover:text-white py-2 w-full text-center font-semibold">
                      logout
                    </span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <span className="uppercase text-sm md:text-base text-slate-900">register</span>
              <span className="uppercase text-sm md:text-base text-slate-900">sign in</span>
            </>
          )}
            {/* cart */}
          <div className="relative">
            <CiShoppingCart className="cursor-pointer" size={30} />
            <div className="absolute top-0 left-4 bg-red-600 text-white rounded-full w-4 h-4 flex justify-center items-center">
              0
            </div>
          </div>
          {isAdmin && <span className="ml-3 uppercase">Dashboard</span>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
