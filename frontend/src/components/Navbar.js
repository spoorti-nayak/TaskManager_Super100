import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem('access_token');
  return (
    // <nav>
    //   <ul>
    //     {isAuthenticated ? (
    //       <>
    //         <li><Link to="/">Dashboard</Link></li>
    //         <li><Link to="/logout">Logout</Link></li>
    //       </>
    //     ) : (
    //       <>
    //         <li><Link to="/login">Login</Link></li>
    //         <li><Link to="/register">Register</Link></li>
    //       </>
    //     )}
    //   </ul>
    // </nav>
     <nav class="navbar">
        <Link class="navbar-brand" to="/">Home</Link>
        <div class="nav">
          
          {isAuthenticated?
          (
            <>
              <Link to="/profile" class="nav-link">Profile</Link>
              <Link to="/tasks" class="nav-link">View Task</Link>
              <Link to="/create" class="nav-link">Add Task</Link>
              <Link to="/logout" class="nav-link">Log out</Link>
            </>
          )
          :
          (
            <>
              <Link to="register" class="nav-link">Register</Link>
              <Link to="login" class="nav-link">Login</Link>
            </>
          )
        }         
        </div>
    </nav>
  );
};

export default Navbar;
