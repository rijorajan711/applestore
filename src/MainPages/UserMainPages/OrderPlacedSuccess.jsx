import React from 'react'
import { Link } from 'react-router-dom'

function OrderPlacedSuccess() {
  return (
    <div className='h-screen bg-slate-50 flex flex-col gap-5 text-center sm:justify-center items-center'>

        

     <h1 className='text-5xl font-Lobster text-slate-500'>Order Placed SuccessFully</h1>
     <Link  className="w-[70%]  rounded-2xl h-[50px] bg-slate-300 hover:scale-[1.1] duration-1000" to={"/"}>
           <button className="w-[70%]  rounded-2xl h-[50px] bg-slate-300 hover:scale-[1.1] duration-1000">
              Back To Home
            </button>
           </Link>
           <Link  className="w-[70%]  rounded-2xl h-[50px] bg-slate-300 hover:scale-[1.1] duration-1000" to={"/orderview"}>
           <button className="w-[70%]  rounded-2xl h-[50px] bg-slate-300 hover:scale-[1.1] duration-1000">
               View Orders
            </button>
           </Link>
      
    </div>
  )
}

export default OrderPlacedSuccess
