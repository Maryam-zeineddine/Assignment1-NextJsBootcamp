import Link from 'next/link'
import React from 'react'

type Props = {
  name: string,
  slug: string,
  description: string,
  members: number
}

const CommunityCard = ({ name, slug, description, members }: Props) => {
  return (
    <article className='overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
      <div className='mb-4'>
        <h2 className='text-xl font-semibold text-slate-950'>{name}</h2>
        <p className='mt-1 text-sm uppercase tracking-[0.2em] text-slate-500'>{slug}</p>
      </div>
      <p className='mb-5 text-sm leading-6 text-slate-700'>{description}</p>
      <div className='mb-5 text-sm font-medium text-slate-900'>{members} members</div>
      <Link
        href={`/communities/${slug}`}
        className='inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-slate-700'
      >
        View Community
      </Link>
    </article>
  )
}

export default CommunityCard