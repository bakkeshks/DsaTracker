import React, { useState } from "react";
import axios from "axios";
 

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      console.log("Sign-up successful!", response.data);
      // After successful sign-up, you may redirect the user to sign-in page or handle it in your app flow
      window.location.href = '/signin';
    } catch (error) {
      console.error("Sign-up error:", error.response.data.message);
      // Handle sign-up error
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="username">
            Username
          </label>
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
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
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
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
