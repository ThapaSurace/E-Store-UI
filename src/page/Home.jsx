import React from 'react'
import CategoryList from '../Components/CategoryList'
import ProductList from '../Components/ProductList'

const Home = () => {
  return (
    <div className='container'>
      <div className='my-10'>
        <CategoryList />
      </div>

      <div className='mb-10'>
        <h1 className='text-2xl font-semibold text-slate-900 mb-6'>Product Lists</h1>
        <ProductList />
      </div>
    </div>
  )
}

export default Home