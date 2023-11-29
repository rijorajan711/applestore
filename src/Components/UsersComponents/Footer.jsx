import React from 'react'
import { Link } from 'react-router-dom'
import { userLoginResponse } from "../../Context/CreateContext";
import { useContext,useEffect,useState } from "react";
import { toast,ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';
function Footer() {


  const navigate=useNavigate()
  const {loginResponse,setLoginResponse}=useContext(userLoginResponse)
  const [User,setUser]=useState("")
    
   useEffect(()=>{
       const username=sessionStorage.getItem("username")
       setUser(username)

   },[loginResponse])

  const enterToCart=()=>{
    const usertoken=sessionStorage.getItem("usertoken")
    if(usertoken){
      navigate("/cart")
    }else{
      toast.warning("Login To access to Cart")
      navigate("/login")
    }
  }

  const enterToWishList=()=>{
    const usertoken=sessionStorage.getItem("usertoken")
    if(usertoken){
      navigate("/wishlist")
    }else{
      toast.warning("Login To access to WishList")
      navigate("/login")
    }
  }


  return (
   <>

   <div className='grid grid-cols-4 h-[250px] mt-10 bg-slate-500 pt-9 w-full text-center grid-flow-col-dense' >
    <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
      <input  className='bg-slate-200 text-center focus:outline-none w-[90%] items-center h-[30%] ml-10 rounded-2xl' ></input>
      <button className=' bg-slate-400 font-Lobster text-white lg:text-xl w-[40%] lg:h-[30%] lg:rounded-2xl hover:scale-[1.1] duration-1000'>Search</button>
    </div>
    <div className='flex flex-col gap-4 text-start justify-center items-center'>
      <h1 className=' text-2xl text-white font-thridStyle'>Shope</h1>
      <ul className='text-lg text-slate-300 hover:skew-x-12 duration-700 '>

      <li className='hover:scale-[1.1] duration-1000 hover:text-teal-100'><Link to={"/viewallproducts/all"}>All Product</Link></li>  
      <li className='mt-3 hover:scale-[1.1] duration-1000 hover:text-teal-100'><Link to={"/viewallproducts/lap"}>Shope LapTops</Link></li>
       <li className='mt-3 hover:scale-[1.1] duration-1000 hover:text-teal-100'><Link to={"/viewallproducts/earphone"}>Shope EarBuds</Link></li>
      
      </ul>
    
    </div>
      


    <div className='flex flex-col gap-4 text-start justify-center items-center'>
      <h1 className='text-2xl text-white font-thridStyle'>Product</h1>
      <ul className='text-lg text-slate-300 hover:skew-x-12 duration-700'>
      <li className='mt-3 hover:scale-[1.1] duration-1000 hover:text-teal-100'><Link to={"/viewallproducts/phone"}>Phones</Link></li>
       <li className='hover:scale-[1.1] duration-1000 hover:text-teal-100' ><Link to={"/viewallproducts/lap"}>Laptop</Link></li> 
       <li className='mt-3 hover:scale-[1.1] duration-1000 hover:text-teal-100'><Link to={"/viewallproducts/earphone"}>EarBuds</Link></li>
      
      </ul>
    
    </div>


    <div className='flex flex-col gap-4 text-start justify-center items-center'>
      <h1 className='text-2xl text-white font-thridStyle'>Pages</h1>
      <ul className='text-lg text-slate-300 hover:skew-x-12 duration-700'>

      <li className='hover:scale-[1.1] duration-1000 hover:text-teal-100'><Link>About Us</Link></li> 
      <li className='mt-3 hover:scale-[1.1] duration-1000 hover:text-teal-100'><button onClick={enterToCart}>Cart</button></li>
       <li className='mt-3 hover:scale-[1.1] duration-1000 hover:text-teal-100'><button  onClick={enterToWishList}>Wishlist</button></li>
      
      </ul>
    
    </div>
   
   </div>
   <ToastContainer position="top-right" autoClose={2000} />
   </>
  )
}

export default Footer
