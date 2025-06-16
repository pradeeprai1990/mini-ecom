import React from 'react'
import { categorydata } from './../../Data/CategoryData.jsx'
import { datasecond } from './../../Data/CategoryDataSecond.jsx'
import ProductCartPrice from './ProductCartPrice.jsx'
import ProductCartDiscountprice from './ProductCartDiscountprice.jsx'
import ProductCartRating from './ProductCartRating.jsx'

export default function Leftscroll({category,brands,filterObj}) {
   
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
                                <LeftscrollFirst filterObj={filterObj}  data={itmes} key={index} />
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
                                <LeftscrollSecond  filterObj={filterObj}  datasnd={itmes} key={index} />
                            )
                        })
                    }
                </from>
            </div>
            <div className='border-[1px] p-[10px_5px] h-[200px] '>
                   <ProductCartPrice filterObj={filterObj}/>
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
function LeftscrollFirst({ data,filterObj }) {
     let {categoryFilter,setCategoryFilter}=filterObj

     let getCheckValue=(event)=>{
        if(event.target.checked && !categoryFilter.includes(event.target.value)){
            
            setCategoryFilter([...categoryFilter,event.target.value])
        }   
        else{
            //["beauty","furniture"]
            let finalAns= categoryFilter.filter((item)=>item!=event.target.value)
            setCategoryFilter(finalAns)
        }
     }
    return (
        <div className='flex gap-[20px] font-medium text-[16px] pt-[10px]'>
            <input onChange={getCheckValue} type="checkbox" name="checbox" value={data.slug} />
            <label>{data.name}</label>
        </div>
    )
}
function LeftscrollSecond({ datasnd,filterObj }) {
    let { brandFilter,setBrandFilter}=filterObj
    let getCheckValue=(event)=>{
        if(event.target.checked && !brandFilter.includes(event.target.value)){
            
            setBrandFilter([...brandFilter,event.target.value])
        }   
        else{
            //["beauty","furniture"]
            let finalAns= brandFilter.filter((item)=>item!=event.target.value)
            setBrandFilter(finalAns)
        }
     }

    return (
        <div className='flex gap-[20px] font-medium text-[16px] pt-[10px]'>
            <input type="checkbox" onChange={getCheckValue} name="checbox" value={datasnd.slug} />
            <label>{datasnd.name}</label>
        </div>
    )
}

