import React, { useContext } from 'react'
import { passingValue } from '../Login/Login'

const Forget = () => {
  const { email,setEmail } = useContext(passingValue)
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Password link send to your ",email);
  }
  return (
    <div className='Forget'>
      <h2>Forget Password</h2>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='Enter your email' value={email} 
        onChange={(x) => setEmail(x.target.value)} required />

        <button type='submit'>Reset Password</button>
      </form>
    </div>
  )
}

export default Forget