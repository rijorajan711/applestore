import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { userLoginResponse } from "../../Context/CreateContext";
import { addCartProductContext } from "../../Context/CreateContext";
import { addWishlistProductContext } from "../../Context/CreateContext";
import { useContext } from "react";
import { toast,ToastContainer } from "react-toastify";
import { getCartCountAPI, getWishlistCountAPI } from "../../axios/allAPI/userAPI";
function HomeNavbar() {
  const navigate=useNavigate()
  const {userAddCartProductResponse,setUserAddCartProductResponse}=useContext(addCartProductContext)
  const {userAddWishlistProductResponse,setUserAddWishlistProductResponse}=useContext(addWishlistProductContext)
  const {loginResponse,setLoginResponse}=useContext(userLoginResponse)
  const [cartCountState,setCartCountState]=useState("")
  const [WishlistCountState,setWishlistCountState]=useState("")
   const [User,setUser]=useState("")
    
   useEffect(()=>{
       const username=sessionStorage.getItem("username")
       setUser(username)

   },[loginResponse])

  const logOutFunction=()=>{
    sessionStorage.clear()
    setLoginResponse({})
    navigate("/")
    
  }

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

  const getCartCount=async()=>{
    const usertoken=sessionStorage.getItem("usertoken")
        if(usertoken){
          const reqHeader = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usertoken}`,
        };
               const result=await getCartCountAPI(reqHeader)
               if(result.status==200){
                setCartCountState(result.data)
              }
               else if(result.status==501){
                 setCartCountState(result.response.data)
               }}
        else{
          setCartCountState(0)
        }
  }

    const getWishlistCount=async()=>{
    const usertoken=sessionStorage.getItem("usertoken")
        if(usertoken){
          const reqHeader = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${usertoken}`,
        };
               const result=await getWishlistCountAPI(reqHeader)
               if(result.status==200){
                setWishlistCountState(result.data)
              }
               else if(result.status==501){
                 setWishlistCountState(result.response.data)
               }}
        else{
          setWishlistCountState(0)
        }
  }

  useEffect(()=>{
    getCartCount()
  },[loginResponse,userAddCartProductResponse])

  useEffect(()=>{
    getWishlistCount()
  },[loginResponse,userAddWishlistProductResponse])
  return (
    <div
      className={`max-h-28 bg-zinc-700 opacity-75 w-full fixed  lg:p-14 flex justify-evenly items-center flex-initial  z-50`}
    >
      <i class="fa-brands fa-apple lg:text-4xl text-white ">
        <span className="font-secondStyle lg:text-2xl "> Apple Store</span>
      </i>
      <div>
        <button className="font-thridStyle md:text-xl text-white hover:text-yellow-100">
          {" "}
          <Link to={"/"}><span>Home </span></Link>
        </button>
      </div>

      <div className="group relative flex-initial">
        <button className="font-thridStyle  lg:text-xl text-white group-hover:text-yellow-100">
          {" "}
          
          <span>
            Shope <i class="fa-solid fa-angle-down"></i>
          </span>
          
        </button>
        <div
          className={`invisible absolute top-7 pt-5 flex flex-col gap-6 shadow-2xl shadow-white bg-zinc-700 opacity-75 text-white w-40 rounded-lg h-52  justify-center group-hover:visible  items-center `}
        >
          <Link to={"/viewallproducts/all"} className={`hover:scale-[1.1] `}>All Product</Link>
          <Link to={"/viewallproducts/phone"} className="hover:scale-[1.1]">Shope Phone </Link>
          <Link to={"/viewallproducts/earphone"} className="hover:scale-[1.1]">ShopeEarBud </Link>
        </div>
      </div>
      <div className="group relative flex-initial">
        <button className=" font-thridStyle lg:text-xl text-white group-hover:text-yellow-100">
          {" "}
          <span>
            Product <i class="fa-solid fa-angle-down"></i>
          </span>
        </button>
        <div
          className={`invisible absolute  top-7 pt-5 flex  flex-col gap-6 shadow-2xl bg-zinc-700 opacity-75 shadow-white text-white    w-40 rounded-lg h-52  justify-center group-hover:visible  items-center `}
        >
          <Link to={"/viewallproducts/phone"} className="hover:scale-[1.1]">Phones</Link>
          <Link to={"/viewallproducts/earphone"} className="hover:scale-[1.1]">Earphones </Link>
          <Link to={"/viewallproducts/lap"} className="hover:scale-[1.1]">Laptops </Link>
        </div>
      </div>
      <div className="group relative flex-initial">
        <button className="font-thridStyle  lg:text-xl text-white group-hover:text-yellow-100">
          <span>
            Pages <i class="fa-solid fa-angle-down"></i>
          </span>{" "}
        </button>
        <div
          className={`invisible absolute top-7 pt-5 flex flex-col gap-6 shadow-2xl shadow-white bg-zinc-700 opacity-75 text-white  w-40 rounded-lg h-52   justify-center group-hover:visible  items-center`}
        >
          <Link to={"/"} className="hover:scale-[1.1]">Home</Link>
          <button onClick={enterToCart} className="hover:scale-[1.1]">Cart </button>
          <button onClick={enterToWishList} className="hover:scale-[1.1]">Wishlist </button>
        </div>
      </div>

      <div className="group lg:flex gap-2 flex-initial ">
       <button onClick={enterToCart}>
          <i class="fa-solid fa-cart-shopping lg:text-xl text-white">
            {" "}
            <span className="font-Lobster group-hover:text-yellow-100 :">
              Cart
            </span>
          </i>
        </button>

        <div className="lg:h-10 lg:w-10 bg-white rounded-full flex items-center justify-center text-2xl font-thridStyle">
          {cartCountState?.cartcount?cartCountState?.cartcount:0}
        </div>
      </div>
      <div className="group lg:flex gap-2 flex-initial">


        <button  onClick={enterToWishList}>
          <i class="fa-regular fa-heart lg:text-xl text-white">
            {" "}
            <span className="font-Lobster group-hover:text-yellow-100">
              WishList{" "}
            </span>
          </i>{" "}
        </button>

    
        <div className="lg:h-10 lg:w-10 bg-white rounded-full flex items-center justify-center text-2xl font-thridStyle">
        {WishlistCountState?.wishlistcount?WishlistCountState?.wishlistcount:0}
        </div>


      </div>
      
      {
        User? <div className="group relative flex-initial">
        <button className="font-thridStyle  lg:text-xl text-white group-hover:text-yellow-100">
          {" "}
          <span>
            {`Welcome ${User}`} <i class="fa-solid fa-angle-down"></i>
          </span>
        </button>
        <div
          className={`invisible absolute top-7 pt-5 flex flex-col gap-6 shadow-2xl shadow-white bg-zinc-700 opacity-75 text-white w-40 rounded-lg h-20  justify-center group-hover:visible  items-center `}
        >
          <button onClick={logOutFunction} className={`hover:scale-[1.1] `}>Log Out</button>

        </div>
        </div> :  <div className="group lg:flex gap-2 flex-initial">
        <Link to={"/login"}>
        <i class="fa-solid fa-user fa-beat hover: lg:text-xl text-white">
            {" "}
            <span className="font-Lobster group-hover:text-yellow-100">
              Signin/Login{" "}
            </span>
          </i>{" "}
        </Link>
        </div>



      }
      <ToastContainer position="top-right" autoClose={2000} />
    
    </div>
  );
}

export default HomeNavbar;





{/* <div className="group lg:flex gap-2 flex-initial">
               <span className="lg:text-2xl text-white font-fourthStyle group-hover:text-yellow-100">{`Welcome ${User}`}</span>
              </div> */}