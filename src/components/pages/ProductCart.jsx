import React, { useEffect, useState } from 'react'
import Productlistmyntra from './productcartcomponent/Productlistmyntra'
import Leftscroll from './productcartcomponent/Leftscroll'
import 'react-responsive-pagination/themes/classic-light-dark.css';
import ResponsivePagination from 'react-responsive-pagination';
import axios from 'axios'
import LoadingData from '../common/LoadingData';
export default function ProductCart() {

  let [category, setCategory] = useState([])
  let [brands, setBrands] = useState([])
  let [product, setProduct] = useState([])

  //Filter 
  //Sort
  let [sorting, setSorting] = useState(1) //parent
  let [categoryFilter, setCategoryFilter] = useState([]) //parent
  let [brandFilter, setBrandFilter] = useState([]) //parent
  let [priceFilter, setPriceFilter] = useState([null, null]) //parent
  let [currentPage, setCurrentpage] = useState(1)
  let [totalPage, setTotalPages] = useState(0) //14
  let [loadingStatus, setLoadingStatus] = useState(true)
  let filterObj = {
    categoryFilter,
    setCategoryFilter,
    brandFilter,
    setBrandFilter,
    setPriceFilter
  }


  let getCategory = () => {
    axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
      .then((res) => res.data)
      .then((finalRes) => {
        setCategory(finalRes.data)
      })
  }

  let getBrands = () => {
    axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
      .then((res) => res.data)
      .then((finalRes) => {
        setBrands(finalRes.data)
      })
  }


  let getProducts = () => {
    setLoadingStatus(true)
    axios.get(`https://wscubetech.co/ecommerce-api/products.php`, {
      params: {
        sorting,
        categories: categoryFilter.join(","), //Array to String beauty,fragrances,furniture,
        brands: brandFilter.join(","),
        price_from: priceFilter[0],
        price_to: priceFilter[1],
        page: currentPage,
        limit: 12
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        setLoadingStatus(false)
        setProduct(finalRes.data)
        setTotalPages(finalRes.total_pages) //14
      })
  }

  useEffect(() => {
    getCategory()
    getBrands()
  }, [])

  useEffect(() => {
    getProducts()
  }, [sorting, categoryFilter, brandFilter, priceFilter, currentPage])

  return (
    <div className='mt-[20px]'>

      <h1 className='p-[10px_20px] font-bold text-[18px]'>Home/Clothing/Men T-shirts</h1>
      <div className='flex p-[10px_20px]'>
        <h2 className='font-bold text-[17px]'>Men T-shirts</h2>
        <p className='text-[17px] text-[#c9ccc4]'>-126446 items</p>
      </div>


      <div className='grid lg:grid-cols-[18%_auto] sm:grid-cols-[20%_auto] grid-cols-1 gap-[10px] '>
        <div className='sm:px[0px] px-[10px]'>
          <Leftscroll category={category} brands={brands} filterObj={filterObj} />
        </div>

        <div className='sm:px[0px] px-[10px]'>
          {
            loadingStatus ?
              <LoadingData/>
              :
              <Productlistmyntra product={product} setSorting={setSorting} />

          }

          <div className='my-6'>
            <ResponsivePagination
              current={currentPage}
              total={totalPage}
              onPageChange={setCurrentpage}
            />
          </div>
        </div>
      </div>


    </div>
  )
}




