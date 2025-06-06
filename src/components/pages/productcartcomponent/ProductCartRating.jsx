import React from 'react'
let ratingprice = [
    {
        id: 1,
        title: '4★ & above'
    },
    {
        id: 2,
        title: '3★ & above'
    },
    {
        id: 3,
        title: '2★ & above'
    },
    {
        id: 4,
        title: '1★ & above'
    }
]

export default function ProductCartRating() {
    return (
        <div>
            <h2 className='p-[5px_5px] text-[16px] font-bold'>DISCOUNT RANGE</h2>

            {
                ratingprice.map((items, index) => {
                    return (
                        <RatingFunction data={items} key={index} />
                    )
                })
            }
        </div>
    )
}
function RatingFunction({ data }) {
    return (
        <div className='p-[5px]  flex gap-[20px] font-medium'>
            <input type='radio' className='rounded-[50%]' />
            <h3 className='text-[16px]'>{data.title}</h3>
        </div >
    )
}