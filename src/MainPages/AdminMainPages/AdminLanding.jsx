import React from 'react'
import { Link } from 'react-router-dom'

function AdminLanding() {
  const handleProductMore=()=>{
     document.getElementById('productMore').classList.toggle("hidden")
     document.getElementById('productMoreButton').classList.toggle("rotate-180")
  }

  const handleTrendingProductMore=()=>{
    document.getElementById('trendingProductMore').classList.toggle("hidden")
    document.getElementById('trendingProductMoreButton').classList.toggle("rotate-180")
 }


  const handleUserMore=()=>{
    document.getElementById('userMore').classList.toggle("hidden")
    document.getElementById('userMoreButton').classList.toggle("rotate-180")
 }

 const handleNavbarMore=()=>{
    document.getElementById('navbarMore').classList.toggle("-left-[300px]")
    document.getElementById('navbarMoreButton').classList.toggle('left-[300px]')

 }
  return (
  
      <div >
      <button id='navbarMoreButton' onClick={handleNavbarMore} className=' absolute text-white text-3xl bg-slate-400  w-[50px] h-[50px] '><i class="z-50 fa-solid fa-bars"></i></button>
      <div id='navbarMore' className='z-10 absolute top-0 p-5 min-h-screen w-[300px]  -left-[300px] lg:left-0  bg-white shadow-xl flex gap-6 flex-col duration-1000 '>
      <h1 className='text-gray-500 text-center font-Lobster text-6xl'>Dashboard</h1>
       
       <div>
       <div className='flex items-center '>
          <i class="fa-solid fa-house text-lg text-gray-600"></i>
         
          <Link to={"/admin/landing"}><div className='font-fourthStyle ml-2 text-xl'>Home</div> </Link>   
            </div> 
        </div>

      
      <div className='group flex flex-col'>
   <div className='flex items-center justify-between hover:cursor-pointer' onClick={handleProductMore} >
           <div className='flex items-center '>
          <i class="fa-brands fa-product-hunt text-lg text-gray-600"></i>
          <div className='font-fourthStyle ml-2 text-xl'>Products</div>    
            </div> 
            <i id='productMoreButton'  class="fa-solid  fa-chevron-down duration-1000"></i>
           
      </div>
      <div id='productMore' className='flex flex-col hidden gap-3 m-5 duration-10000 '>
        <Link to={"/admin/landing/allproduct"}><h1 className='hover:bg-slate-200'>All Product</h1></Link>
        <Link to={"/admin/landing/addproduct"}><h1 className='hover:bg-slate-200 w-full h-full'>Add Product</h1></Link>
      </div>

      </div>


      <div className='group flex flex-col'>
   <div className='flex items-center justify-between hover:cursor-pointer'  onClick={handleUserMore}>
           <div className='flex items-center '>
           <i class="fa-solid fa-user text-lg text-gray-600"></i>
          
          <div className='font-fourthStyle ml-2 text-xl'>Users</div>    
            </div> 
            <i id='userMoreButton' class="fa-solid  fa-chevron-down duration-1000"></i>
           
      </div>
      <div id='userMore' className='flex flex-col hidden gap-3 m-5 duration-10000 '>
     
       <Link to={"/admin/landing/viewuser"}><h1 className='hover:bg-slate-200 w-full h-full'>Manage Users</h1></Link> 
      </div>

      </div>



      <div className='group flex flex-col'>
   <div className='flex items-center justify-between hover:cursor-pointer' onClick={handleTrendingProductMore} >
           <div className='flex items-center '>
          <i class="fa-brands fa-product-hunt text-lg text-gray-600"></i>
          <div className='font-fourthStyle ml-2 text-xl'>Trending Products</div>    
            </div> 
            <i id='trendingProductMoreButton'  class="fa-solid  fa-chevron-down duration-1000"></i>
           
      </div>
      <div id='trendingProductMore' className='flex flex-col hidden gap-3 m-5 duration-10000 '>
        <Link to={"/admin/landing/trendingallproduct"}><h1 className='hover:bg-slate-200'>Trend All Product</h1></Link>
        <Link to={"/admin/landing/trendingaddproduct"}><h1 className='hover:bg-slate-200 w-full h-full'>Add Trend Product</h1></Link>
      </div>

      </div>
   
        
   
   
   
      </div>
      </div>
      
 
  )
}

export default AdminLanding
