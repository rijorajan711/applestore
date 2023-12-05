import React, { useEffect, useState,useContext } from 'react'
import CardForAllProducts from '../../Components/UsersComponents/CardForAllProducts'
import { ToastContainer,toast} from 'react-toastify'
import { userGetAllProductAPI, userGetCategoryProductAPI } from '../../axios/allAPI/userAPI'
import { useParams,Link } from 'react-router-dom'
import { adminAddProductContext } from '../../Context/CreateContext'
function ViewAllProducts() {
  const {category}=useParams()
  const [searchProductKey,setSearchProductKey]=useState("")
  const {adminAddProductRespose,setAdminAddProductRespose}=useContext(adminAddProductContext)


  console.log("near to parammmsss",category)

  const [productDataFromDB,setProductDataFromDB]=useState([])


  const userGetAllProduct=async()=>{

    const searhKey=searchProductKey
  
    const result=await userGetAllProductAPI(searhKey)
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



  useEffect(()=>{
    userGetAllProduct()
  },[searchProductKey])

   const searchProduct=(e)=>{
    setSearchProductKey(e.target.value)
    
  }
  
  

  return (
    <div className='min-h-screen w-[100%] flex-col pt-[30%] lg:pt-[10%]'>


  
  <div className='w-full h-28  text-slate-400 font-Lobster text-9xl flex  justify-center items-center' >Products </div>
  <div className='w-full flex justify-center items-center gap-10 h-20 '>
   
   
   <input onChange={(e)=>searchProduct(e)} className='h-[70%] bg-slate-100 w-[50%] pl-5 focus:outline-none font-fourthStyle text-2l' placeholder='Search Product By Name' ></input>
   
   
   <div className='relative  group w-28 h-12'>

   <i class="fa-solid fa-arrow-down-wide-short w-full h-full text-3xl  bg-slate-200  text-slate-400"><span className='text-lg font-fourthStyle'>Fillter</span></i>
   <div
          className={`invisible absolute top-12 z-50 flex  flex-col gap-5 shadow-2xl bg-slate-200 opacity-75 shadow-white     w-28 rounded-lg h-52  justify-center group-hover:visible  items-center `}
        >
          <Link to={"/viewallproducts/all"} className={`hover:scale-[1.1] `}>All Product</Link> 
          <Link to={"/viewallproducts/phone"} className="hover:scale-[1.1]">Phones</Link>
          <Link to={"/viewallproducts/earphone"} className="hover:scale-[1.1]">Earphones </Link>
          <Link to={"/viewallproducts/lap"} className="hover:scale-[1.1]">Laptops </Link>
        </div>
   </div>
  </div>
  
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
