import { developers } from '@/data/developers'
import React from 'react'

const page = () => {
    const topRatedDevelopers = developers.filter((dev) => dev.rating >= 4.5);
  return (
    <div>
      <h1>Top-Rated Developers</h1>
      <div className='space-y-4 mt-6'>
        {topRatedDevelopers.map((developer) => (
          <div key={developer.username} className='border p-4 rounded-lg'>
            <h2 className='text-xl font-semibold'>{developer.name}</h2>
            <p className='text-gray-600'>Rating: {developer.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page