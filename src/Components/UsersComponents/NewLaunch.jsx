import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userGetAllTrendingProductAPI } from '../../axios/allAPI/userAPI'
import { ToastContainer,toast } from 'react-toastify'
import { BASE_URL } from '../../axios/baseURL'


function NewLaunch() {

         const [trendingProductDataFromDB,setTrendingProductDataFromDB]=useState([])
         const [imageCount,setImageCount]=useState(0)

        const getAllTrendingProduct=async()=>{
            const result=await userGetAllTrendingProductAPI()
            if(result.status===200){
                // console.log("all data from ADminProduct.jsx",result.data)
                setTrendingProductDataFromDB(result.data)
            }else{
                 toast.warning(result.response.data)
            }

        }
    const incrementImageCount=()=>{
        if(imageCount>1){
            document.getElementById("incrementImageCount").classList.add("dissabled")
        }else{

            setImageCount(prev=>prev+1)
        }
    }

    const decrementImageCount=()=>{

        if(imageCount==0){
            document.getElementById("decrementImageCount").classList.add("dissabled")
        }else{
            document.getElementById("decrementImageCount").classList.remove("dissabled")
            setImageCount(prev=>prev-1)
        }

    }

        useEffect(()=>{
             getAllTrendingProduct()
        },[])

        console.log("newwwwwwwwwwwww Launch product",trendingProductDataFromDB)
      
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='w-full h-28 mt-16 lg:mt-10  text-slate-40 font-Lobster text-9xl flex  justify-center items-center' > NeW Launch </div>

           <div className='relative mt-24 lg:mt-8 w-full h-[450px] '> 
           <i id='decrementImageCount' onClick={decrementImageCount} class="absolute top-[50%] text-6xl text-orange-200 left-3 fa-solid fa-left-long fa-beat"></i>
           <img  src={`${BASE_URL}/images/${trendingProductDataFromDB[imageCount]?.uploadimages[0]}`} className='w-[100%]  z-10 h-[100%]'></img>
             <i id='incrementImageCount' onClick={incrementImageCount} class="absolute top-[50%] text-6xl text-orange-200 right-3 fa-solid fa-right-long fa-beat"></i>
           <div>
            <span className='absolute top-0 font-thridStyle text-slate-700 left text-5xl z-50'>{trendingProductDataFromDB[imageCount]?.title}</span>
           </div>
           </div>

           
            <Link to={"/viewallproducts/all"} className='w-[20%] h-24 mt-10'><button className=' bg-slate-400 font-Lobster text-white lg:text-5xl w-[100%] h-[100%] rounded-2xl hover:scale-[1.1] duration-1000'>More Products</button></Link>
            <ToastContainer position="top-right" autoClose={2000} />
        </div>


















    )
}

export default NewLaunch
