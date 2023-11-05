import React from 'react'
import Image from "next/image";
import Link from 'next/link';


const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav>
            <Link href="/">
                <Image alt='Car-logo'/>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar