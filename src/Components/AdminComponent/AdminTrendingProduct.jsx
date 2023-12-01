import React, { useEffect, useState } from 'react'
import { adminDeleteTrendingProductAPI, adminGetAllTrendingProductAPI } from '../../axios/allAPI/adminAPI'
import { ToastContainer,toast } from 'react-toastify'
import { BASE_URL } from '../../axios/baseURL'
import AdminEditTrendingProduct from './AdminEditTrendingProduct'
import { adminTrendingProducEditContext } from '../../Context/CreateContext';
import { useContext } from 'react';
function AdminTrendingProduct() {
    
    const {adminTrendingProducEditResponse,setAdminProducEditResponse}=useContext(adminTrendingProducEditContext)
    const[token,setToken]=useState("")
    const [trendingProductDataFromDB,setTrendingProductDataFromDB]=useState([])
    const adminGetAllTrendingProduct=async()=>{
                const result=await adminGetAllTrendingProductAPI()
                if(result.status===200){
                    // console.log("all data from ADminProduct.jsx",result.data)
                    setTrendingProductDataFromDB(result.data)
                }else{
                     toast.warning(result.response.data)
                }
    }
    
    useEffect(()=>{
        adminGetAllTrendingProduct()
    },[adminTrendingProducEditResponse])

    useEffect(()=>{
        const adminToken=sessionStorage.getItem("token")
        if(adminToken){
            setToken(adminToken)
        }
    },[])

    
    
    
    const adminDeleteTrendingProduct=async(id)=>{


        //    console.log("gooooooooooooooooooos",id)
        

        if(token){
            const reqHeader={
            
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
                 
             }
            const reqBody={
                productId:id
            }
          
            const result=await adminDeleteTrendingProductAPI(reqBody,reqHeader)

            if(result.status===200){
              toast.warning(`${result.data.title} is deleted`)
              adminGetAllTrendingProduct()
              }

        

            
        }else{
            toast.warning("Your login was expaired so please Login")
        }
    }

    

  
  return (<>
      
   
    <div className='group min-h-screen lg:pl-[30%]  p-[5%] w-[100%] flex-col flex-shrink  lg:pt-[1%]'>
    
    <div className='w-full  h-28  text-slate-400 font-Lobster text-5xl lg:text-7xl flex  justify-center ' > Trending Products </div>

   {trendingProductDataFromDB?.length>0?
                <table className='w-[100%] border mt-9 leading-10 border-y-2'>
                <thead className='border border-y-2 '>
                    <tr>
                       <th>Product Name</th>
                       <th>Image</th>
                       <th>Price</th>
                       <th>Action</th>
                       <th>Action</th>
                      

                    </tr>
                </thead>
                <tbody>

                  {
                        trendingProductDataFromDB?.map((product)=>(
                   
                     
                     <tr key={product._id} className='text-center font-fourthStyle'>

                        <td>{product?.title}</td>
                        <td ><img className='mx-auto h-[70px] w-[80px]' src={`${BASE_URL}/images/${product.uploadimages[1]}`} alt="" /></td>
                        <td>{product?.price}</td>
                        <td><button onClick={()=>adminDeleteTrendingProduct(product._id)} className='bg-slate-400 w-[100%] lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >DELETE</button></td>
                         <AdminEditTrendingProduct product={product}/>
                        
                     </tr>
                     
                   

                    ))
                    
                    

                  }

                        
                   

                           
                </tbody>
            </table>:<p>sorry you does not have any product </p>
                }
    </div>
    <ToastContainer  position="top-right" autoClose={2000} />
    </>
  )
}

export default AdminTrendingProduct

