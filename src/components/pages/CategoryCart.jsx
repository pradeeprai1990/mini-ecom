import React from 'react'
let Category=[
    {
        id:1,
        image:'https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png',
        title:'women'
    },
    {
        id:2,
        image:'https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png',
        title:'Shoes'
    },
    {
        id:3,
        image:'https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png',
        title:'Accessories'
    }
]
export default function CategoryCart() {
  return (
     <div className='py-[80px] max-w-[100%] grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-[20px]'>
        {
            Category.map((items,index)=>{
                return(
                   <ProdctShow data={items} key={index}/>
                )
            }
            )
        }
    </div>
    
  )
}


function ProdctShow({data}){

    return(
        <>     
    <div className='relative'>
        <img className='w-[100%] lg:h-[110vh] sm:h-[100vh] h-[90vh] ' src={data.image} alt='image'/>
        <button className='absolute bottom-[+2%]  left-[+35%] text-center p-[10px] font-medium text-[20px] border-[2px] hover:bg-[#ffff]  duration-500'>{data.title}</button>
    </div>
    </>
    )
}
