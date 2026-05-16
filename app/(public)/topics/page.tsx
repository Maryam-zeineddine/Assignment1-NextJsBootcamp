import { topics } from '@/data/topics'
import React from 'react'

const page = () => {
  return (
<section className='space-y-3'>
    <h1 className='text-3xl font-bold'>Explore Topics</h1>
    <p className='text-gray-500 text-lg'>Discover a wide range of topics and stay updated with the latest trends in technology. Whether you're interested in web development, data science, or mobile app development, we have something for everyone.</p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {topics.map((topic) => (
        <div key={topic} className='border border-gray-300 rounded-lg p-4'>
          <h2 className='text-xl font-semibold'>{topic}</h2>      
        </div>
      ))}
    </div>
  </section>
)
}
export default page