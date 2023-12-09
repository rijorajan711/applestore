import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import { addToCartSubmitAPI, getWishlistProductsAPI,removeProductFromWishlistSubmitAPI } from '../../axios/allAPI/userAPI'
import { BASE_URL } from '../../axios/baseURL'
import { useContext } from 'react'
import { addWishlistProductContext } from '../../Context/CreateContext'
import { addCartProductContext } from '../../Context/CreateContext'

function Wishlist() {
  const {userAddCartProductResponse,setUserAddCartProductResponse}=useContext(addCartProductContext)
  const {userAddWishlistProductResponse,setUserAddWishlistProductResponse}=useContext(addWishlistProductContext)  
  const [wishlistProductState,setWishlistProductState]=useState()
  const getWishlistProducts=async()=>{
    const usertoken=sessionStorage.getItem("usertoken")
    if(usertoken){
        const reqHeader={
            "Content-Type":"application/json",
             "Authorization":`Bearer ${usertoken}`
          }
        const result=await getWishlistProductsAPI(reqHeader)
        if(result.status===200){

            //  console.log("sssssssssssssssssssssssssssssss",result.data)
            setWishlistProductState(result.data)
        }

    }else{
        
        toast.warning("You cant access Cart Plese login")
    }
}

useEffect(()=>{
  getWishlistProducts()
},[])




const removeProductFromWishlistSubmit=async(productId)=>{
  const usertoken=sessionStorage.getItem("usertoken")
  if(usertoken){
      const reqHeader={
          "Content-Type":"application/json",
           "Authorization":`Bearer ${usertoken}`
        }

        const reqBody={
          productId
        }

       const result =await removeProductFromWishlistSubmitAPI(reqBody,reqHeader)
       
       if(result.status===200){

          setUserAddWishlistProductResponse(result.data)
          getWishlistProducts()
       }else{
             toast.warning(result.response.data)
       }

      
  }else{
      toast.warning("you cat access it please login")
  }
}



const addToCartSubmit=async(productId)=>{
  const usertoken=sessionStorage.getItem("usertoken")
  if(usertoken){
       const reqBody={
         productId:productId
       }  

       const reqHeader={
         "Content-Type":"application/json",
          "Authorization":`Bearer ${usertoken}`
       }
     const result=await addToCartSubmitAPI(reqBody,reqHeader) 
     if(result.status===200){
       toast.warning(result.data.message)
       setUserAddCartProductResponse(result.data.updateresponse)
       removeProductFromWishlistSubmit(productId)
     }else{
       toast.warning(result.response.data)
     }
     
  }else{
      toast.warning("Please Login")
  }
}
  


  return (
<div className='group min-h-screen w-[100%] flex-col pt-[15%] sm:pt-[10%]'>
    
    <div className='w-full  h-28  text-slate-400 font-Lobster text-9xl flex  justify-center ' > WishList </div>

{
    wishlistProductState?.length>0?  <table className='w-[100%] border mt-9 leading-10 border-y-2'>
    <thead className='border border-y-2 '>
        <tr>
           <th>Product Name</th>
           <th>Image</th>
          
           <th>Price</th>
           <th>Action</th>
           <th>Action</th>

        </tr>
    </thead>
    <tbody>
{

    wishlistProductState?.map((product)=>(
      
 <tr key={product.products?.productDetails?._id} className='text-center font-fourthStyle'>
            <td>{product.products?.productDetails?.title}</td>
            {
                 product.products?.productDetails?.uploadimages.length>0? <td ><img className="mx-auto h-[70px] min-h-0-[70px] max-w-[70px] min-w-[70px]" src={`${BASE_URL}/images/${product.products?.productDetails?.uploadimages[0]}`} alt="" /></td>:
                                                                 <td ><img className='mx-auto h-[70px] min-h-0-[70px] max-w-[70px] min-w-[70px]' src="https://www.apple.com/newsroom/images/2023/09/apple-offers-more-ways-to-order-the-new-lineups/geo/Apple-iPhone-15-Pro-lineup-natural-titanium-geo_inline.jpg.large.jpg" alt="" /></td>

            }
            <td>{product.products?.productDetails?.price}</td>
            <td><button onClick={()=>removeProductFromWishlistSubmit(product.products?.productDetails?._id)} className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >REMOVE</button></td>
            <td><button onClick={()=>addToCartSubmit(product.products?.productDetails?._id)} className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >ADD TO CART</button></td>
        </tr>


    ))
       


}
            
    

               
    </tbody>
</table>: <div className="flex justify-center text-4xl text-gray-600 font-fourthStyle mt-10"><h1>sorry your wishlist is empty!!!!</h1></div>
  



}
  
            <ToastContainer position='top-right' autoClose={2000}/>

    </div>

  )
}

export default Wishlist
