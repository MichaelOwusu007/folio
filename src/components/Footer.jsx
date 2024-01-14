import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer >
    <div className="py-36 flex flex-col items-center justify-center">
        <div className='flex gap-6 pb-4'>
            <a href='' className=' text-2xl md:text-4xl  '><FaXTwitter /></a>
            <a href='https://twitter.com/Mickerl_dev' className='text-2xl md:text-4xl  '><FaInstagram /></a>
            <a href='mailto:nanayawwiafe007@gmail.com' className='text-2xl md:text-4xl '><MdOutlineMailOutline /></a>
            <a href='https://www.linkedin.com/in/mickerl-codes/' className='text-2xl md:text-4xl'><FaLinkedinIn /></a>
            <a href='https://github.com/MichaelOwusu007' className='text-2xl md:text-4xl '><FaGithub /></a>
            {/*
            <a href='http://www.youtube.com/@mickerl_Codes' className='text-2xl md:text-4xl '><FaYoutube /></a>*/}
        </div>
        <a href='mailto:michaelowusuwiafe007@gmail.com'>made with 💗 by Mickerl_Codes.</a>
    </div>
    <div className='sm:text-md mx-auto mt-10 flex h-20 items-center justify-between border-t text-sm md:text-lg lg:text-xl px-1 '>
        <p>Copyright @ 2023 |
            <span className='text-brand font-bold text-red-600'>PORTFOLIO</span>
        </p>
        <p>Designed By:
            <a href='https://twitter.com/Mickerl_dev'>Mickerl_Codes</a>
        </p>
    </div>
</footer>
  )
}

export default Footer