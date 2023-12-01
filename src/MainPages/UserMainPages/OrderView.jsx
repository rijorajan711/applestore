import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getAllOrderAPI } from '../../axios/allAPI/userAPI'

function OrderView() {
    const [orderState,setOrderState]=useState([])


    const getAllOrder=async()=>{
        const usertoken=sessionStorage.getItem("usertoken")
        if(usertoken){
            const reqHeader={
                "Content-Type":"application/json",
                 "Authorization":`Bearer ${usertoken}`
              }

              const result= await getAllOrderAPI(reqHeader)
              
              if(result.status===200){
                setOrderState(result.data)
              }else{
                toast.warning(result.response.data)
              }

            }else{
                toast.warning("Please Login")
            }

    }
    
    useEffect(()=>{
         getAllOrder()
    },[])


console.log(orderState)
  return (
    <div className='group min-h-screen w-[100%] flex-col flex-initial pt-[15%] sm:pt-[10%]'>
    
    <div className='w-full  h-28  text-slate-400 font-Lobster text-9xl flex  justify-center ' > Orders </div>

  {

        orderState?.length >0?<table className='w-[100%] border mt-9  border-y-2'>
        <thead className='border border-y-2 text-xs lg:text-lg '>
            <tr >
               <th>Ordered By</th>
              
               <th>Phone</th>
            
               <th>Date</th>
               <th>Total</th>
               
            </tr>
        </thead>
        <tbody>
        {orderState?.map((order)=>(

            <tr  className='text-center text-xs lg:text-lg font-fourthStyle'>
                <td >{order.name}</td>
               
                <td>{order.phone}</td>
         
                <td>{order.date}</td>
                <td>{order.total}</td>
            </tr>
     

        ))

  

        }
        </tbody>
    </table>:<h1>Your order is empty</h1>


  }
  
  
  
</div>

)}
export default OrderView
         

          
           




 
            
    

               


  
       



