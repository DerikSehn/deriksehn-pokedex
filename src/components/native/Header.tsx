
import { UserButton } from "@clerk/nextjs"
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
           <Logo/>
           
            <span className="ml-3 text-xl">Dérik Sehn</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about"className="mr-5 hover:text-gray-900">
            About 
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
             Contact 
          </Link>
        </nav>
         <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}

export default Header
