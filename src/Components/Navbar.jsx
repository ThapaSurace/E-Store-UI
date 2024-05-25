import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const currentUser = true;
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

        {/* left */}
        <div className="flex items-center gap-2">
          {currentUser ? (
            <>
              <div className="relative">
                <img
                  src="https://cdn.dribbble.com/users/6229959/screenshots/14421439/media/1d3513f47589f4aa40ac6d3064d436bd.png?resize=400x300&vertical=center"
                  alt="user"
                  className="w-6 h-6 object-cover object-center rounded-full ring-2 ring-slate-700 cursor-pointer"
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
            <div className="flex gap-4 items-center">
              <span className="uppercase text-sm md:text-base">register</span>
              <span className="uppercase text-sm md:text-base">sign in</span>
            </div>
          )}
            {/* cart */}
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
