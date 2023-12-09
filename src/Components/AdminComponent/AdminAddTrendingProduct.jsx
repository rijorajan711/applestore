import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import { adminAddTrendingProductAPI } from '../../axios/allAPI/adminAPI'




function AdminAddTrendingProduct() {

const [token,setToken]=useState("")
useEffect(()=>{
    
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
},[])

const [adminTrendingProductDetails,setAdminTrendingProductDetails]=useState({
  title:"",description:"",category:"",price:"",uploadimages:""

})

const handleDiscription=(e)=>{
  setAdminTrendingProductDetails({...adminTrendingProductDetails,description:e.target.value})
                             }
// console.log("addproddductttt from state",adminTrendingProductDetails)

const trendingProductSubmit=async()=>{
         
        const {title,description,category,price,uploadimages}=adminTrendingProductDetails
        if(!title||!description||!category||!price||!uploadimages){
                toast.warning("Please complete the data Mr.Admin")
        }
        else if(title&&description&&category&&price&&uploadimages){

          if(uploadimages.length!=4){
            toast.warning("Please Select 4 Images")

          }else{

            const reqBody=new FormData()
            reqBody.append("title",title);
            reqBody.append("description",description);
            reqBody.append("category",category);
            reqBody.append("price",price);
  
             for(let i =0; i < uploadimages.length; i++) {
             reqBody.append("uploadimages", uploadimages[i]);
           }
  
  
           //  reqBody.append("uploadimages",reqBody);
           
  
         
                 if(token){
                      const reqHeader={
                        "Content-Type":"multipart/form-data",
                         "Authorization":`Bearer ${token}`
                      }
                      
                         const result= await adminAddTrendingProductAPI(reqBody,reqHeader)
                         if(result.status===200){
                          setAdminTrendingProductDetails({
                            title:"",description:"",category:"",price:"",uploadimages:""
                          
                          })
                           toast.warning(result.data)
                         }else{
                          toast.warning(result.response.data)
                         } 
                     }else if(!token){
                       toast("Please Login Mr.Admin")
                       
  
                     }
          }
            

       
       
                      }

}


  return (
    <div className='h-screen bg-no-repeat bg-center bg-cover w-full bg-[url("https://c0.wallpaperflare.com/preview/394/192/959/black-apple-watch-on-iphone-x.jpg")]'>
      <div className='w-full  h-28  text-slate-400 font-Lobster text-5xl flex  justify-center ' >Add TrendingProducts</div>
      <div className='h-full w-full flex flex-col  gap-4 pl-[30%]'>
      
      
      <div className='w-[70%] h-[8%] flex gap-9 lg:gap-6 flex-shrink items-center'>
      <label className='text-white font-fourthStyle text-xl lg:text-3xl w-[30%]'>Product Title</label>
      <input type='text' value={adminTrendingProductDetails.title} onChange={(e)=>setAdminTrendingProductDetails({...adminTrendingProductDetails,title:e.target.value})} className='bg-white focus:outline-none w-[70%] h-full rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Product Title'></input>
      </div>

      <div className='w-[70%] h-[8%] flex gap-6 flex-shrink items-center'>
      <label className='text-white font-fourthStyle text-xl lg:text-3xl w-[30%]'>Description</label>
      {/* onChange={(e)=>setAdminProductDetails({...adminProductDetails,description:e.target.value})} */}
      <textarea type="text" value={adminTrendingProductDetails.description} onChange={handleDiscription}   className='bg-white focus:outline-none w-[70%] text-center rounded-lg  text-lg font-fourthStyle opacity-60 focus:opacity-90'  placeholder='Description'></textarea>
      </div>
      {/* <input type='text' className='bg-white focus:outline-none w-[70%] h-full  rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Description'></input> */}

      <div className='w-[70%] h-[8%] flex gap-6 flex-shrink items-center'>
      <label className='text-white font-fourthStyle text-xl shrink lg:text-3xl w-[30%]'>Category</label>
      <input type='text' value={adminTrendingProductDetails.category} onChange={(e)=>setAdminTrendingProductDetails({...adminTrendingProductDetails,category:e.target.value})} className='bg-white focus:outline-none w-[70%] h-full rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Category'></input>
      </div>

      <div className='w-[70%] h-[8%] flex gap-9 lg:gap-6 flex-shrink items-center'>
      <label className='text-white font-fourthStyle text-xl lg:text-3xl w-[30%]'>Price</label>
      <input type='text' value={adminTrendingProductDetails.price} onChange={(e)=>setAdminTrendingProductDetails({...adminTrendingProductDetails,price:e.target.value})} className='bg-white focus:outline-none w-[70%] h-full rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Price'></input>
      </div>

      <div className='w-[70%] h-[8%] flex gap-6 flex-shrink items-center'>
      <label className='text-white font-fourthStyle text-xl lg:text-3xl w-[30%]'>Upload Image</label>
      <input type='file' onChange={(e)=>setAdminTrendingProductDetails({...adminTrendingProductDetails,uploadimages:e.target.files})} className='bg-white focus:outline-none w-[70%] h-full rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' multiple></input>
      </div>


     <div className='flex justify-center mt-7'>

      <button onClick={trendingProductSubmit}  className='h-[50px] rounded-md w-[40%] bg-fuchsia-200 hover:bg-fuchsia-300'>Submit</button>

     </div>

     


    

    

      </div>

       <ToastContainer  position="top-right" autoClose={2000} />
    </div>
  )
}

export default AdminAddTrendingProduct
