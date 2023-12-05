import React, { useEffect, useState } from 'react'
import { adminDeleteProductAPI, adminGetAllProductAPI } from '../../axios/allAPI/adminAPI'
import { ToastContainer,toast } from 'react-toastify'
import { BASE_URL } from '../../axios/baseURL'
import AdminEditProduct from './AdminEditProduct'
import { adminProducEditContext } from '../../Context/CreateContext';
import { adminAddProductContext } from '../../Context/CreateContext'
import { useContext } from 'react';
function AdminProduct() {
    const {adminAddProductRespose,setAdminAddProductRespose}=useContext(adminAddProductContext)
    const {adminProducEditResponse,setAdminProducEditResponse}=useContext(adminProducEditContext)
    const[token,setToken]=useState("")
    const [productDataFromDB,setProductDataFromDB]=useState([])
    const adminGetAllProduct=async()=>{
                const result=await adminGetAllProductAPI()
                if(result.status===200){
                    // console.log("all data from ADminProduct.jsx",result.data)
                    setProductDataFromDB(result.data)
                }else{
                     toast.warning(result.response.data)
                }
    }
    
    useEffect(()=>{
        adminGetAllProduct()
    },[adminProducEditResponse,adminAddProductRespose])

    useEffect(()=>{
        const adminToken=sessionStorage.getItem("token")
        if(adminToken){
            setToken(adminToken)
        }
    },[])

    
    
    
    const adminDeleteProduct=async(id)=>{


        //    console.log("gooooooooooooooooooos",id)
        

        if(token){
            const reqHeader={
            
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
                 
             }
            const reqBody={
                productId:id
            }
          
            const result=await adminDeleteProductAPI(reqBody,reqHeader)

            if(result.status===200){
              toast.warning(`${result.data.title} is deleted`)
              adminGetAllProduct()
              }

        

            
        }else{
            toast.warning("Your login was expaired so please Login")
        }
    }

    

  
  return (<>
      
   
    <div className='group min-h-screen lg:pl-[30%]  p-[5%] w-[100%] flex-col flex-shrink  lg:pt-[1%]'>
    
    <div className='w-full  h-28  text-slate-400 font-Lobster text-9xl flex  justify-center ' > Products </div>

   {productDataFromDB?.length>0?
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
                        productDataFromDB?.map((product)=>(
                   
                     
                     <tr key={product._id} className='text-center font-fourthStyle'>

                        <td>{product?.title}</td>
                        <td ><img className='mx-auto h-[70px] w-[80px]' src={`${BASE_URL}/images/${product.uploadimages[1]}`} alt="" /></td>
                        <td>{product?.price}</td>
                        <td><button onClick={()=>adminDeleteProduct(product._id)} className='bg-slate-400 w-[100%] lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >DELETE</button></td>
                         <AdminEditProduct product={product}/>
                        
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

export default AdminProduct

