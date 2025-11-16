import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(formData);

  try {
    if (formData["password"] !== formData["confirm_password"]) {
      // Client-side validation error
      throw new Error('Password mismatch!!');
    }

    const submitData = { ...formData };
    delete submitData["confirm_password"];

    const res = await axios.post('http://localhost:8000/api/register/', submitData);

    alert(res.data.message);
    window.location.reload();
  } catch (err) {
    // Handle client-side errors (like password mismatch)
    if (err.message === 'Password mismatch!!') {
      alert(err.message);
    } 
    // Handle server errors
    else if (err.response && err.response.data && err.response.data.error) {
      alert(err.response.data.error);
    } 
    // Fallback error
    else {
      alert("Something went wrong.");
    }
  }
};

  return (
    // <form onSubmit={handleSubmit}>
    //   <input name="username" onChange={handleChange} placeholder="Username" />
    //   <input name="email" onChange={handleChange} placeholder="Email" />
    //   <input name="password" onChange={handleChange} type="password" placeholder="Password" />
    //   <button type="submit">Register</button>
    // </form>

    <div class="container">
        <div class="shadow-lg bg-light border border-warning rounded-3 p-3 mx-auto my-5" style={{"maxWidth": "23%","minHeight":"60%"}}>
            <h1 class="text-center my-4" style={{"fontFamily":"Verdana"}}>Sign Up</h1>

            <div class="container">
                <form onSubmit={handleSubmit} method="POST">
                    <input class="form-control mb-4" name="username" onChange={handleChange} placeholder="Username" />
                    <input class="form-control mb-4" name="email" onChange={handleChange} placeholder="Email" />
                    <input class="form-control mb-4" name="password" onChange={handleChange} type="password" placeholder="Password" />
                    <input class="form-control mb-4" name="confirm_password" onChange={handleChange} type="password" placeholder="Confirm Password" />
                    <div class="d-grid gap-2 col-4 mx-auto">
                        <button class="btn btn-success" type="submit">Register</button>
                    </div>
                </form>
                <div class="my-3">
                    <center>Have an account?
                        <Link to="/login" class="text-decoration-none fw-bold">Login</Link>
                    </center>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Register;
