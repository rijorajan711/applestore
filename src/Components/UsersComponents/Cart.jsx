import React, { useEffect } from 'react'
import { toast,ToastContainer } from 'react-toastify'
import { getCartProductsAPI } from '../../axios/allAPI/userAPI'

function Cart() {


    const getCartProducts=async()=>{
        const usertoken=sessionStorage.getItem("usertoken")
        if(usertoken){
            const reqHeader={
                "Content-Type":"application/json",
                 "Authorization":`Bearer ${usertoken}`
              }
            const result=await getCartProductsAPI(reqHeader)
        }else{
            toast.warning("You cant access Cart")
        }
    }



    useEffect(()=>{
          
        getCartProducts()

    },[])
    

  return (
    <div className='w-[100%] min-h-screen grid gap-2  lg:grid-cols-6 '>
        <div className='col-span-4 pt-[20%]   bg-slate-100  '>
            <table className='w-[100%] border leading-10 border-y-2'>
                <thead className='border border-y-2 '>
                    <tr>
                       <th>Product Name</th>
                       <th>Image</th>
                       <th>Quantity</th>
                       <th>Price</th>
                       <th>Action</th>
                       <th>Total</th>

                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center font-fourthStyle'>
                        <td>i Phone 15</td>
                        <td ><img className='mx-auto h-[70px]' src="https://www.apple.com/newsroom/images/2023/09/apple-offers-more-ways-to-order-the-new-lineups/geo/Apple-iPhone-15-Pro-lineup-natural-titanium-geo_inline.jpg.large.jpg" alt="" /></td>
                        <td className='flex justify-center gap-5 items-center'>3 <div className='flex flex-col'><i class="fa-solid fa-angle-up"></i> <i class="fa-solid fa-angle-down"></i></div></td>
                        <td>75000</td>
                        <td><button className='bg-slate-400 w-[50%] rounded-lg text-white hover:bg-slate-600' >REMOVE</button></td>
                        <td>225000</td>
                    </tr>
                        
                  

                           
                </tbody>
            </table>
        </div>
        <div className='lg:col-span-2 col-span-4 bg-slate-50'>
         <div className='w-[80%] h-[800px] bg-black'>

         </div>
        </div>

        <ToastContainer position='top-right' autoClose={2000}/>
      
    </div>
  )
}

export default Cart
