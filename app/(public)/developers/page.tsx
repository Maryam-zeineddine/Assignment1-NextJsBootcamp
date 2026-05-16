import React from 'react'
import { developers } from '@/data/developers'
import developerCard from '@/components/developer-card'
import DeveloperCard from '@/components/developer-card'

const page = () => {
  return (
<section className="space-y-6"> 
    <h1 className="text-3xl font-bold">Developer Community Platform</h1>
    <p className="text-gray-500 text-lg">Discover and connect with developers around the world. Join communities, explore topics, and collaborate on projects.</p>
    <div>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Get Started</h2>
      {developers.map((developer) => (
        <DeveloperCard key ={developer.username} {...developer} />
      ))}
      <p className="text-gray-500 text-lg">Explore our communities and find like-minded developers to connect with.</p>
    </div>
  </section>
)
}

export default page