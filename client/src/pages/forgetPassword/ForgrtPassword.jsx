import React from 'react'
import {Link } from "react-router-dom";


const ForgrtPassword = () => {
  return (
    <div>
        <form >
            <input type="email" placeholder='enter your email'  />
            <Link to='/resete'><button>forget</button></Link>
        </form>
    </div>
  )
}

export default ForgrtPassword