import React from 'react'
import { FaLeftLong } from "react-icons/fa6";
import { Link } from 'react-router';
export default function Cart() {
  return (
    <div className='max-w-[1320px] mx-auto  pt-[100px]'>
      <div className='grid lg:grid-cols-[70%_25%] sm:grid-cols-2 grid-cols-1 gap-[20px] justify-between'>
         <div className=''>

          <div className='flex justify-between p-[0px_5px_15px_5px]'>
              <h1 className='font-bold text-[30px]'>Shoping Cart</h1>
              <h1 className='font-bold text-[30px]'>0 Items</h1>
         </div>

         <hr/>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-between gap-[20px] py-[20px]'>
            <div className=''> 
             <h3 className='uppercase'>Price Details</h3>

             <h3 className='py-[30px] font-semibold text-[16px] '><Link to='/' className='flex items-center gap-[5px] text-blue-500'><FaLeftLong /> Continue Shoping</Link></h3>
            </div>
            <div className='flex justify-between uppercase'>
               <div>
                 <h3>Quantity</h3>
               </div>
               <div>
                 <h3>Price</h3>
               </div>
               <div>
                 <h3>Total</h3>
               </div>
            </div>

          </div>

         </div >

          <div className='sm:px-[5px] px-[10px]'>
            <h1 className='font-bold text-[30px] p-[0px_5px_15px_5px] text-center '>Order Summary</h1>
            <hr/>
            <div className=''>
                <div className='flex justify-between py-[20px] font-bold'>
                   <h2>Items 0</h2>
                   <h2>Rs. 0</h2>
                </div>
                <div>
                  <h2 className='uppercase pb-[10px] font-bold'>Shipping</h2>
                  <select className='w-full border-none py-[10px]'>
                      <option value="volvo">Standerd Shipping - Rs-100</option>
                  </select>

                   <div className='py-[20px]'>
                    <h2  className='uppercase pb-[10px] font-bold'>Promo code</h2>
                    <input type='text'  placeholder='Enter Your Code' className='w-full px-[10px] py-[5px]' />

                    <button className='uppercase p-[10px_20px_10px_20px] text-white text-[18px] bg-red-500 my-[20px] cursor-pointer'>Apply</button>

                   </div>

                   <hr/>

                   <div className='py-[20px] '>
                    <div className='flex justify-between'>
                       <h2 className='uppercase'>Total cost</h2>
                       <h2 className='uppercase'>Rs. 0</h2>
                    </div>
                    <div className='my-[20px]'>
                      <button className='w-full bg-[#6366f1] text-white py-[10px] text-[18px] cursor-pointer'>Check Out</button>
                    </div>

                   </div>

                </div>
            </div>
         </div>
      </div>
    </div>
  )
}
