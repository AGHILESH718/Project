  import React, { useState } from 'react'
  import './Register.css'

  const Register = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: ""
    })
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState({})

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value })
    }

    const validate = () => {
      let error = {};
      if (!formData.name) error.name = "*Name is required";
      if (!formData.email.includes("@")) error.email = "*Invalid e-mail";
      if (formData.password.length < 6) error.password = "*Password must be at least 6  characters"
      return error;
    }

    const handleSubmit = (x) => {
      x.preventDefault();
      const validateError = validate();
      if (Object.keys(validateError).length === 0) {
        setSubmitted(true);
      } else {
        setError(validateError);
      }
    }

    return (
      <div className='Register'>
        <h2>Register</h2>
        {submitted ? (
          <p style={{color:'green'}}>Registration Successfully!!</p>
        ) : (<form onSubmit={handleSubmit}>

          <div className='container'>
            <label>Name:</label>
            <input style={{borderBottom:"1px solid"}} type="text" name='name' value={formData.name} onChange={handleChange} />
            {error.name && <p>{error.name}</p>}
          </div>

          <div className='container'>
            <label>Email:</label>
            <input
            style={{borderBottom:"1px solid"}}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <p>{error.email}</p>}
          </div>

          <div className='container'>
            <label>Password:</label>
            <input 
            style={{borderBottom:"1px solid"}}
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            />
            {error.password && <p>{error.password}</p>}
          </div>

          <button type='submit'>Register</button>
        </form>)}
      </div>
    )
  }

  export default Register