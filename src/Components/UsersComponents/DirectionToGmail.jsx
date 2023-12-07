import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { sendPastedTokenAPI } from '../../axios/allAPI/userAPI'

function DirectionToGmail() {
     const navigate=useNavigate()
     const [tokenPasted,setTokenPasted]=useState("")
    
     const sendPastedToken=async()=>{
        
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${tokenPasted}`
          }
        const result= await sendPastedTokenAPI(reqHeader)
        if(result.status===200){
           
               toast.warning(`${result.data} is Signin successfully`)
               navigate("/login")
        }else{
                toast.warning(result.response.data)
                console.log("erorrrrrrrrr",result.response.data)
                navigate("/signin")
        }

        
    }
    console.log("please give a tokennnn in frontttttt",typeof tokenPasted)

  return (
    <div className='h-screen bg-slate-300 flex flex-col gap-5 pt-28 lg:pt-5 text-center sm:justify-center items-center'>

        
  <h1>Chek Your mail and Paste the given token in below Text box</h1>
<input  onChange={(e)=>setTokenPasted(e.target.value)} className='bg-white focus:outline-none w-[70%] h-[8%] rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Paste the Token From Your Given mail'></input>
     <Link  className="w-[40%]  rounded-2xl h-[50px] bg-slate-400 hover:scale-[1.1] duration-1000" to={"/"}>
         
          <button className="w-[70%]  rounded-2xl h-[50px] bg-slate-500 hover:scale-[1.1] duration-1000">
              Back to Home
          </button>
           </Link>
           <Link  className="w-[40%]  rounded-2xl h-[50px] bg-slate-400 hover:scale-[1.1] duration-1000" >
         
         <button onClick={sendPastedToken} className="w-[70%]  rounded-2xl h-[50px] bg-slate-500 hover:scale-[1.1] duration-1000">
             Proceed
         </button>
          </Link>
         
      <ToastContainer position='top-right' autoClose={2000} ></ToastContainer>
    </div>
  )
}

export default DirectionToGmail
