import React from 'react'
import { developers } from '@/data/developers'
import { posts } from '@/data/posts'
import Link from 'next/link'

const page = async ({ params }: { params: { username: string } }) => {
  const { username } = await params;
  const developer = developers.find((item) => item.username === username);

  if (!developer) {
    return (
      <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
        <section className='mx-auto max-w-4xl px-4 sm:px-6'>
          <div className='rounded-[2rem] border border-slate-200 bg-white p-10 text-slate-700 shadow-sm'>Developer not found</div>
        </section>
      </main>
    )
  }

  const developerPosts = posts.filter((post) => post.username === username);

  return (
    <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
      <section className='mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm'>
        <div className='space-y-4'>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950'>{developer.name}</h1>
          <p className='text-base font-medium text-slate-700'>{developer.title}</p>
          <p className='max-w-3xl text-base leading-7 text-slate-600'>{developer.bio}</p>
        </div>
        <div className='mt-10 space-y-5'>
          <h2 className='text-2xl font-semibold text-slate-950'>Recent posts</h2>
          {developerPosts.map((post) => (
            <article key={post.id} className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
              <h3 className='text-xl font-semibold text-slate-950'>{post.title}</h3>
              <p className='mt-2 text-sm leading-7 text-slate-600'>{post.content}</p>
              <Link href={`/developers/${username}/posts/${post.id}`} className='mt-4 inline-flex text-sm font-semibold text-slate-900 transition hover:text-slate-700'>
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
export default page