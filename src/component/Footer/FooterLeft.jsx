import React from 'react'
import logo from "../../assets/logo-text.png"

const FooterLeft = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col gap-3'>
            <img src={logo} alt="" className='h-8 w-auto object-contain self-start'/>
            <p className='max-w-sm text-[14px] leading-5 text-slate-500'>Curated tools, technologies, and resources for developers building
             modern software.</p>
        </div>
        <div className='mt-5 font-semibold'>
            <ul className='flex items-center gap-5 list-none p-0 text-slate-700'>
                <li><a href="#">Github</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}

export default FooterLeft