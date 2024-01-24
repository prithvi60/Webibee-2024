import Link from 'next/link'
import React from 'react'
// import { FaSquareFacebook,FaSquareXTwitter,FaSquareInstagram,FaSquareWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import { FaLinkedin,FaInstagram,FaLinkedinIn   } from "react-icons/fa";
import Navlink from './Navlinks';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-7 md:pt-12 pb-6 ">
      <div className='py-3 flex flex-col justify-center items-center gap-8'>
        <div className='flex justify-center items-center gap-5 py-3 cursor-pointer'>
          <Link href={"#"}>
          <FaLinkedinIn  className='h-6 md:h-8 w-6 md:w-8 text-white rounded-md hover:opacity-70 hover:animate-appearance-in hover:text-primary'/>
          </Link>
          <Link href={"#"}>
          <FaInstagram className='h-6 md:h-8 w-6 md:w-8 text-white rounded-md hover:opacity-70 hover:animate-appearance-in hover:text-primary'/>
          </Link>
        </div>
          <Navlink/>
        <p className='text-white text-center font-Lato font-normal'><span className='font-Caveat font-semibold text-lg xl:text-xl animate-pulse mx-1.5 capitalize'>Webibee</span>  &copy;{`Copyright ${new Date().getFullYear()}`} - All rights reserved</p>
      </div>
    </footer>
  )
}



export default Footer