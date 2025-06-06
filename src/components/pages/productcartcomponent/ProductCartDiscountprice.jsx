import React from 'react'
let dicountprice = [
    {
        id: 1,
        title: '5% and above'
    },
    {
        id: 2,
        title: '10% and above'
    },
    {
        id: 3,
        title: '15% and above'
    },
    {
        id: 4,
        title: '20% and above'
    }
]
export default function ProductCartDiscountprice() {
    return (
        <div>
            <h2 className='p-[5px_5px] text-[16px] font-bold'>DISCOUNT RANGE</h2>

            {
                dicountprice.map((items, index) => {
                    return (
                        <DiscountpriceFunction data={items} key={index} />
                    )
                })
            }
        </div>
    )
}

function DiscountpriceFunction({ data }) {
    return (
        <div className='p-[5px]  flex gap-[20px] font-medium'>
            <input type='radio' className='rounded-[50%]' />
            <h3 className='text-[16px]'>{data.title}</h3>
        </div >
    )
}
