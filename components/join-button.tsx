'use client'
import React from 'react'

const JoinButton = () => {
  const [joined, setJoined] = React.useState(false);
  return (
    <button
      type='button'
      onClick={() => setJoined(!joined)}
      className='inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800'
    >
      {joined ? 'Leave Community' : 'Join Community'}
    </button>
  )
}

export default JoinButton