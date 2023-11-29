import React from 'react'

function Wishlist() {
  return (
<div className='group min-h-screen w-[100%] flex-col pt-[30%] lg:pt-[10%]'>
    
    <div className='w-full  h-28  text-slate-400 font-Lobster text-9xl flex  justify-center ' > WishList </div>


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
                    <tr className='text-center font-fourthStyle'>
                        <td>i Phone 15</td>
                        <td ><img className='mx-auto h-[70px]' src="https://www.apple.com/newsroom/images/2023/09/apple-offers-more-ways-to-order-the-new-lineups/geo/Apple-iPhone-15-Pro-lineup-natural-titanium-geo_inline.jpg.large.jpg" alt="" /></td>
                        <td>75000</td>
                        <td><button className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >REMOVE</button></td>
                        <td><button className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >ADD TO CART</button></td>
                    </tr>
                        
                    <tr className='text-center font-fourthStyle'>
                        <td>i Phone 15</td>
                        <td ><img className='mx-auto h-[70px]' src="https://www.apple.com/newsroom/images/2023/09/apple-offers-more-ways-to-order-the-new-lineups/geo/Apple-iPhone-15-Pro-lineup-natural-titanium-geo_inline.jpg.large.jpg" alt="" /></td>
                        <td>75000</td>
                        <td><button className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >REMOVE</button></td>
                        <td><button className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >ADD TO CART</button></td>
                    </tr>

                    <tr className='text-center font-fourthStyle'>
                        <td>i Phone 15</td>
                        <td ><img className='mx-auto h-[70px]' src="https://www.apple.com/newsroom/images/2023/09/apple-offers-more-ways-to-order-the-new-lineups/geo/Apple-iPhone-15-Pro-lineup-natural-titanium-geo_inline.jpg.large.jpg" alt="" /></td>
                        <td>75000</td>
                        <td><button className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >REMOVE</button></td>
                        <td><button className='bg-slate-400 lg:w-[50%] rounded-lg text-white hover:bg-slate-600' >ADD TO CART</button></td>
                    </tr>

                           
                </tbody>
            </table>

    </div>

  )
}

export default Wishlist
