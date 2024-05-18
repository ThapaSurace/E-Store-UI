import React from "react";
import { products } from "../data";
import { BiCart } from "react-icons/bi";
import { FaExpandArrowsAlt } from "react-icons/fa";

const ProductList = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 hover:shadow-md"
        >
          {/* IMG AND ACTION */}
          <div className="aspect-square rounded-xl relative">
            <img
              src={product.img}
              alt={product.title}
              className="w-full aspect-square object-cover rounded-md shadow"
            />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="flex gap-x-3 justify-center absolute bottom-5 w-full px-6">
                <BiCart className="text-4xl bg-white p-1 rounded-full hover:scale-110 transition duration-300 ease-in-out" />
                <FaExpandArrowsAlt className="text-4xl bg-white p-2 rounded-full hover:scale-110 transition duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          {/* INFO */}
          <div>
            <h1 className="font-semibold text-lg">
              {product.title.length > 20
                ? product.title.substring(0, 20) + "..."
                : product.title}
            </h1>
            <p className="text-sm text-gray-500">
              by <span>{product.author}</span>
            </p>
            <p className="font-semibold mt-3">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
