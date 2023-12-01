import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import {placeOrderSubmitAPI} from '../../axios/allAPI/userAPI'

function Adress() {
      const navigate=useNavigate()
      const {total}=useParams()

     const [userAddress,setUserAddress]=useState({
        name:"",housename:"",state:"",district:"",phone:"",email:"",total:total
      })


      const placeOrder=async()=>{

        const {name,housename,state,district,phone,email,total}=userAddress
        if(!name || !housename || !state || !district || !phone || !email || !total){
                toast.warning("Please complete the Form")
        }else{
            
            const usertoken=sessionStorage.getItem("usertoken")
            if(usertoken){
                 const reqBody={
                    name,housename,state,district,phone,email,total
                   }  
                     

       
                 const reqHeader={
                   "Content-Type":"application/json",
                    "Authorization":`Bearer ${usertoken}`
                 }

                const result =await placeOrderSubmitAPI(reqBody,reqHeader)

                 if(result.status==200){
                    navigate("/orderplacedsuccess")
                     
                 }else{
                    toast.warning(result.response.data)
                    navigate("/cart")
                 }

              
               
            }else{
                toast.warning("Please Login")
            }
         }


        }

      




     


  return (
<div className="group min-h-screen w-[100%] flex-col pt-[15%] sm:pt-[10%] ">
      <div className="w-full  sm:h-28  text-slate-400 font-Lobster  text-4xl   sm:text-9xl flex  justify-center ">
        {" "}
        CheckOut{" "}
      </div>
      <div className="w-[100%] sm:mt-[5%] grid gap-2  lg:grid-cols-6 ">
        <div className="col-span-4  bg-gradient-to-br from-slate-200  to-gray-900 flex items-center justify-center  ">
         
            <table className="w-[100%]  leading-10 ">
            
              <tbody>
               
                  <tr
                    className="text-center font-fourthStyle ">
                    <td className='h-[50%]'>Name</td>
                
                    <td className="flex justify-center gap- items-center">
                   
                    <input value={userAddress.name} onChange={(e)=>setUserAddress({...userAddress,name:e.target.value})}   className=' focus:outline-none w-[100%] mr-5 text-center text-lg font-fourthStyle ' placeholder='Name'></input>
                    </td>
                  </tr>
                  <tr
                    className="text-center font-fourthStyle ">
                    <td >House Name</td>
                
                    <td className="flex justify-center gap-5 items-center">
                   
                    <input  value={userAddress.housename} onChange={(e)=>setUserAddress({...userAddress,housename:e.target.value})}   className=' focus:outline-none w-[100%] mr-5  text-center text-lg font-fourthStyle ' placeholder='House Name'></input>
                    </td>
                  </tr>
                  <tr
                    className="text-center font-fourthStyle ">
                    <td>State</td>
                
                    <td className="flex justify-center gap-5 items-center">
                   
                    <input value={userAddress.state} onChange={(e)=>setUserAddress({...userAddress,state:e.target.value})}   className='bfocus:outline-none w-[100%] mr-5  text-center text-lg font-fourthStyle ' placeholder='State'></input>
                    </td>
                  </tr>
                  <tr
                    className="text-center font-fourthStyle ">
                    <td >District</td>
                
                    <td className="flex justify-center gap-5 items-center">
                   
                    <input  value={userAddress.district} onChange={(e)=>setUserAddress({...userAddress,district:e.target.value})}  className=' focus:outline-none w-[100%] mr-5 text-center text-lg font-fourthStyle ' placeholder='District'></input>
                    </td>
                  </tr>
                  <tr
                    className="text-center font-fourthStyle ">
                    <td >Phone</td>
                
                    <td className="flex justify-center gap-5 items-center">
                   
                    <input value={userAddress.phone} onChange={(e)=>setUserAddress({...userAddress,phone:e.target.value})}   className=' focus:outline-none w-[100%] mr-5 text-center text-lg font-fourthStyle ' placeholder='Phone'></input>
                    </td>
                  </tr>
                  <tr
                    className="text-center font-fourthStyle ">
                    <td >Email</td>
                
                    <td className="flex justify-center gap-5 items-center">
                   
                    <input value={userAddress.email} onChange={(e)=>setUserAddress({...userAddress,email:e.target.value})}   className='focus:outline-none w-[100%] mr-5 text-center text-lg font-fourthStyle ' placeholder='Email'></input>
                    </td>
                  </tr>
             
                 
               
          
              </tbody>
            </table>
             
        </div>
        <div className="lg:col-span-2 content-center col-span-4 bg-slate-50 flex flex-col justify-center gap-5">
          <div className="w-[80%] h-[250px] mx-auto bg-gradient-to-br from-slate-200  to-gray-900 rounded-3xl gap-6 flex flex-col items-center pt-6">
            <h1 className="text-slate-700  font-thridStyle text-4xl">
              Cart Total
            </h1>

         
              <h1 className="font-fourthStyle text-2xl">
                Total Amount:{total}
                <span className="text-5xl  font-Lobster text-orange-500"></span>
              </h1>
   
          
       
          </div>
          <div className="w-[80%] mx-auto flex gap-3 justify-center">

           <Link  className="w-[100%]  rounded-2xl h-[50px] bg-slate-300 hover:scale-[1.1] duration-1000" to={"/cart"}>
           <button className="w-[100%]  rounded-2xl h-[50px] bg-slate-300 hover:scale-[1.1] duration-1000">
              Back To Cart
            </button>
           </Link> 
            <button onClick={placeOrder} className="w-[100%]  rounded-2xl h-[50px] bg-slate-300 hover:scale-[1.1] duration-1000">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default Adress
