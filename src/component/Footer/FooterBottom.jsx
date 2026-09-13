import React from 'react'

const FooterBottom = () => {
  return (
    <div className='flex justify-between text-slate-400 border-t-[1px] border-gray-100'>
        <p className='mt-10'>© 2026 Dev Stack. All rights reserved.</p>
        <ul className='flex justify-evenly gap-10 mt-10'>
            <li>Privacy</li>
            <li>Terms</li>
        </ul>
    </div>
  )
}

export default FooterBottom