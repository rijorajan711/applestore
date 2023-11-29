import React from 'react'

function VIewCart() {
  return (
<div className='group min-h-screen w-[100%] flex-col pt-[30%] lg:pt-[10%]'>
    
<div className='w-full  h-28  text-slate-400 font-Lobster text-9xl flex  justify-center ' > Cart </div>
    <div className='w-[100%] mt-[5%] grid gap-2  lg:grid-cols-6 '>
    <div className='col-span-4  bg-slate-100  '>
        <table className='w-[100%] border leading-10 border-y-2'>
            <thead className='border border-y-2 '>
                <tr>
                   <th>Product Name</th>
                   <th>Image</th>
                   <th>Quantity</th>
                   <th>Price</th>
                   <th>Action</th>
                   <th>Total</th>

                </tr>
            </thead>
            <tbody>
                <tr className='text-center font-fourthStyle'>
                    <td>i Phone 15</td>
                    <td ><img className='mx-auto h-[70px]' src="https://www.apple.com/newsroom/images/2023/09/apple-offers-more-ways-to-order-the-new-lineups/geo/Apple-iPhone-15-Pro-lineup-natural-titanium-geo_inline.jpg.large.jpg" alt="" /></td>
                    <td className='flex justify-center gap-5 items-center'>3 <div className='flex flex-col'><i class="fa-solid fa-angle-up"></i> <i class="fa-solid fa-angle-down"></i></div></td>
                    <td>75000</td>
                    <td><button className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600 text-' >REMOVE</button></td>
                    <td>225000</td>
                </tr>
                    
                <tr className='text-center font-fourthStyle'>
                    <td>i Phone 15</td>
                    <td ><img className='mx-auto h-[70px]' src="https://www.apple.com/newsroom/images/2023/09/apple-offers-more-ways-to-order-the-new-lineups/geo/Apple-iPhone-15-Pro-lineup-natural-titanium-geo_inline.jpg.large.jpg" alt="" /></td>
                    <td className='flex justify-center gap-5 items-center'>3 <div className='flex flex-col'><i class="fa-solid fa-angle-up"></i> <i class="fa-solid fa-angle-down"></i></div></td>
                    <td>75000</td>
                    <td><button className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >REMOVE</button></td>
                    <td>225000</td>
                </tr>

                <tr className='text-center font-fourthStyle'>
                    <td>i Phone 15</td>
                    <td ><img className='mx-auto h-[70px]' src="https://www.apple.com/newsroom/images/2023/09/apple-offers-more-ways-to-order-the-new-lineups/geo/Apple-iPhone-15-Pro-lineup-natural-titanium-geo_inline.jpg.large.jpg" alt="" /></td>
                    <td className='flex justify-center gap-5 items-center'>3 <div className='flex flex-col'><i class="fa-solid fa-angle-up"></i> <i class="fa-solid fa-angle-down"></i></div></td>
                    <td>75000</td>
                    <td><button className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >REMOVE</button></td>
                    <td>225000</td>
                </tr>

               

                       
            </tbody>
        </table>
    </div>
    <div className='lg:col-span-2 content-center col-span-4 bg-slate-50 flex flex-col justify-center gap-5'>
     <div className='w-[80%] h-[250px] mx-auto bg-gradient-to-br from-slate-200  to-gray-900 rounded-3xl gap-6 flex flex-col items-center pt-6'>
       <h1 className='text-slate-700  font-thridStyle text-4xl'>Cart Total</h1>
       <h1 className='font-fourthStyle text-2xl'>Quantity: <span className='text-5xl  font-Lobster text-orange-500'>12</span></h1>
       <h1 className='font-fourthStyle text-2xl'>Total Amount: <span className='text-5xl  font-Lobster text-orange-500'>300000</span></h1>
       
     </div>
     <div className='w-[80%] mx-auto flex justify-center'>

      <button className='w-[100%]  rounded-2xl h-[50px] bg-slate-300 hover:scale-[1.1] duration-1000'>PROCEED TO CHECKOUT</button>
     </div>
    </div>
  
</div>
    
    </div>
  )
}

export default VIewCart
