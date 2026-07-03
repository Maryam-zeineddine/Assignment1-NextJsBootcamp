import { developers } from '@/data/developers'
import React from 'react'

const page = () => {
  const topRatedDevelopers = developers.filter((dev) => dev.rating >= 4.5)
  return (
    <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
      <section className='mx-auto max-w-5xl px-4 sm:px-6'>
        <div className='mb-8 space-y-3'>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950'>Top-Rated Developers</h1>
          <p className='max-w-2xl text-base leading-7 text-slate-600'>Check out highly rated members who are active, knowledgeable, and ready to collaborate.</p>
        </div>
        <div className='space-y-4'>
          {topRatedDevelopers.map((developer) => (
            <div key={developer.username} className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <div className='flex items-center justify-between gap-4'>
                <h2 className='text-xl font-semibold text-slate-950'>{developer.name}</h2>
                <span className='rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700'>Rating {developer.rating}/5</span>
              </div>
              <p className='mt-2 text-sm leading-6 text-slate-600'>{developer.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default page