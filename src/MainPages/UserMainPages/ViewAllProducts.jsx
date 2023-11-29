import React, { useEffect, useState } from 'react'
import CardForAllProducts from '../../Components/UsersComponents/CardForAllProducts'
import { ToastContainer,toast} from 'react-toastify'
import { userGetAllProductAPI, userGetCategoryProductAPI } from '../../axios/allAPI/userAPI'
import { useParams } from 'react-router-dom'

function ViewAllProducts() {
  const {category}=useParams()

  console.log("near to parammmsss",category)

  const [productDataFromDB,setProductDataFromDB]=useState([])


  const userGetAllProduct=async()=>{
    const result=await userGetAllProductAPI()
    if(result.status===200){
        console.log(result.data)
        setProductDataFromDB(result?.data)
    }else{
         toast.warning(result?.response?.data)
    }
}




const userGetcategoryProduct=async(filterKey)=>{
  const reqBody={filterKey}
  const result =await userGetCategoryProductAPI(reqBody)
  if(result.status===200){
    setProductDataFromDB(result?.data)
}else{
     toast.warning(result?.response?.data)
}
}

    


  useEffect(()=>{
  
    console.log("inside useeffect")
    
    if(category==="all"){
      console.log("inside all product useeffect ")
      userGetAllProduct()
      
    }else if(category==="phone"||category==="earphone"||category==="lap"){
      console.log("category useeffect")
      userGetcategoryProduct(category)
  
    }

  },[category])
  return (
    <div className='min-h-screen w-[100%] flex-col pt-[30%] lg:pt-[10%]'>


  
  <div className='w-full h-28  text-slate-400 font-Lobster text-9xl flex  justify-center items-center' > All Products </div>
  
  <div className='w-[100%] m-[5%] pt-36 lg:pt-0 flex justify-center lg:justify-start flex-wrap gap-5'>

   {
       productDataFromDB?.length>0?productDataFromDB.map(product=>(
      
          <CardForAllProducts product={product}/>

       )):<div className='w-full text-center text-6xl font-fourthStyle text-stone-700'><p>There is no product</p></div>

   }


  </div>
     
  <ToastContainer  position="top-right" autoClose={2000} />
    </div>
  )
}

export default ViewAllProducts
