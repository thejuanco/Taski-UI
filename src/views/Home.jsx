import React from 'react'
import NavBar from '../components/Home/NavBar'

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <NavBar />
        <h1>Home</h1>
      </div>
    </>
  )
}

export default Home