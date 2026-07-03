import { topics } from '@/data/topics'
import React from 'react'

const page = () => {
  return (
    <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
      <section className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='mb-10 space-y-4'>
          <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>Discover Topics</p>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950'>Explore what matters most to developers.</h1>
          <p className='max-w-2xl text-base leading-7 text-slate-600'>Discover a broad range of topics from web and mobile development to design, tooling, and project collaboration.</p>
        </div>
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {topics.map((topic) => (
            <div key={topic} className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <h2 className='text-xl font-semibold text-slate-950'>{topic}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
export default page