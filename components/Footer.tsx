import Link from 'next/link'
import React from 'react'
import { FaSquareFacebook,FaSquareXTwitter,FaSquareInstagram,FaSquareWhatsapp } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-secondary pt-7 md:pt-12 pb-6 ">
      <div className='py-3 flex flex-col justify-center items-center gap-8'>
        <div className='flex justify-center items-center gap-5 py-3 cursor-pointer'>
          <Link href={"#"}>
        <FaSquareFacebook className='h-6 md:h-8 w-6 md:w-8 bg-primary rounded-md hover:bg-opacity-70 hover:animate-appearance-in'/>
        </Link>
        <Link href={"#"}>
          <FaSquareXTwitter className='h-6 md:h-8 w-6 md:w-8 bg-primary rounded-md hover:bg-opacity-70 hover:animate-appearance-in'/>
          </Link>
          <Link href={"#"}>
          <FaSquareInstagram className='h-6 md:h-8 w-6 md:w-8 bg-primary rounded-md hover:bg-opacity-70 hover:animate-appearance-in'/>
          </Link>
          <Link href={"#"}>
          <FaSquareWhatsapp className='h-6 md:h-8 w-6 md:w-8 bg-primary rounded-md hover:bg-opacity-70 hover:animate-appearance-in'/>
          </Link>
        </div>
        <h3 className="font-extrabold text-3xl font-logo_header text-gradient tracking-wider text-center">
            WEBIBEE WORLD
          </h3>
        <p className='text-white text-center'>WEBIBEE &copy;{`Copyright ${new Date().getFullYear()}`} - All rights reserved</p>
      </div>
    </footer>
  )
}



export default Footer