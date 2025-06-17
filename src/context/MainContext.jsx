import React, { createContext, useEffect, useState } from 'react'

export let cartContext=createContext()

export default function MainContext({children}) {
  let [cart,setCart]=useState( localStorage.getItem("CART") ?  JSON.parse(localStorage.getItem("CART")) : []  )   
  let [login,setLogin]=useState( localStorage.getItem("USER") ?  JSON.parse(localStorage.getItem("USER")) : null )   


  let obj={
    cart, //[]
    setCart,
    login,
    setLogin
  }

  useEffect(()=>{
    localStorage.setItem("CART",JSON.stringify(cart))
  },[cart])  //Add to Cart | Delete Cart | Qry Change

  useEffect(()=>{
    localStorage.setItem("USER",JSON.stringify(login))
  },[login])  //Add to Cart | Delete Cart | Qry Change

  return (
    <cartContext.Provider value={obj}>
        {children}
    </cartContext.Provider>
  )
}
