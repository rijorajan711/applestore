import React from 'react'
import { Link } from 'react-router-dom'

function HomeCategory() {
    return (
        <>
        
        <div className='w-full h-28 mt-10  text-slate-400 font-Lobster text-9xl flex justify-center items-center' > Category </div>
         
        <div className='h-[500px]  lg:h-[600px] mx-[10%] my-[2%] w-[80%]  grid lg:grid-cols-2 gap-10 grid-flow-row mt-10'>
            <div className=' relative group hover:scale-[1.1] duration-1000  flex  bg-no-repeat bg-center bg-cover shadow-2xl rounded-2xl  justify-center items-center bg-[url("https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/09/iPhone-15-series.jpg?ssl=1&quality=80&w=800")] lg:row-span-2 '>
                <div className='z-50 text-white absolute  text-8xl top-[30%] opacity-75 font-fourthStyle group-hover:opacity-0 duration-1000'>PHONES</div>
                <div className='absolute max-w-[60%] z-50 lg:flex-col opacity-0 w-full rotate-45  group-hover:opacity-100  duration-1000 group-hover:rotate-0'>
                     <div><p className='font-Lobster lg:text-2xl text-white '>An iPhone is not just a gadget, it’s an experience that changes the way you live your life.</p></div>
                      <Link to={"/viewallproducts/phone"}><div className='lg:w-[200px] lg:h-14 mt-8 rounded-3xl flex justify-center items-center font-thridStyle bg-slate-300 hover:scale-[1.1] duration-700 hover:bg-indigo-300'><span className='text-2xl text-white'>Shope NOw</span></div></Link>
                    </div>


                <div className='absolute w-[90%] h-[90%]  bg-white opacity-0 group-hover:opacity-20 border border-spacing-9 border-zinc-800 rounded-3xl duration-500'>
                </div>


            </div>

           
            <div className='relative group hover:scale-[1.1] duration-1000 flex bg-no-repeat bg-center bg-cover shadow-2xl rounded-2xl  justify-center items-center bg-[url("https://photos5.appleinsider.com/gallery/54795-110900-Beats-v-AirPods-ANC001-xl.jpg")] '>
            <div className='z-50 text-white absolute  lg:text-8xl text-6xl top-[30%] opacity-90 font-fourthStyle group-hover:opacity-0 duration-1000'>EAR PHONE</div>
            <div className='absolute max-w-[60%] z-50  lg:flex-col opacity-0 w-full  translate-x-64  group-hover:opacity-100   duration-1000 group-hover:translate-x-0'>
                     <div><p className='font-Lobster  lg:text-2xl text-white '>An iPhone is not just a gadget, it’s an experience that changes the way you live your life.</p></div>
                      <Link to={"/viewallproducts/earphone"}><div className='lg:w-[200px] lg:h-14 mt-8 rounded-3xl flex justify-center items-center font-thridStyle bg-slate-300 hover:scale-[1.1] duration-700 hover:bg-indigo-300'><span className='text-2xl text-white'>Shope NOw</span></div></Link>
                    </div>
               
                <div className='absolute w-[90%] h-[90%]  bg-black opacity-0 group-hover:opacity-10 border border-spacing-9 border-zinc-800 rounded-3xl duration-500'>
                </div>
            </div>
          
          
          
            <div className='relative group hover:scale-[1.1] duration-1000 flex bg-no-repeat bg-center bg-cover shadow-2xl rounded-2xl justify-center items-center bg-[url("https://media.architecturaldigest.com/photos/5bd8ac137c86c80e83b4b317/16:9/w_1920,c_limit/MacBook-Air-Keyboard-and-Ports-10302018.jpg")]'>
            <div className='z-50 text-white absolute  text-8xl top-[30%] opacity-90 font-fourthStyle group-hover:opacity-0 duration-1000'>LAP TOP</div>
            <div className='absolute max-w-[60%] z-50 lg:flex-col opacity-0 w-full translate-x-64  group-hover:opacity-100  duration-1000 group-hover:translate-x-0 '>
                     <div><p className='font-Lobster  lg:text-2xl text-white '>An iPhone is not just a gadget, it’s an experience that changes the way you live your life.</p></div>
                      <Link to={"/viewallproducts/lap"}><div className='lg:w-[200px] lg:h-14 mt-8 rounded-3xl flex justify-center items-center font-thridStyle bg-slate-300 hover:scale-[1.1] duration-700 hover:bg-indigo-300'><span className='text-2xl text-white'>Shope NOw</span></div></Link>
                    </div>
               
                <div className=' w-[90%] h-[90%]  bg-white opacity-0 group-hover:opacity-30 shadow-2xl border border-spacing-9 border-zinc-800 rounded-3xl duration-500'>
                </div>

            </div>

        </div>
        </>
    )
}

export default HomeCategory
