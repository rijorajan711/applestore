import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { userLoginAPI, userSignInAPI } from '../../axios/allAPI/userAPI'
import { useNavigate } from 'react-router-dom'
import { userLoginResponse } from '../../Context/CreateContext'
import { useContext } from 'react'
function SignIn({signin}) {
  
  const {loginResponse,setLoginResponse}=useContext(userLoginResponse)

  const navigate=useNavigate()
  const [userDetails,setUserDetails]=useState({
    username:"",email:"",password:""
  })
  
  const userSignInSubmit=async()=>{
    const {username,email,password}=userDetails
    if(!username || !email || !password){
      toast.warning("Pleass fill the form completely")
    }else if(username&&email&&password){
        const result=await userSignInAPI(userDetails)
            // console.log("userrrrrrrrrrrrrrrrrrrrrrrrr",result)
        if(result.status===200){
            // toast.warning(`${result.data.username} is Signin successfully`)
            // setUserDetails({
            //   username:"",email:"",password:""                                                    
            // })
            toast.warning(result.data)
            navigate("/directiontogmail")
        }
        else{
            toast.warning(result.response.data)
            navigate("/signin")
        }
    }  else{
      toast.warning("Some internal Error !!!!!!")
  }

  }


  const userLoginSubmit=async()=>{
    const {email,password}=userDetails
    if(!email || !password){
      toast.warning("Pleass fill the form completely")

    }else if(email&&password){
       
      const result=await userLoginAPI(userDetails)
      console.log("loooooooooooogggggg",result)
      // console.log("userrrrrrrrrrrrrrrrrrrrrrrrr",result)
      if(result.status===200){
          sessionStorage.setItem("usertoken",result.data.usertoken)
          sessionStorage.setItem("username",result.data.username)
          toast.warning(`${result.data.username} is Lognin successfully`)
          setLoginResponse(result.data)
          navigate("/")
          
          
      }else{

        toast.warning(result.response.data)
          
      }
    }
  }







  return (
    <div className='h-screen w-full bg-no-repeat bg-center bg-cover flex justify-center bg-[url("https://c0.wallpaperflare.com/preview/394/192/959/black-apple-watch-on-iphone-x.jpg")] '>
        <div className='mt-[10%]  w-[70%] h-[75%] rounded-3xl  flex flex-col  justify-center gap-5 items-center'>
          
         { signin&&<input value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} className='bg-white focus:outline-none w-[70%] h-[8%] rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Name'></input>}
          <input value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}  className='bg-white focus:outline-none w-[70%] h-[8%] rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Email'></input>
          <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} className='bg-white focus:outline-none w-[70%] h-[8%] rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Password'></input>
         { signin?
            <div className='flex  gap-10'>
            <span className='font-thridStyle text-xl text-white'>If you already have an account please Click Login !!!!</span> <Link to={"/login"}  className='h-[100%] rounded-md w-[30%] bg-fuchsia-200 hover:bg-fuchsia-300'><button onClick={()=>setUserDetails({ username:"",email:"",password:""})} className='h-[100%] rounded-md w-[100%] '>Login</button></Link>  <button onClick={userSignInSubmit} className='h-[100%] rounded-md w-[30%] bg-fuchsia-200 hover:bg-fuchsia-300'>Submit</button>
            </div>:
            <div className='flex  gap-10'>
            <span className='font-thridStyle text-xl text-white'>If you dont have an account please Click Sign In first !!!!</span> <Link to={"/signin"} className='h-[100%] rounded-md w-[30%] bg-fuchsia-200 hover:bg-fuchsia-300'><button onClick={()=>setUserDetails({ username:"",email:"",password:""})} className='h-[100%] rounded-md w-[100%] '>SignIn</button></Link> <button onClick={userLoginSubmit} className='h-[100%] rounded-md w-[30%] bg-fuchsia-200 hover:bg-fuchsia-300'>Submit</button>
            </div>
            }
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default SignIn
