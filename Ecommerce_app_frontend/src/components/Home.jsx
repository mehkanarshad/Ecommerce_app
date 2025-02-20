import React from 'react'
import Logout from './Logout'
import DeleteProfile from './DeleteProfile'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='inner-page main-page'>
      <image src='https://images.unsplash.com/photo-1543698666-124b9208bb03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D' width="100vw" height="100%"/>
      <p className='main-heading'>Home</p>
    </div>
  )
}
