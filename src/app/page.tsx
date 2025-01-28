"use client";
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {

  useEffect(() => {
    // Check if the user is stored in localStorage
    const user = localStorage.getItem('user');

    // If user is not found, redirect to the register page
    if (!user) {
      window.location.href = '/register'; // Redirect to register
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r font-sans from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row items-center gap-12">
        {/* Text Section (Left) */}
        <div className="flex-1 space-y-8 text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Organize Your Life with <span className="text-yellow-300">To-Do Master</span>
          </h1>
          <p className="text-xl">
            To-Do Master is your ultimate task management tool. Whether you're planning your day, organizing projects, or tracking goals, we make it simple and fun.
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="mr-2">✅</span> Create and manage tasks effortlessly.
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span> Set priorities and deadlines.
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span> Sync across all your devices.
            </li>
          </ul>
        </div>

        {/* Image Section (Right) */}
        <div className="flex-1">
          <Image
            src="/todo.png" // Replace with your image path
            alt="To-Do List Illustration"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}