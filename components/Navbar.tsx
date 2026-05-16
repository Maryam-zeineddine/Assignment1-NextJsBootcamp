import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='max-w-7xl mx-auto px-4 py-6 flex justify-between'>
            <Link href="/"><h1 className='text-2xl font-bold'>DevCommunity</h1></Link> 
            <ul className='flex gap-4 text-sn'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/communities"><li>Communities</li></Link>
                <Link href="/topics"><li>Topics</li></Link>
                <Link href="/developers"><li>Developers</li></Link >
            </ul> 
        </nav>
    </header>

)
}

export default Navbar
