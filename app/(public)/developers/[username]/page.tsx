import React from 'react'
import { developers } from '@/data/developers'
import { posts } from '@/data/posts';
import Link from 'next/link';

const page = async ({params}: {params: {username: string}} ) => {
    const {username} = await params;
    const developer = developers.find((item)=> item.username === username);
    if (!developer) {
        return <div>Developer not found</div>
    }
    const developerPosts = posts.filter((post) => post.username === username);    

    return (
<section className='space-y-6'>
    <h1 className='text-3xl font-bold'>{developer.name}</h1>
    <p className='text-gray-500 text-lg'>{developer.title}</p>
    <p className='text-gray-700 text-lg'>{developer.bio}</p>
    <div className='space-y-4 mt-6'>
        {developerPosts.map((post) => (
            <div key={post.id} className='border p-4 rounded-lg'>
                <h2 className='text-xl font-semibold'>{post.title}</h2>
                <p className='text-gray-600'>{post.content}</p>
                <Link href={`/developers/${username}/posts/${post.id} `} className='text-blue-500 hover:underline'>
                    Read more
                </Link>
            </div>
        ))}
    </div>
</section>
)
}
export default page