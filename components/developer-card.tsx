import Link from 'next/link'
import React from 'react'
type Props = {
    username : string,
    title : string,
    bio : string
}
const developerCard = ({username, title, bio}: Props) => {
  return (
    <div>
      <h3 className='text-lg font-semibold'>{username}</h3>
      <p className='text-gray-500'>{title}</p>
      <p className='text-gray-700'>{bio}</p>
    <Link href={`/developers/${username}`} className='text-blue-500 hover:underline'>View Profile</Link>
    </div>
  )
}

export default developerCard