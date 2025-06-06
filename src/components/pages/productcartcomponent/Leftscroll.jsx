import React from 'react'
import { categorydata } from './../../Data/CategoryData.jsx'
import { datasecond } from './../../Data/CategoryDataSecond.jsx'
import ProductCartPrice from './ProductCartPrice.jsx'
import ProductCartDiscountprice from './ProductCartDiscountprice.jsx'
import ProductCartRating from './ProductCartRating.jsx'

export default function Leftscroll({category,brands}) {
    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='uppercase font-semibold text-[16px]'>filters</h2>
                <h2 className='uppercase font-semibold text-[16px] text-[#ff3f6c]'>clear all</h2>
            </div>
            <div className='border-[1px] p-[10px_5px] h-[250px] overflow-y-scroll   [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>

                <h2 className='uppercase text-[16px] font-semibold '>categories</h2>

                <from>
                    {
                        category.map((itmes, index) => {
                            return (
                                <LeftscrollFirst data={itmes} key={index} />
                            )
                        })
                    }
                </from>
            </div>
            <div className='border-[1px] p-[10px_5px] h-[250px] overflow-y-scroll   [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-gray-300
                            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
                                
                <h2 className='uppercase text-[16px] font-semibold '>brand</h2>
                <from>
                    {
                        brands.map((itmes, index) => {
                            return (
                                <LeftscrollSecond datasnd={itmes} key={index} />
                            )
                        })
                    }
                </from>
            </div>
            <div className='border-[1px] p-[10px_5px] h-[200px] '>
                   <ProductCartPrice/>
            </div>
            <div className='border-[1px] p-[10px_5px] h-[200px] '>
                <ProductCartDiscountprice/>
            </div>
            <div className='border-[1px] p-[10px_5px] h-[200px] '>
                <ProductCartRating/>
            </div>



        </div>

    )
}
function LeftscrollFirst({ data }) {
    return (
        <div className='flex gap-[20px] font-medium text-[16px] pt-[10px]'>
            <input type="checkbox" name="checbox" value=" " />
            <label>{data.name}</label>
        </div>
    )
}
function LeftscrollSecond({ datasnd }) {
    return (
        <div className='flex gap-[20px] font-medium text-[16px] pt-[10px]'>
            <input type="checkbox" name="checbox" value=" " />
            <label>{datasnd.name}</label>
        </div>
    )
}

