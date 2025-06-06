import React from 'react'
import { CiStar } from "react-icons/ci";

import {dcartp} from './../Data/DifferentCartProduct'
export default function ProductList() {
  return (
    <div className='max-w-[1320px] mx-auto'>
        <div className='shadow-lg'>
        <h1 className='text-center font-extrabold text-[60px] '>Get difference Product</h1>
        </div>

        <div className='grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-[15px] py-[100px]'>
            {
              dcartp.map((items,index)=>{
                return(
                  <DiffProductList data={items} key={index}/>
                )
              })
            }
        </div>
        

    </div>
  )
}

function DiffProductList({data}){
    return (
            <div className='lg:shadow-[#cccc] border-[1px] rounded-[8px]'>
               <img   src={data.image} alt='image'/>
               <div className='px-2'>
                 <h3 className=' font-bold text-[18px] py-[10px]'>{data.title}</h3>
                 <p>{data.price}</p>
                 <div className='grid grid-cols-3 justify-between my-[5px]'>
                  <div>
                    <span className='flex '><CiStar className='text-[#eab308]'/><CiStar className='text-[#eab308]'/><CiStar className='text-[#eab308]'/><CiStar className='text-[#eab308]'/><CiStar className='text-[#eab308]'/> </span>
                  </div>
                  <div>
                     <p>{data.rating}</p>
                  </div>
                  <div>
                    <button className='bg-[#2563eb] text-white py-[6px] px-[10px] border-2 cursor-pointer rounded-[8px] text-[12px]'>{data.btntext}</button>
                  </div>
                 </div>
               </div>  
            </div>

    )
}
