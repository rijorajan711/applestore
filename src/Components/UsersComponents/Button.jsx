import React from 'react'
import { Link } from 'react-router-dom'

function Button() {
  return (
    <div className='flex justify-center lg:hover:scale-[1.5] duration-1000'>
      <button className='group bg-slate-200 w-60 opacity-70 rounded-3xl h-12 hover:bg-slate-950 duration-700 '><Link to={"/viewallproducts/all"} className='font-Lobster text-lg text-black group-hover:text-green-300'>Click To Explore</Link></button>
    </div>
  )
}

export default Button
