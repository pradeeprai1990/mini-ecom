import React, { useContext, useEffect } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../../config/fireBaseConfig';
import { cartContext } from '../../context/MainContext';
import { useNavigate } from 'react-router';


export default function Login() {
 let navigate =useNavigate()
 let {login,setLogin} =useContext(cartContext)
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  let googleLogin=()=>{
    
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setLogin(user)
        console.log(token)
        console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }


  useEffect(()=>{
    if(login){
      navigate('/')
    }
  },[login])
  return (
    <div className='max-w-[800px]  border-2  mx-auto mt-[50px] rounded-[8px] '>
      <div className='shadow-lg  grid lg:grid-cols-[40%_auto] sm:grid-cols-1 grid-cols-1'>

        <div className='bg-[#3b82f6] text-center p-[50px_20px] '>
          <h1 className='font-bold text-[30px]  text-white'>K-WD</h1>
          <p className='py-[20px] text-[16px] text-[#d1d5db]'>With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p>
          <h3 className='text-white py-[10px]'>Don't have an account?</h3>
          <h4 className='text-white underline'>Get Started!</h4>
          <p className='pt-[50px] text-[15px] text-[#d1d5db] underline'>Read our terms and conditions</p>
        </div>

        <div className='p-[50px_20px]'>
          <h1 className='text-[30px] font-bold '>Account Login</h1>
          <form className='' >
            <div className='py-[10px]'>
              <label className='text-[15px] text-[#6b7290]  font-bold'>Email address</label>
              <input className='w-full p-[5px] border-[1px] rounded-[5px] ' type='text' placeholder='xyz@gmail.com' />
            </div>

            <div className='py-[10px]'>
              <label className='text-[15px] text-[#6b7290]  font-bold '>Password</label>

              <input className='w-full p-[5px] border-[1px] rounded-[5px] ' type='password' placeholder='xyz@gmail.com' />
            </div>

            <div className='flex gap-[20px] py-[10px]'>
              <input className=' p-[5px] ' type='checkbox' />
              <label className='text-[15px] text-[#6b7290]  font-bold '>Remember me</label>
            </div>

          </form>

          <button className='w-full py-[10px] text-white text-[17px] my-[10px] bg-red-400 hover:bg-red-300 rounded-[8px] cursor-pointer'>Login</button>

          <h3 className='text-center font-medium py-[10px]'>or login with</h3>

          <div>
            <button onClick={googleLogin} className='w-full py-[8px]  text-[17px] my-[10px]  border-2  rounded-[8px] cursor-pointer flex items-center gap-[10px] justify-center duration-300 hover:bg-black hover:text-white'><FaGoogle  /><h3>Login with google</h3></button>
           
           
            <button className='w-full py-[8px] text-[17px] my-[10px] border-2 rounded-[8px] cursor-pointer  flex items-center gap-[10px] justify-center duration-300 hover:bg-[#548cf6] hover:text-white'><FaFacebookF /><h3>Login with facebook</h3></button>
          </div>

        </div>

      </div>
    </div>

  )
}
