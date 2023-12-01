import React from 'react'
import { BASE_URL } from '../../axios/baseURL'
import { toast,ToastContainer } from "react-toastify";
import { addToCartSubmitAPI,addToWishListSubmitAPI} from '../../axios/allAPI/userAPI';



function CardForAllProducts(product) {



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
          toast.warning(result.data)
        }else{
          toast.warning(result.response.data)
        }
        
     }else{
         toast.warning("Please Login")
     }
  }



  const addToWishListSubmit=async(productId)=>{


    const usertoken=sessionStorage.getItem("usertoken")
    if(usertoken){
         const reqBody={
           productId:productId
         }  

         const reqHeader={
           "Content-Type":"application/json",
            "Authorization":`Bearer ${usertoken}`
         }
       const result=await addToWishListSubmitAPI(reqBody,reqHeader) 
       if(result.status===200){
         toast.warning(result.data)
       }else{
         toast.warning(result.response.data)
       }
       
    }else{
        toast.warning("Please Login")
    }



  }

  return (
    <>

<div className='group h-[400px]  w-[250px] flex gap-5 flex-col bg-slate-100 rounded-lg shadow-2xl hover:scale-[1.01] duration-700'>



{

  product?.product?.uploadimages[0]?   <div className='relative max-h-[50%] min-h-[50%] rounded-lg  '>
  <img className='absolute max-h-full min-h-full w-full rounded-lg ' src={`${BASE_URL}/images/${product?.product?.uploadimages[0]}`}></img>
  <div onClick={()=>addToWishListSubmit(product?.product?._id)} className='absolute left-[5%] top-[5%] opacity-0 text-red-500 bg-slate-100 rounded-full h-[10%] flex justify-center items-center w-[10%] group-hover:opacity-100 group-hover:duration-1000 hover:cursor-pointer'><i class="fa-solid fa-heart text-xl"></i></div>
  <button onClick={()=>addToCartSubmit(product?.product?._id)} className='absolute bottom-0 translate-y-10  bg-slate-100  h-[20%] w-full opacity-0 text-slate-500 group-hover:translate-y-0 duration-200 group-hover:opacity-100 hover:bg-slate-300 text-xl font-semibold ' >Add To Cart</button>
  </div>:  <div className='relative max-h-[50%] min-h-[50%] rounded-lg  bg-center bg-cover bg-[url("https://www.silicon.fr/wp-content/uploads/2015/12/apple-684x513.jpg")]'>
  <div onClick={()=>addToWishListSubmit(product?.product?._id)} className='absolute left-[5%] top-[5%] opacity-0 text-red-500 bg-slate-100 rounded-full h-[10%] flex justify-center items-center w-[10%] group-hover:opacity-100 group-hover:duration-1000 hover:cursor-pointer'><i class="fa-solid fa-heart text-xl"></i></div>
  <button onClick={()=>addToCartSubmit(product?.product?._id)} className='absolute bottom-0 translate-y-10  bg-slate-100  h-[20%] w-full opacity-0 text-slate-500 group-hover:translate-y-0 duration-200 group-hover:opacity-100 hover:bg-slate-300 text-xl font-semibold ' >Add To Cart</button>
  </div>

}




<div className='flex flex-col gap-3'>

    <h1 className='pl-2 font-thridStyle text-2xl'>{product.product.title}</h1>
    <span className='pl-2 font-thridStyle text-2xl'></span>

    <div className='max-h-16  overflow-hidden overflow-y-scroll'>{product.product.description}</div>
    
    <span className='pl-4 font-bold text-lg '>{`₹ ${product.product.price}`} </span>

</div>

</div>

<ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default CardForAllProducts
