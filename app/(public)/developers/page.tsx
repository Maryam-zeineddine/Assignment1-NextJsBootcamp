import React from 'react'
import { developers } from '@/data/developers'
import DeveloperCard from '@/components/developer-card'

const page = () => {
  return (
    <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
      <section className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mb-10 space-y-4'>
          <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>Developer Network</p>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950'>Meet developers and grow your network.</h1>
          <p className='max-w-2xl text-base leading-7 text-slate-600'>Discover developers with diverse skills, experience levels, and interests. Connect, learn, and collaborate with people who complement your goals.</p>
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {developers.map((developer) => (
            <DeveloperCard key={developer.username} {...developer} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default page