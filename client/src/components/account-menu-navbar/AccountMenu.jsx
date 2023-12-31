import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const AccountMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="relative">
      <button
        onClick={handleMenuToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {menuOpen && (
        <div className="absolute top-0 right-0 mt-2 py-2 w-48 opacity-80 bg-vamp rounded-md shadow-lg">
          <Link
            to="/login"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign Up
          </Link>
          <Link
            to="/account"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Account View
          </Link>
        </div>
      )}

    </div>
  );
};
