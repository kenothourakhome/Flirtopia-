import React from 'react'
import Navbar from './Navbar'
import Signup from './Signup'
import Signin from './Signin'
import "./Landing.css"
// import Footer from "./Footer";

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
        {/* <Footer /> */}
    </div>
  )
}

export default Landing
