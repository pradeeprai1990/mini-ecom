import React, { useEffect, useState } from 'react'
import Productlistmyntra from './productcartcomponent/Productlistmyntra'
import Leftscroll from './productcartcomponent/Leftscroll'
import axios from 'axios'
export default function ProductCart() {
 
   let [category,setCategory]=useState([])
   let [brands,setBrands]=useState([])
   let [product,setProduct]=useState([])
  let getCategory=()=>{
    axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
    .then((res)=>res.data)
    .then((finalRes)=>{
        setCategory(finalRes.data)
    })
  }

  let getBrands=()=>{
    axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
    .then((res)=>res.data)
    .then((finalRes)=>{
      setBrands(finalRes.data)
    })
  }


  let getProducts=()=>{
      axios.get(`https://wscubetech.co/ecommerce-api/products.php`)
      .then((res)=>res.data)
      .then((finalRes)=>{
        setProduct(finalRes.data)
      })
  }

  useEffect(()=>{
    getCategory()
    getBrands()
  },[])

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div className='mt-[20px]'>

      <h1 className='p-[10px_20px] font-bold text-[18px]'>Home/Clothing/Men T-shirts</h1>
       <div className='flex p-[10px_20px]'>
        <h2 className='font-bold text-[17px]'>Men T-shirts</h2>
        <p className='text-[17px] text-[#c9ccc4]'>-126446 items</p>
       </div>
        

      <div className='grid lg:grid-cols-[18%_auto] sm:grid-cols-[20%_auto] grid-cols-1 gap-[10px] '>
        <div className='sm:px[0px] px-[10px]'>
          <Leftscroll category={category} brands={brands}/>
        </div>

        <div className='sm:px[0px] px-[10px]'>
          <Productlistmyntra product={product}/>
        </div>
      </div> 
         

    </div>
  )
}




