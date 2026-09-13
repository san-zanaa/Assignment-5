import { useState } from 'react'
import img from "../../assets/logo-text.png"
import hamburgerIcon from "../../assets/hamburger.png"

function Navbar() {
    const[isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-[95%] mx-auto h-22 px-10 md:px-4 flex justify-between items-center md:flex md:justify-between bg-white sticky top-0 z-50'>
        <div className='md:hidden flex items-center justify-start'>
            <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
                <img src={hamburgerIcon} alt="" className="h-8 w-8 object-contain"/>
            </button>
        </div>
        <div className='flex items-center justify-center md:justify-start justtify-self-center md:justify-self-auto '>
            <img src={img} alt="" className="h-8 w-auto object-contain"/>
        </div>

            <ul className='hidden md:flex flex-row gap-5 list-none items-center'>
                <li className='text-[#DB2777]'><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

        <div className='flex items-center gap-4 justify-self-end whitespace-nowrap'>
            <button className='text-[#475569] whitespace-nowrap shrink-0'>Sign In</button>
            <button className='bg-[#DB2777] px-5 py-2 rounded-full text-white hover:bg-[#f72585] cursor-pointer'>Sign Up</button>
        </div>

        {isOpen && (
            <div className='absolute top-24 left-0 w-48 text-left bg-white md:hidden'>
            <ul className='flex flex-col gap-5 px-6 py-5 items-start list-none'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        )}
    </div>
  )
}

export default Navbar