import {developers} from '@/data/developers'
import { posts } from '@/data/posts';

import React from 'react'

type Props = {
    params : Promise<{username: string}>   
}
const page = async({params}: Props) => {
  const {username} = await params;
  const developer = developers.find((dev) => dev.username === username);
  if (!developer) {
    return (
      <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
        <section className='mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm'>
          <p className='text-slate-700'>Developer not found</p>
        </section>
      </main>
    );
  }
  const developerPosts = posts.filter((post) => post.username === developer.username);

  return (
    <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
      <section className='mx-auto max-w-4xl space-y-8 px-4 sm:px-6'>
        <div className='rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm'>
          <h1 className='text-4xl font-semibold tracking-tight text-slate-950'>{developer.name}'s Posts</h1>
          <p className='mt-3 max-w-2xl text-base leading-7 text-slate-600'>Explore the latest posts from this developer, featuring insights and updates from their work.</p>
        </div>
        <div className='space-y-4'>
          {developerPosts.map((post) => (
            <article key={post.id} className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
              <h2 className='text-xl font-semibold text-slate-950'>{post.title}</h2>
              <p className='mt-3 text-sm leading-7 text-slate-600'>{post.content}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default page