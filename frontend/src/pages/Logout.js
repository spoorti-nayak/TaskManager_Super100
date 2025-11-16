import axiosInstance from '../api/axiosConfig';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const refresh = localStorage.getItem('refresh_token');
      await axiosInstance.post('logout/', { refresh });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      // alert("Logged out!");
      window.location.reload()
    } catch (err) {
      alert("Logout failed");
    }
  };

  handleLogout();
  
  return null;
};

export default Logout;
