import React from 'react';
import { Link } from 'react-router-dom';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <p className="text-lg font-semibold text-gray-700">Loading...</p>
      <p className="text-md text-gray-600 mt-2">Login to see the posts</p>
      <Link to="/login" className="mt-4 text-blue-500 hover:underline">
        Go to Login
      </Link>
    </div>
  );
}
