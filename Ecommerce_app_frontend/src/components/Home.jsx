import React from 'react'
import Logout from './Logout'
import DeleteProfile from './DeleteProfile'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Logout/>
      <DeleteProfile/>
    </div>
  )
}
