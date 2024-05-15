import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const currentUser = false;
  return (
    <div className="border-b border-slate-300/65 shadow-sm sticky top-0 z-20 bg-white">
      <div className="container flex justify-between items-center p-4">

        {/* left */}
        <div className="hidden md:flex md:gap-2 md:items-center">
          <span className="text-slate-900 text-xl">EN</span>
          <input
            type="search"
            placeholder="Search"
          />
        </div>

        {/* middle */}
        <div className="text-xl md:text-2xl font-bold">Mero Store.</div>

        {/* left */}
        <div className="flex items-center gap-2">
          {currentUser ? (
            <span className="uppercase text-sm md:text-base">logout</span>
          ) : (
            <div className="flex gap-4 items-center">
              <span className="uppercase text-sm md:text-base">register</span>
              <span className="uppercase text-sm md:text-base">sign in</span>
            </div>
          )}

          <div className="relative">
            <CiShoppingCart className="cursor-pointer" size={30} />
            <div className="absolute top-0 left-4 bg-red-600 text-white rounded-full w-4 h-4 flex justify-center items-center">
              0
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
