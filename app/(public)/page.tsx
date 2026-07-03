import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
      <section className='mx-auto max-w-5xl px-4 text-slate-950 sm:px-6'>
        <div className='rounded-[2rem] border border-slate-200 bg-white/80 p-10 shadow-sm backdrop-blur'>
          <p className='mb-3 text-sm uppercase tracking-[0.3em] text-slate-500'>Developer Community</p>
          <h1 className='mb-6 text-4xl font-semibold tracking-tight sm:text-5xl'>Connect with developers and build better projects.</h1>
          <p className='mb-8 max-w-2xl text-lg leading-8 text-slate-600'>Discover communities, explore topics, and meet developers from around the world. Get started with curated resources and collaboration opportunities.</p>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <Link href='/communities' className='inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>Browse Communities</Link>
            <Link href='/developers' className='inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'>Find Developers</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page