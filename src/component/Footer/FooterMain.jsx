import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import FooterBottom from './FooterBottom'

const FooterMain = () => {
  return (
    <div className='w-[90%] mx-auto'>
        <div className='flex flex-col gap-10 md:flex-row md:justify-between md:gap-20 mb-20'>
          <FooterLeft />
          <FooterRight />
        </div>
        <div className='mb-16'>
          <FooterBottom />
        </div>
    </div>
  )
}

export default FooterMain