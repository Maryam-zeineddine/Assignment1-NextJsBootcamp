import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <nav className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4'>
        <Link href="/" className='inline-flex items-center gap-2'>
          <span className='text-2xl font-semibold tracking-tight text-slate-950'>DevCommunity</span>
          <span className='hidden text-sm text-slate-500 md:inline'>Platform</span>
        </Link>
        <ul className='flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600'>
          <li>
            <Link href='/' className='transition hover:text-slate-900'>Home</Link>
          </li>
          <li>
            <Link href='/about' className='transition hover:text-slate-900'>About</Link>
          </li>
          <li>
            <Link href='/communities' className='transition hover:text-slate-900'>Communities</Link>
          </li>
          <li>
            <Link href='/topics' className='transition hover:text-slate-900'>Topics</Link>
          </li>
          <li>
            <Link href='/developers' className='transition hover:text-slate-900'>Developers</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
