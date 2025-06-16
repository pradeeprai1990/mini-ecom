import React from 'react'
let dataprice = [
    {
        id: 1,
        title: 'Rs. 10 to Rs. 250',
        filterData:[10,250]
    },
    {
        id: 2,
        title: 'Rs. 250 to Rs. 500',
        filterData:[250,500]
    },
    {
        id: 3,
        title: 'Rs. 500 to Rs. 1000',
        filterData:[500,1000]
    },
    {
        id: 4,
        title: 'Rs. 1000 to Above',
        filterData:[1000,1000000]
    }
]
export default function ProductCartPrice({filterObj}) {
    // let {setPriceFilter}=filterObj
    return (
            <div>
                <h2 className='p-[5px_5px] text-[16px] font-bold'>PRICE</h2>

                {
                    dataprice.map((items, index) => {
                        return (
                            <PriceFunction data={items} filterObj={filterObj}  key={index} />
                        )
                    })
                }
            </div>
    )
}

function PriceFunction({ data,filterObj }) {
    let {setPriceFilter}=filterObj
    return (
        <div className='p-[5px]  flex gap-[20px] font-medium'>
            <input type='radio' name='price' onChange={()=>setPriceFilter(data.filterData)} className='rounded-b-full' />
            <h3 className='text-[16px]'>{data.title}</h3>
        </div >
    )
}
