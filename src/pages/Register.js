import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { register } from "../api/auth";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = (e) => {
    // e.preventDefault();
    // Add register logic here
  };

  return (
    <div className="bg-white-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-sky-900 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Register</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white text-sm font-medium mb-2"
          >
            username
          </label>
          <input
            type="text"
            id="name"
            name="username"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-white text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-white text-sm font-medium mb-2"
          >
            Profile Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={mutate}
            type="submit"
            className="mt-8 inline-block rounded bg-sky-600 px-5 py-2 text-lg font-medium text-white shadow-lg transition-transform transform hover:scale-105 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300"          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
