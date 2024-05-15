import React from 'react'
import ProductList from '../Components/ProductList'

const Products = () => {
  return (
    <div className="container px-6 py-10">
    <h1 className="text-2xl font-semibold text-slate-900 mt-4">Dresses</h1>
    {/* filter */}
    <div>
      {/* left */}
      <div className="py-6 flex flex-col gap-6 md:flex-row md:justify-between items-center mb-10 border-b border-slate-400/85">
        <div>
          <span className="text-lg text-slate-800 font-semibold mr-2">
            Filter Products:
          </span>
          <select name="language" className="border border-slate-400/85 p-2 rounded-md mr-2">
            <option selected disabled>
              Language
            </option>
            <option>Nepali</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
       
       {/* right */}
        <div>
          <span className="text-lg text-slate-800 font-semibold mr-2">
            Sort Products:
          </span>
          <select name="price" className="border border-slate-400/85 p-2 rounded-md mr-2">
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
    </div>
    {/* productlist */}
    <div>
      <ProductList />
    </div>
  </div>
  )
}

export default Products