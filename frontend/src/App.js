import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import UserInfo from './pages/UserInfo';  // Protected page
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { TaskBoard } from './pages/TaskBoard';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';

function App() {
  const isAuthenticated = !!localStorage.getItem('access_token');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={
          isAuthenticated ? <UserInfo /> : <Home />
        } />
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/profile" /> : <Login />
        } />

        <Route path="/tasks" element={
          isAuthenticated ? <TaskBoard /> : <Login />
        } />

        <Route path="/edit/:id" element={
          isAuthenticated ? <EditTask /> : <Login />
        } />

        <Route path="/create" element={
          isAuthenticated ? <CreateTask /> : <Login />
        } />

        <Route path="/register" element={
          isAuthenticated ? <Navigate to="/" /> : <Register />
        } />
        <Route path="/logout" element={
          isAuthenticated ? <Logout /> : <Navigate to="/login" />
        } />
        {/* You can add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
