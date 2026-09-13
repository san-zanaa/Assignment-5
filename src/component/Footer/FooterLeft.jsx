import React from 'react'
import logo from "../../assets/logo-text.png"

const FooterLeft = () => {
  return (
    <div className='flex flex-col items-center text-center md:items-start md:text-left'>
        <div className='flex flex-col items-center md:items-start gap-3'>
            <img src={logo} alt="" className='h-8 w-auto object-contain items-center md:items-start'/>
            <p className='max-w-sm text-[14px] leading-5 text-slate-500'>Curated tools, technologies, and resources for developers building
             modern software.</p>
        </div>
        <div className='mt-5 font-semibold'>
            <ul className='flex items-center gap-5 list-none p-0 text-slate-700'>
                <li><a href="#">Github</a></li>
                <li className='flex items-center gap-3'>
                    <span className='md:hidden'>•</span><a href="#">Twitter</a></li>
                <li className='flex items-center gap-3'>
                    <span className='md:hidden'>•</span><a href="#">LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}

export default FooterLeft