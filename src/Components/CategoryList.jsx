import React from "react";
import { categories } from "../data";

const CategoryList = () => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {categories.map((cat) => (
        <div key={cat.id} className="h-[60vh] rounded-md shadow-md hover:shadow-md relative group">
          <img
            src={cat.img}
            alt={cat.title}
            className="w-full h-full object-cover object-center rounded-md"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 rounded-md"></div>
          <div className="absolute top-0 left-0 text-white w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-bold">{cat.title}</span>
              <button className="bg-teal-600 hover:bg-teal-500">Explore</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
