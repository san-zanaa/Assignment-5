import React from 'react'

const FooterRight = () => {
  return (
    <div className='flex justify-between gap-30'>
        <div>
            <h1 className='font-semibold mb-3'>PRODUCT</h1>
            <ul className='text-slate-500  space-y-2'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </div>
        <div>
            <h1 className='font-semibold mb-3'>COMPANY</h1>
            <ul className='text-slate-500 space-y-2'>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Career</a></li>
            </ul>
        </div>
        <div>
            <h1 className='font-semibold mb-3'>LEGAL</h1>
            <ul className='text-slate-500 space-y-2'>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
        </div>
    </div>  
  )
}

export default FooterRight