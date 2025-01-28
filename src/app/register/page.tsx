"use client";
// pages/register.tsx
import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can make an API call to register the user.
    // For now, we simulate a successful registration.

    // Simulate registration (you should implement your actual registration logic here)

    // Store the username in localStorage
    localStorage.setItem('user', JSON.stringify({ name }));

    // Redirect to the home page after registration
    window.location.href = '/'; // Use window.location to redirect
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="max-w-md lg:w-full sm:w-76 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-2">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-yellow-300 text-black font-bold rounded">Register</button>
        </form>
      </div>
    </div>
  );
}