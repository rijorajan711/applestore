import React,{useState} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { adminTrendingProductUpdationSubmitAPI } from '../../axios/allAPI/adminAPI';
import { adminTrendingProducEditContext } from '../../Context/CreateContext';
import { useContext } from 'react';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'100%',
  bgcolor: 'black',
  boxShadow: 24,
  p:5,
};

function  AdminEditTrendingProduct(product) {
    const {adminTrendingProducEditResponse,setAdminTrendingProducEditResponse}=useContext(adminTrendingProducEditContext)
    const [displayFileInputForUpdation,setDisplayFileInputForUpdation]=useState(false)
    const [existingTrendingProductValue,setExistingTrendingProductValue]=useState({
        productid:product.product._id,
        title:product.product.title,
        description:product.product.description,
        category:product.product.category,
        price:product.product.price,
        uploadimages:""
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {

        setExistingTrendingProductValue ({
            productid:product.product._id,
            title:product.product.title,
            description:product.product.description,
            category:product.product.category,
            price:product.product.price,
            uploadimages:""
        })
        setOpen(false);
        setDisplayFileInputForUpdation(false)
    }
    

    const adminTrendingProductUpdationSubmit=async()=>{
        // console.log("testinggg type of product.product.uploadimages",product.product.uploadimages )
        const token =sessionStorage.getItem("token")
        const {productid,title,description,category,price,uploadimages}=existingTrendingProductValue
        
        if(productid && title && description && category && price){
            
            if(token){
                
                
                  const reqBody=new FormData()
                  reqBody.append("productid",productid)
                  reqBody.append("title",title)
                  reqBody.append("description",description)
                  reqBody.append("category",category)
                  reqBody.append("price",price)
                  if(uploadimages){
                    // console.log("insde innnnnnnn yessssssssssssss uploaad imageesssssss")
                     for(let i=0;i<uploadimages.length;i++){
                        reqBody.append("uploadimages",uploadimages[i])
                     }
                  }else{
                      
                      reqBody.append("uploadimages",product.product.uploadimages)

                  }

                  
                  if(uploadimages){

                       if(uploadimages.length!=4){
                        toast("Please select 4 images ")
                      }else{

                        const reqHeader={
                            "Content-Type":"multipart/form-data",
                             "Authorization":`Bearer ${token}`
                          }
  
                      const result=await adminTrendingProductUpdationSubmitAPI(reqBody,reqHeader)
                      if(result.status===200){
                          console.log("edited successfully")
                          setAdminTrendingProducEditResponse(result.data)
                          
                          handleClose()
                          
  
                          // console.log("from multiformmmmmm",result.data)
                      }else{
                          toast(result.response.data)
  
                        
                      }

                      }

                      

                    }else{
                        const reqHeader={
                            "Content-Type":"application/json",
                             "Authorization":`Bearer ${token}`
                          }
                          
                          const result=await adminTrendingProductUpdationSubmitAPI(reqBody,reqHeader) 
                          if(result.status===200){
                            toast("edited successfully")
                            setAdminTrendingProducEditResponse(result.data)
                            handleClose()
                            // console.log("from application/json",result.data)
                        }else{
                            // console.log("from application/json",result.response.data)
                        }
                    }
                   
                     
                
              }else{
                toast("Please Login Mr.Admin")
              }

          }else{
            toast("Please fill the form completely")
          }
   }




   
  

    // console.log(existingProductValue)
    
  return (
    <>
        <td><button onClick={handleOpen} className='bg-slate-400 w-[100%] lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >EDIT</button></td>
      

        <Modal
   
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>



    <div className='h-screen bg-no-repeat bg-center bg-cover w-full bg-[url("https://c0.wallpaperflare.com/preview/394/192/959/black-apple-watch-on-iphone-x.jpg")]'>
      <div className='w-full  h-28  text-slate-400 font-Lobster text-5xl flex  justify-center ' >Edit Trending Products</div>
      <div className='h-full w-full flex flex-col  gap-4 pl-[30%]'>
      
      
      <div className='w-[70%] h-[8%] flex gap-9 lg:gap-6 flex-shrink items-center'>
      <label  className='text-white font-fourthStyle text-xl lg:text-3xl w-[30%]'>Product Title</label>
      <input type='text' value={existingTrendingProductValue.title}  onChange={(e)=>setExistingTrendingProductValue({...existingTrendingProductValue,title:e.target.value})} className='bg-white focus:outline-none w-[70%] h-full rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Product Title'></input>
      </div>

      <div className='w-[70%] h-[8%] flex gap-6 flex-shrink items-center'>
      <label className='text-white font-fourthStyle text-xl lg:text-3xl w-[35%] lg:w-[30%]'>Description</label>
      {/* onChange={(e)=>setAdminProductDetails({...adminProductDetails,description:e.target.value})} */}
      <textarea type="text" value={existingTrendingProductValue.description} onChange={(e)=>setExistingTrendingProductValue({...existingTrendingProductValue,description:e.target.value})} className='bg-white focus:outline-none w-[70%] text-center rounded-lg  text-lg font-fourthStyle opacity-60 focus:opacity-90'  placeholder='Description'></textarea>
      </div>
      {/* <input type='text' className='bg-white focus:outline-none w-[70%] h-full  rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Description'></input> */}

      <div className='w-[70%] h-[8%] flex gap-6 flex-shrink items-center'>
      <label className='text-white font-fourthStyle text-xl shrink lg:text-3xl w-[35%] lg:w-[30%]'>Category</label>
      <input type='text' value={existingTrendingProductValue.category} onChange={(e)=>setExistingTrendingProductValue({...existingTrendingProductValue,category:e.target.value})} className='bg-white focus:outline-none w-[70%] h-full rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Category'></input>
      </div>

      <div className='w-[70%] h-[8%] flex gap-9 lg:gap-6 flex-shrink items-center'>
      <label className='text-white font-fourthStyle text-xl lg:text-3xl w-[35%] lg:w-[30%]'>Price</label>
      <input type='text' value={existingTrendingProductValue.price} onChange={(e)=>setExistingTrendingProductValue({...existingTrendingProductValue,price:e.target.value})} className='bg-white focus:outline-none w-[70%] h-full rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' placeholder='Price'></input>
      </div>

      <div className='w-[70%] h-[8%] flex gap-6 flex-shrink items-center'>
      <label className='text-white font-fourthStyle text-xl lg:text-3xl w-[35%] lg:w-[30%]'>Upload Image</label>

     {displayFileInputForUpdation? <input  type='file' onChange={(e)=>setExistingTrendingProductValue({...existingTrendingProductValue,uploadimages:e.target.files})} className='bg-white  focus:outline-none w-[70%] h-full rounded-lg text-center text-lg font-fourthStyle opacity-60 focus:opacity-90' multiple></input>
     : <button onClick={()=>setDisplayFileInputForUpdation(true)} className='bg-zinc-900 text-white w-[70%] h-full rounded-lg text-center text-xs sm:text-lg font-fourthStyle '>Click here to change Existing images</button>}
      </div>



     <div className='flex gap-3 justify-center mt-7'>
      <button onClick={handleClose}  className='h-[50px] rounded-md w-[20%] bg-fuchsia-200 hover:bg-fuchsia-300'>Back</button>
      <button onClick={adminTrendingProductUpdationSubmit}  className='h-[50px] rounded-md w-[20%] bg-fuchsia-200 hover:bg-fuchsia-300'>Submit</button>

    
     </div>

      </div>

       
    </div>


    
    </Typography>
  </Box>

</Modal>
<ToastContainer  position="top-right" autoClose={2000} />
    </>
  )
}

export default AdminEditTrendingProduct
     

     


    

    

