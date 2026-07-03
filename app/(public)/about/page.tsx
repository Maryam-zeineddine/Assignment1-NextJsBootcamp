import React from 'react'

const page = () => {
  return (
    <main className='bg-gradient-to-br from-rose-50 via-slate-50 to-cyan-50 py-14'>
      <section className='mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-sm backdrop-blur'>
        <div className='space-y-6'>
          <div className='space-y-3'>
            <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>About the platform</p>
            <h1 className='text-4xl font-semibold tracking-tight text-slate-950'>Developer Community Platform</h1>
          </div>
          <p className='text-base leading-8 text-slate-600'>Developer Community Platform is a place for developers to connect, share knowledge, and collaborate on projects. Our mission is to foster a vibrant and inclusive community where developers of all backgrounds can thrive.</p>
          <div className='rounded-3xl bg-slate-50 p-6'>
            <h2 className='text-2xl font-semibold text-slate-950'>Our Story</h2>
            <p className='mt-3 text-base leading-7 text-slate-600'>Founded in 2024, Developer Community Platform was created to address the need for a centralized hub where developers can find communities, explore topics, and connect with like-minded individuals.</p>
          </div>
          <div className='grid gap-6 lg:grid-cols-2'>
            <div className='rounded-3xl bg-slate-50 p-6'>
              <h2 className='text-2xl font-semibold text-slate-950'>What We Offer</h2>
              <ul className='mt-4 space-y-2 text-base leading-7 text-slate-600'>
                <li>Communities: Join or create communities based on your interests and expertise.</li>
                <li>Topics: Explore a wide range of topics and stay updated with the latest trends in technology.</li>
                <li>Developer Profiles: Connect with developers around the world and showcase your skills and projects.</li>
                <li>Collaboration Opportunities: Find collaborators for your projects and work together to build amazing things.</li>
              </ul>
            </div>
            <div className='rounded-3xl bg-slate-50 p-6'>
              <h2 className='text-2xl font-semibold text-slate-950'>Join Us</h2>
              <p className='mt-3 text-base leading-7 text-slate-600'>Whether you're a seasoned developer or just starting out, we invite you to join our community and be part of our mission to connect developers worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page