import React, { useState } from 'react'
import './style.css'
import docImg from "../../assets/images/doctorLogin.png"
import { auth } from '../../firebase-config'
import {  getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";


const Login = () => {
    const [error , setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}





  return (
    <div>
        {/* this side of logIn page only for the image */}
        <div className="split left">
  <div className="centered">
    <img className='doctorImg' src={docImg}alt="Avatar woman"/>
    <h2>PharmacySat: Siplify Your Inventory</h2>
    <p>Track all your product,categories,and inventory in one piace</p>
  </div>
</div>

<div className="split right">
    <h1>Log in</h1>
  <div className="centered">
    <form onSubmit={handleLogin}>
   <input type="text" className="centered1" placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" className='centered2' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
    <button type='submit'>Login</button>
    <Link to='/forget'><a >resete password</a></Link>
    </form>
  </div>
</div>
    </div>
  )
}

export default Login