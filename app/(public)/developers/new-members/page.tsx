import React from 'react'
import { developers } from '@/data/developers'

const page = () => {
  const newMembers = developers.filter((developer) => developer.isNew)
  return (
    <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
      <section className='mx-auto max-w-5xl px-4 sm:px-6'>
        <div className='mb-8 space-y-3'>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950'>New Members</h1>
          <p className='max-w-2xl text-base leading-7 text-slate-600'>Welcome new developers joining the community. Connect with them and discover fresh perspectives.</p>
        </div>
        <div className='space-y-4'>
          {newMembers.map((developer) => (
            <div key={developer.username} className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <h2 className='text-xl font-semibold text-slate-950'>{developer.name}</h2>
              <p className='mt-2 text-sm leading-6 text-slate-600'>{developer.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default page