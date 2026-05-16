import Link from 'next/link'
import React from 'react'

const communityCard = ({ name, slug, description, members }: { name: string, slug: string, description: string, members: number }) => {
  return (
    <div className=" border rounded-xl bg-white shadow-md rounded-lg p-6 mb-4 space-y-2">
        <h2 className='text-xl font-semibold'>{name}</h2>
        <p className='text-gray-500'>{slug}</p>
        <p className='text-gray-700'>{description}</p>
        <p className='text-blue-500 font-medium'>{members} members</p>

        <Link href={`/communities/${slug}`} className='text-blue-500 hover:underline'>View Community</Link>
    </div>
  )
}

export default communityCard