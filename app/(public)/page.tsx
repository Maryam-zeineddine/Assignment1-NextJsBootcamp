import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <section className='text-4xl font-bold max-w-7xl mx-auto px-4 py-6'>
    <h1 className='text-3xl font-bold mb-4'>Welcome to Developer Community Platform</h1>
    <p className='text-gray-500 text-lg'>Discover and connect with developers around the world. Join communities, explore topics, and collaborate on projects.</p>
    <div>
      <h2 className='text-2xl font-semibold mt-6 mb-2'>Get Started</h2>
      <p className='text-gray-500 text-lg'>Explore our communities and find like-minded developers to connect with.</p>
      <Link href="/communities" className='text-lg text-blue-500 hover:underline'>Browse Communities</Link>
      <Link href="/developers" className='text-lg text-blue-500 hover:underline ml-4'>Find Developers</Link>  
    </div>
  
  
  </section>
  )
}

export default page