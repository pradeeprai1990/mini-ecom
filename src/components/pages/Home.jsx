import React from 'react'
import CategoryCart from './CategoryCart'
import ProductList from './ProductList'

export default function Home() {
  return (
    <div className='w-[100%] sm:px-[5px] px-[5px]'>
      <div className='max-w-[1170px] mx-auto pt-[100px] grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-between items-center gap-[20px]'>
        <div>
          <h1 className='font-extrabold  lg:text-[50px] sm:text-[40px] text-[30px] lg:leading-[60px] sm:leading-[50px] leading-[40px]'>The experience makes all the difference.</h1>
          <p className='py-[20px]'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
          <div className='grid grid-cols-2 gap-[20px] justify-start'>
            <button className=' bg-[#ef4444] text-white capitalize  border-[2px] text-center rounded-[8px] py-[10px] text-[20px] cursor-pointer hover:bg-[#6674cc] duration-500'>
               get started
            </button>
            <button className='uppercase border-[2px] text-center  rounded-[8px] py-[10px] text-[20px] cursor-pointer'>
               Offers
            </button>
          </div>
        </div>
        <div>
          <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png' />
        </div>
      </div>
       <CategoryCart/>
       
       <ProductList/>

    </div>
  )
}
