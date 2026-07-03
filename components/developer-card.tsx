import Link from 'next/link'
import React from 'react'

type Props = {
  username: string,
  title: string,
  bio: string
}

const DeveloperCard = ({ username, title, bio }: Props) => {
  return (
    <article className='group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
      <div className='mb-4 flex items-center justify-between gap-4'>
        <div>
          <h3 className='text-xl font-semibold text-slate-950'>{username}</h3>
          <p className='mt-1 text-sm text-slate-500'>{title}</p>
        </div>
      </div>
      <p className='mb-5 text-sm leading-6 text-slate-700'>{bio}</p>
      <Link
        href={`/developers/${username}`}
        className='inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-slate-700'
      >
        View Profile
      </Link>
    </article>
  )
}

export default DeveloperCard