import React from 'react'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

const Banner = () => {
  return (
    <div className='w-[90%] px-7 mt-5 md:px-7 md:py-7 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 '>
        <BannerLeft />
        <BannerRight />
    </div>
  )
}

export default Banner