import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";


function footer() {
  return (
      <div className='footer bg-[#242424] px-10 pt-10 mt-10 text-white md:pt-16 lg:pt-20 '>
        <div className="footer-wrapper mx-auto grid h-full min-h-[200px] justify-between gap-6 px-4 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-0 ">
        <section className='flex lg:text-lg lg:items-center flex-col'>
          <div className='flex-1'>
            <div className='w-[150px] mb-4 '>
              <a href="/">
                <div className=' flex relative'>
                  <h2 className=' text-3xl'>Mickerl_Codes</h2>
                </div>
              </a>
            </div>
            <p className='my-4'>I'm glad you are here today
              <br/>
              .
            </p>
            <div className='flex gap-6 pb-4'>
              <a href='https://twitter.com/Mickerl_Codes' className=' text-2xl md:text-3xl  '><FaXTwitter /></a>
              <a href='https://www.instagram.com/mickerl_codes/' className='text-2xl md:text-3xl  '><FaInstagram/></a>
              <a href='mailto:nanayawwiafe007@gmail.com' className='text-2xl md:text-3xl '><MdOutlineMailOutline/></a>
              <a href='https://www.linkedin.com/in/mickerl-codes/' className='text-2xl md:text-3xl  hover:text-blue-600 '><FaLinkedinIn /></a>
            </div>
            <a href='mailto:nanayawwiafe007@gmail.com'>nanayawwiafe007@gmail.com</a>
          </div>
        </section>
        <section className='flex flex-col lg:text-lg'>
          <div className='lg:mx-auto lg:w-[200px] '>
            <h3 className='text-xl font-medium uppercase tracking-wider text-pink-600'>Quick links</h3>
            <div className='mt-4 flex flex-col gap-3 capitalize'>
              <a href='/#About'>About</a>
              <a href='/#Project'>Projects</a>
              <a href='/'>Services</a>
            </div>
          </div>
        </section>
        <section className='flex lg:items-center flex-col lg:text-lg '>
          <div className=' lg:mx-auto lg:w-[200px] '>
            <h3 className='text-xl font-medium uppercase tracking-wider'>important links</h3>
            <div className='mt-4 flex flex-col gap-3 capitalize'>
              <a href='/Contact'>Contact</a>
              <a href='/Aboutus'>Blog</a>
            
            </div>
          </div>
        </section>
      </div>
      <div className='sm:text-md mx-auto mt-10 flex h-20 items-center justify-between border-t text-sm md:text-lg lg:text-xl '>
        <p>Copyright @ 2023 |
          <span className='text-brand righteous text-red-600 '> TAPLIX</span>
        </p>
        <p>Designed By:
          <a href='https://twitter.com/Mickerl_Codes'>Mickerl_Codes</a>
        </p>
      </div>
      </div>
  )
}

export default footer