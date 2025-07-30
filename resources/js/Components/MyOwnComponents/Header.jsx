import React from 'react';
import { Link } from '@inertiajs/react';

export default function Header({ auth }) {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
          MyLogo
        </Link>
      </div>
      <nav className="flex items-center space-x-6">
        <Link
          href={route('home')}
          className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
        >
          Home
        </Link>
        <Link
          href={route('about')}
          className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
        >
          About Us
        </Link>
        <Link
          href={route('contact')}
          className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
        >
          Contact Us
        </Link>
        {auth.user ? (
          <Link
            href={route('dashboard')}
            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href={route('login')}
              className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
              Log in
            </Link>
            <Link
              href={route('register')}
              className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}