import React from 'react'
import { developers } from '@/data/developers'

const page = () => {
    const newMembers = developers.filter((developer) => developer.isNew);
  return (
    <div>
      <h1>New Members</h1>
      <div className='space-y-4 mt-6'>
        {newMembers.map((developer) => (
          <div key={developer.username} className='border p-4 rounded-lg'>
            <h2 className='text-xl font-semibold'>{developer.name}</h2>
            <p className='text-gray-600'> {developer.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page