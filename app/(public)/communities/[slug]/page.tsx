import React from 'react'
import { communities } from '@/data/communities'  
import JoinButton from '@/components/join-button'

type Props =
 {
    params : Promise<{slug: string}>
}
const page = async({params}: Props) => {
  const { slug } = await params;
  const community  = communities.find((item) => item.slug === slug);
  return (
<section className='space-y-4'>
    <h1 className='text-3xl font-bold'>{community?.name}</h1>
    <p className='text-gray-500 text-lg'>{community?.description}</p>
    <p className='text-blue-500 font-medium'>{community?.members} members</p>
    <p> Category: {community?.category}</p> 
    <JoinButton/>
  </section>
)
}

export default page