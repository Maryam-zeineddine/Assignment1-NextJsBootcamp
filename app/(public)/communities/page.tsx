import React from 'react'
import { communities } from '@/data/communities'
import CommunityCard from '@/components/community-card'

const page = () => {
  return (
    <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
      <section className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mb-10'>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950'>Explore Communities</h1>
          <p className='mt-3 max-w-2xl text-base leading-7 text-slate-600'>Browse curated groups based on interests, skillsets, and discussion topics. Everything is organized to help you find a community faster.</p>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {communities.map((community) => (
            <CommunityCard key={community.id} {...community} />
          ))}
        </div>
      </section>
    </main>
  )
}
export default page
