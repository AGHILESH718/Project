import React, { useContext, useState } from 'react'

const Forget = () => {
  const [email,setEmail] = useState([])
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Password link send to your mail",email);
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