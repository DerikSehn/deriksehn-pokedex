
 import Link from "next/link"
import React, { useEffect, useState } from "react"
import Logo from "./Logo"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Star1 from "./Star1"


const Header = () => {

  return (
    <header className="fixed w-full top-0 text-gray-600 body-font z-10" >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="group flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Logo />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="https://wa.link/b9rwyc" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link href="http://deriksehn-portifolio.s3-website.us-east-2.amazonaws.com/" className="mr-5 hover:text-gray-900">
            About
          </Link>
        </nav>
        <div/>
      </div>
    </header>
  )
}

export default Header
