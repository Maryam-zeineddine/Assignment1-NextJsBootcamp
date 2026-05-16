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
    return <div>Developer not found</div>;
  }
  const developerPosts = posts.filter((post) => post.username === developer.username);


  return (
    <div>
      <h1>{developer.name}'s Posts</h1>
        <div className='space-y-4 mt-6'>
          {developerPosts.map((post) => (
            <div key={post.id} className = 'border p-4 rounded-lg bg-white p-5'>
              <h2 className="text-xl font-semibold text-black">{post.title}</h2>
              <p className = 'text-gray-600'>{post.content}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default page