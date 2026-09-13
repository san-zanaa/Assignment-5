import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

const FooterMain = () => {
  return (
    <div className='w-[90%] mx-auto flex justify-evenly'>
        <FooterLeft />
        <FooterRight />
    </div>
  )
}

export default FooterMain