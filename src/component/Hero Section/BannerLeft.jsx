import React from 'react'

const BannerLeft = () => {
  return (
     <div className='w-full md:w-1/2 text-center md:text-left'>

      <div>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          <span className='text-[#0F172A]'>
           Build Your Ideal <br />
          </span>

          <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>
           Development Stack
          </span>
        </h1>

        <p className='mt-5 text-base md:text-lg leading-7 md:leading-8'>
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>
      </div>

      <div className='flex items-center justify-center md:justify-start gap-3 md:gap-5 mt-6'>
        <button className='flex-1 md:flex-none bg-linear-to-r from-[#F97316] to-[#EC4899] text-white rounded-md px-4 md:px-6 py-3'>
          Explore Technologies
        </button>

        <button className='flex-1 md:flex-none bg-white text-black rounded-md border border-[#CBD5E1] px-4 md:px-6 py-3'>
          Learn More
        </button>
      </div>

    </div>
  )
}

export default BannerLeft