import React, { createContext, useEffect, useState } from 'react'

export let cartContext=createContext()

export default function MainContext({children}) {
  let [cart,setCart]=useState( localStorage.getItem("CART") ?  JSON.parse(localStorage.getItem("CART")) : []  )   


  let obj={
    cart, //[]
    setCart
  }

  useEffect(()=>{
    localStorage.setItem("CART",JSON.stringify(cart))
  },[cart])  //Add to Cart | Delete Cart | Qry Change

  return (
    <cartContext.Provider value={obj}>
        {children}
    </cartContext.Provider>
  )
}
