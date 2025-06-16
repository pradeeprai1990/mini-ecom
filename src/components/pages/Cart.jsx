import React, { useContext } from 'react'
import { FaLeftLong } from "react-icons/fa6";
import { Link } from 'react-router';
import { cartContext } from '../../context/MainContext';
import Swal from 'sweetalert2/dist/sweetalert2.js'
export default function Cart() {
  let { cart, setCart } = useContext(cartContext)  //cart[]

  let finalTotal = cart.reduce(((total, items) => total + (items.qty * items.price)), 0)
  console.log(finalTotal)

  return (
    <div className='max-w-[1320px] mx-auto  pt-[100px]'>
      <div className='grid lg:grid-cols-[70%_25%] sm:grid-cols-2 grid-cols-1 gap-[20px] justify-between'>
        <div className=''>

          <div className='flex justify-between p-[0px_5px_15px_5px]'>
            <h1 className='font-bold text-[30px]'>Shoping Cart</h1>
            <h1 className='font-bold text-[30px]'>{cart.length} Items</h1>
          </div>

          <hr />
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-between gap-[20px] py-[20px]'>
            <div className=''>
              <h3 className='uppercase'>Price Details</h3>
            </div>
            <div className='flex justify-between uppercase'>
              <div>
                <h3>Quantity</h3>
              </div>
              <div>
                <h3>Price</h3>
              </div>
              <div>
                <h3>Total</h3>
              </div>
            </div>

          </div>

          {cart.length >= 1
            ?
            cart.map((items, index) => {
              return (
                <CartRow items={items} key={index} />
              )
            })
            :
            <div> No Product Found in Cart </div>

          }



        </div >

        <div className='sm:px-[5px] px-[10px]'>
          <h1 className='font-bold text-[30px] p-[0px_5px_15px_5px] text-center '>Order Summary</h1>
          <hr />
          <div className=''>
            <div className='flex justify-between py-[20px] font-bold'>
              <h2>Items {cart.length}</h2>
              <h2>Rs. {finalTotal}</h2>
            </div>
            <div>
              <h2 className='uppercase pb-[10px] font-bold'>Shipping</h2>
              <select className='w-full border-none py-[10px]'>
                <option value="volvo">Standerd Shipping - Rs-100</option>
              </select>

              <div className='py-[20px]'>
                <h2 className='uppercase pb-[10px] font-bold'>Promo code</h2>
                <input type='text' placeholder='Enter Your Code' className='w-full px-[10px] py-[5px]' />

                <button className='uppercase p-[10px_20px_10px_20px] text-white text-[18px] bg-red-500 my-[20px] cursor-pointer'>Apply</button>

              </div>

              <hr />

              <div className='py-[20px] '>
                <div className='flex justify-between'>
                  <h2 className='uppercase'>Total cost</h2>
                  <h2 className='uppercase'>Rs. {finalTotal + 100}</h2>
                </div>
                <div className='my-[20px]'>
                  <button className='w-full bg-[#6366f1] text-white py-[10px] text-[18px] cursor-pointer'>Check Out</button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function CartRow({ items }) {
  let { cart, setCart } = useContext(cartContext)
  let { id } = items
  let deleteCart = () => {

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

        let filterData = cart.filter((items) => items.id != id)
        setCart(filterData)

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });


  }

  let changeQty=(e)=>{
    let qty=e.target.value;  //2
    // console.log(qty) //2
    // console.log(cart) //cart Update
    // console.log(id) //condition Id 

    let finalData=cart.filter((items)=>{
       
        if(items.id==id){
          items.qty=qty
        }
        return items
    })

    setCart(finalData)


  }

  return (
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-between gap-[20px] py-[20px]'>
      <div className=''>
        <h3 className='uppercase'>
          <button className='bg-red-500 p-2' onClick={deleteCart}>Delete</button>
          <img src={items.image} width={50} alt="" />
        {id}  {items.name}
        </h3>
      </div>
      <div className='flex justify-between uppercase'>
        <div>
           <input min={1} max={10} className='border-2 w-[100px] text-center p-2 text-3xl' type="number" value={items.qty} onChange={changeQty}  /> 
        </div>
        <div>
          <h3>Rs {items.price}</h3>
        </div>
        <div>
          <h3>Rs {items.qty * items.price} </h3>
        </div>
      </div>

    </div>
  )
}