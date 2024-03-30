import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signin', formData);
      console.log('Sign-in successful!', response.data);
      // Save token in local storage
      localStorage.setItem('token', response.data.token);
      // Redirect or perform any action upon successful sign-in
      window.location.href = '/';
    } catch (error) {
      console.error('Sign-in error:', error.response.data.message);
      // Handle sign-in error
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="username">Username</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">Password</label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
