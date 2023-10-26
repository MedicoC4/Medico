import React from 'react'
import './style.css'

const Login = () => {
  return (
    <div>
        {/* this side of logIn page only for the image */}
        <div class="split left">
  <div class="centered">
    <img className='doctorImg' src="https://www.prepareforcanada.com/wp-content/uploads/1-FeaturedImg.jpg" alt="Avatar woman"/>
    <h2>Jane Flex</h2>
    <p>Some text.</p>
  </div>
</div>

<div class="split right">
  <div class="centered">
    <img src="img_avatar.png" alt="Avatar man"/>
    <h2>John Doe</h2>
    <p>Some text here too.</p>
  </div>
</div>
    </div>
  )
}

export default Login