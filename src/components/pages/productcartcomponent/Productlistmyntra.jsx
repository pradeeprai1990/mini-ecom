import React, { useContext } from 'react'
import { myntradata } from './../../Data/MyntracartData.jsx'
import { cartContext } from '../../../context/MainContext.jsx'
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2/dist/sweetalert2.js'
export default function Productlistmyntra({ product,setSorting }) {
  return (
    <div>
      <div className='relative z-[99999]'>
      <ToastContainer />
      </div>
      <div className='flex justify-end pb-[5px]'>
        <form >
          <select onChange={(e)=>setSorting(e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Sort By : Recommended</option>
            <option value="1">Name : A to Z</option>
            <option value="2">Name : Z to A</option>
            <option value="3">Price : Low to High</option>
            <option value="4">Price : Hight to Low</option>

            <option value="5">Dicounted Price : Low to High</option>
            <option value="6">Dicounted Price : Hight to Low</option>

            <option value="7">Rating : Low to High</option>
            <option value="8">Rating : Hight to Low</option>
          </select>
        </form>
      </div>

      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]'>
        {
          product.map((items, index) => {
            return (
              <ProductCartMyntra data={items} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

function ProductCartMyntra({ data }) {

  let {login,cart,setCart}=useContext(cartContext) //[]

  let {id,image,name,price}=data
  let addtoCart=()=>{
    if(login){
      let cartObj={
        id,
        image,
        name,
        price,
        qty:1
      }

      setCart([...cart,cartObj]) //[cartObj]
      toast.success("Item Added in Cart!");
    }
    else{
      toast.error("Please Login");
    }
      
      //console.log(cartObj)
  }
// let s=[ {id:1,name:'pradeep'},{id:2,name:'pradeep'} ]
  let deleteCart=()=>{ 

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {

        let filterData=cart.filter((items)=>items.id!=id)
        setCart(filterData) 

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

 
  }

  let checkMyProductinCart=cart.filter((items)=> items.id== id)

  console.log(id,checkMyProductinCart)

  return (
    <div className='shadow-lg border-[1px] rounded-[5px]'>
      <img src={data.image} alt='image' />
      <h2 className='p-[5px_10px] font-bold text-[16px]'>{data.name}</h2>
      <p className='p-[5px_10px]'>{data.category_name}</p>

      <div className='flex p-[10px_10px] gap-[10px] items-center'>
        <h3 className='font-bold'>{data.price}</h3>
        {
           checkMyProductinCart.length==1 ?

            <button onClick={deleteCart} className='bg-red-500 p-3'>Delete Cart</button>
            :
            <button onClick={addtoCart} className='bg-green-500 p-3'>Add to Cart</button> 
        }
        
      </div>

    </div>
  )
}


