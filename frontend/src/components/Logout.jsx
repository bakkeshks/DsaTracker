import React from "react";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    // You can also redirect the user to the login page or any other page after logout
    // For example, you can use window.location.href = "/login";
    window.location.href = '/signin';
  };

  return (
    <button onClick={handleLogout} className="text-red-600 hover:text-red-800">
      Logout
    </button>
  );
};

export default Logout;
