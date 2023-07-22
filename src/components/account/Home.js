import React from 'react'
import Sidebar from './Sidebar'
import Profiles from './Profiles'
import Account from './Account'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <Profiles/>
        <Account />
    </div>
  )
}

export default Home