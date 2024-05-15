import React from 'react'
import { products } from '../data'

const ProductList = () => {
  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
            products.map(product=>(
                <div className='rounded-md' key={product.id}>
                    <img src={product.img} alt={product.title} className='w-full h-64 object-cover object-center rounded-md shadow-sm' />
                    <div className='mt-4 flex flex-col gap-1'>
                        <h1 className='text text-slate-900 font-semibold'>
                            {
                                product.title.length > 20 ? product.title.substring(0,20) + '....' : product.title
                            }
                        </h1>
                        <span className="font-extralight text-xl">${product.price}</span>
                        <button  className='bg-slate-900 hover:bg-slate-700'>Add to cart</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProductList