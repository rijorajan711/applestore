import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import { adminDeleteTheUserAPI, adminGetAllUsersAPI, blockAndUnblockUserAPI } from '../../axios/allAPI/adminAPI'


function AdminViewUser() {

    const[userDataFromDB,setUserDataFromDB]=useState([])

    const adminGetAllUsers=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
        
            const reqHeader={
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            
            const result=await adminGetAllUsersAPI(reqHeader)
            if (result.status===200){
                
                setUserDataFromDB(result?.data)
            }else{
                  toast.warning(result.respose.data)
                 }

                     

        }else{
              toast.warning("please login Mr.Admin")
        }
    }
    
   useEffect(()=>{
       
       adminGetAllUsers()

   },[])

   const adminDeleteTheUser=async(userId)=>{
    const token=sessionStorage.getItem("token")
    if(token){
        
        const reqHeader={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const reqBody={
             userId:userId
        }

        const result=await adminDeleteTheUserAPI(reqBody,reqHeader)
        if(result.status===200){
            adminGetAllUsers()
            toast.warning(`User ${result.data.username} was deleted from database`)
        }else{
            toast.warning(result.response.data)
        }

    }else{
        toast.warning("please login Mr.Admin")
    }
      
   }


   const blockAndUnblockUser=async(userStatus,userId)=>{

    const token=sessionStorage.getItem("token")
    if(token){

        const reqHeader={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const reqBody={
             userStatus:userStatus,
             userId:userId
        }
        const result=await blockAndUnblockUserAPI(reqBody,reqHeader)
        if(result.status===200){
            adminGetAllUsers()
        
        }else{
            toast.warning(result.response.data)
        }

               

    }else{
        toast.warning("please login Mr.Admin")
    }
   }

  return (
       
    <div className='group min-h-screen lg:pl-[30%]  p-[5%] w-[100%] flex-col flex-shrink  lg:pt-[1%]'>
    
    <div className='w-full  h-28  text-slate-400 font-Lobster text-9xl flex  justify-center ' > Products </div>
   {


     userDataFromDB?.length>0? <table className='w-[100%] border mt-9 leading-10 border-y-2'>
                              <thead className='border border-y-2 '>
                              <tr>
                       <th>User Name</th>
                       <th>Email</th>
                       <th>User Status</th>
                       <th>Action</th>
                       <th>Action</th>
                       <th>Action</th>
                       
                    </tr>
                </thead>
                <tbody>

                    {  

                     userDataFromDB.map((data)=>(


                    <tr className=' font-fourthStyle'>
                        <td className='text-start'>{data.username}</td>
                      
                        <td className='text-start'>{data.email}</td>
                        
                          { 
                           data?.status?<td className='text-center'><button id='userStatus' className='bg-red-400 w-[100%] lg:w-[50%]  text-white ' >Blocked</button>  </td>:<td className='text-center'><button id='userStatus' className='bg-green-400 w-[100%] lg:w-[50%]  text-white ' >Unblocked</button>  </td>
                          }  
                          
                        <td className='text-center'><button onClick={()=>adminDeleteTheUser(data._id)} className='bg-slate-400 w-[100%] lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >DELETE</button></td>
                        <td className='text-center'><button onClick={()=>blockAndUnblockUser(true,data._id)} className='bg-slate-400 w-[100%] lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >BLOCK</button></td>
                        <td className='text-center'><button onClick={()=>blockAndUnblockUser(false,data._id)} className='bg-slate-400 w-[100%] lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >UNBLOCK</button></td>
                    </tr>

                      )

                      )
                      
                      
                    }

                        
                  

                           
                </tbody>
            </table>:   <div className='flex justify-center mt-[20%] text-3xl font-thridStyle text-red-300'><p>Sorry User Detail Cant Display Now Sorry !!!!</p></div>
                  
   

   



                }
            <ToastContainer  position="top-right" autoClose={2000} />


    </div>
  )
}

export default AdminViewUser
                      

