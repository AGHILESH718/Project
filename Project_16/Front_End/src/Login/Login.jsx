import React, { createContext, useState } from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:",email,password);    
  };  

  return (
    <div className='Login'>
        <div className="App">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className="input">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your e-mail"
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your Password"
            />
          </div>

          <div className="rem">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit">Log in</button>

          <div className="vise">
            <p>Don't Have an account?</p>
            <Link to="/register">Register Here</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login