import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/login/', credentials);
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      // alert("Logged in!");
      window.location.reload()
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    // <form onSubmit={handleLogin}>
    //   <input name="username" onChange={handleChange} placeholder="Username" />
    //   <input name="password" onChange={handleChange} type="password" placeholder="Password" />
    //   <button type="submit">Login</button>
    // </form>

     <div class="container">
        <div class="shadow-lg border border-warning bg-light rounded-3 p-3 mx-auto my-5" style={{"maxWidth": "23%","minHeight":"40%"}}>
            <h1 class="text-center mb-5" style={{"fontFamily":"Verdana"}}>Sign In</h1>
            <div class="container">
                <div>
                    <form onSubmit={handleLogin} method="POST">
                        <input class="form-control mb-4" name="username" onChange={handleChange} placeholder="Username" />
                        <input class="form-control mb-4" name="password" onChange={handleChange} type="password" placeholder="Password" />
                        <div class="">
                            <button class="btn btn-success w-100" type="submit">Sign In</button>
                            <a href="/forgot-password" class="nav-link text-center">Forgot password</a>
                        </div>
                    </form>
                </div>
                <div class="my-2">
                    <center>Don't have an account?
                        <a href="/register" class="text-decoration-none fw-bold">Register</a>
                    </center>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
