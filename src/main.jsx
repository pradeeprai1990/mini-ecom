import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import Register from './components/pages/Register'
import Layout from './components/common/Layout'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProductList from './components/pages/ProductList'
import Login from './components/pages/Login'
import ProductCart from './components/pages/ProductCart'
import About from './components/pages/About'
import MainContext from './context/MainContext'
import 'sweetalert2/src/sweetalert2.scss' //scss

let rootEelement=document.getElementById('root')
createRoot(rootEelement).render(  
  
   <MainContext>
      <BrowserRouter>
         <Routes>
            <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/product-list' element={<ProductCart/>}/>
            <Route path='/cart-items' element={<Cart/>}/>
            <Route path='/register-page' element={<Register/>}/>
            <Route path='/login-page' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>

            </Route>
         </Routes>
      </BrowserRouter>
   </MainContext>  
)
