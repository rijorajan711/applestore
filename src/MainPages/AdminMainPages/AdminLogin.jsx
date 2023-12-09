import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminLogInAPI } from '../../axios/allAPI/adminAPI'
import { ToastContainer, toast } from 'react-toastify';
import { adminLoginResponseContext } from '../../Context/CreateContext';
import 'react-toastify/dist/ReactToastify.css';

function AdminLogin() {
  const {adminLoginResponse,setAdminLoginResponse}=useContext(adminLoginResponseContext)
  const navigate = useNavigate()
  //location for admin login data
  const [adminLoginInDetails, setAdminLoginInDetails] = useState({
    adminemail: "",
    password: ""
  })

  //api call function creation for admin login

  const loginSubmit = async () => {

    const { adminemail, password } = adminLoginInDetails
    if (adminemail || password) {


      await adminLogInAPI(adminLoginInDetails).then((response) => {
        if (response.status === 200) {
          // console.log("aaaaaaaaaaaaa", response.data)
          sessionStorage.setItem("token", response.data.token)
          setAdminLoginResponse(response.data)
          navigate("/admin/landing")
        } else {
          toast.info("Check Your Password And Email Mr.Admin");
        }
      }).catch((err) => {
        navigate("/admin")
      })
    }
    else {
      toast.info("Please fill the details Mr.Admin");
    }

  }

  return (
    <div className='h-screen bg-no-repeat bg-center bg-cover flex justify-center bg-[url("https://c0.wallpaperflare.com/preview/394/192/959/black-apple-watch-on-iphone-x.jpg")] '>
      <div className='mt-[10%]  w-[70%] h-[75%] rounded-3xl  flex flex-col  justify-center gap-5 items-center'>


        <input type='text' onChange={(e) => setAdminLoginInDetails({ ...adminLoginInDetails, adminemail: e.target.value })} className='bg-white focus:outline-none w-[70%] h-[8%] rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Email'></input>
        <input type='text' onChange={(e) => setAdminLoginInDetails({ ...adminLoginInDetails, password: e.target.value })} className='bg-white focus:outline-none w-[70%] h-[8%] rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Password'></input>

        <div className='flex  gap-10'>
          <button onClick={loginSubmit} className='h-[50px] rounded-md w-[100px] bg-fuchsia-200 hover:bg-fuchsia-300'>Submit</button>
        </div>:


      </div>
      <ToastContainer position="top-right" autoClose={2000} />

    </div>
  )
}

export default AdminLogin














