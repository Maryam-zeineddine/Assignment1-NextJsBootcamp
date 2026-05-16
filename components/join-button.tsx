'use client'
import React from 'react'

const joinButton = () => {
  const [joined, setJoined] = React.useState(false);
  return (
    <button onClick={() => setJoined(!joined)}>{joined?'Leave Community':'Join Community'}</button>
  )
}

export default joinButton