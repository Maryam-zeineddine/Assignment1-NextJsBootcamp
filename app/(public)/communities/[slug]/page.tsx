import React from 'react'
import { communities } from '@/data/communities'
import JoinButton from '@/components/join-button'

type Props = {
  params: Promise<{ slug: string }>
}

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const community = communities.find((item) => item.slug === slug);

  return (
    <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
      <section className='mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm'>
        <div className='space-y-5'>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950'>{community?.name}</h1>
          <p className='text-base leading-8 text-slate-600'>{community?.description}</p>
          <div className='flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600'>
            <span className='rounded-full bg-slate-100 px-3 py-1'>{community?.members} members</span>
            <span className='rounded-full bg-slate-100 px-3 py-1'>Category: {community?.category}</span>
          </div>
        </div>
        <div className='mt-8'>
          <JoinButton />
        </div>
      </section>
    </main>
  )
}

export default page