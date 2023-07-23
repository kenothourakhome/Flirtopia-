import React from 'react'
import Navbar from './Navbar'
import Signup from './Signup'
import Signin from './Signin'
import "./Landing.css"


function Landing() {
  return (
    <div className='landing'>
        <Navbar />
        <div className='landingspace'>
            <div>
            <Signup/>
            </div>
            <div>
                {/* #Should display here */}
                <Signin />
            </div>
        </div>

    </div>
  )
}

export default Landing
