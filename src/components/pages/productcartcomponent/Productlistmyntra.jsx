import React from 'react'
import { myntradata } from './../../Data/MyntracartData.jsx'

export default function Productlistmyntra({ product }) {
  return (
    <div>
      <div className='flex justify-end pb-[5px]'>
        <form >
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Sort By : Recommended</option>
            <option value=" ">Name : A to Z</option>
            <option value=" ">Name : Z to A</option>
            <option value=" ">Price : Low to High</option>
            <option value=" ">Price : Hight to Low</option>

            <option value=" ">Dicounted Price : Low to High</option>
            <option value=" ">Dicounted Price : Hight to Low</option>

            <option value=" ">Rating : Low to High</option>
            <option value=" ">Rating : Hight to Low</option>
          </select>
        </form>
      </div>

      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]'>
        {
          product.map((items, index) => {
            return (
              <ProductCartMyntra data={items} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

function ProductCartMyntra({ data }) {
  return (
    <div className='shadow-lg border-[1px] rounded-[5px]'>
      <img src={data.image} alt='image' />
      <h2 className='p-[5px_10px] font-bold text-[16px]'>{data.name}</h2>
      <p className='p-[5px_10px]'>{data.category_name}</p>

      <div className='flex p-[10px_10px] gap-[10px] items-center'>
        <h3 className='font-bold'>{data.price}</h3>

      </div>

    </div>
  )
}


