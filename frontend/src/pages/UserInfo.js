import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axiosInstance.get('user/')
      .then((res) => setUser(res.data))
      .catch(() => alert("Not authorized"));
  }, []);

  return user ? (
    <div>
      <h2>Welcome {user.username}</h2>
      <p>Email: {user.email}</p>
    </div>
  ) : null;
};

export default UserInfo;
