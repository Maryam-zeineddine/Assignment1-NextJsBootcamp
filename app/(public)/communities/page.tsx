import React from 'react'
import { communities } from '@/data/communities'
import CommunityCard from '@/components/community-card'

const page = () => {
  return (
<section className='space-y-3'> 
    <h1 className='text-3xl font-bold'>Explore Communities</h1>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {communities.map((community) => (
        <CommunityCard key={community.id} {...community} />
      ))}
    </div>
  </section>
)
}
export default page
