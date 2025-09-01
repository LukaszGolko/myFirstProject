import React from 'react';
import NavLink from '@/Components/NavLink';
import { usePage } from '@inertiajs/react';
import DropdownInHeader from './DropdownInHeader';

export default function Header({ children }) {
  const { auth } = usePage().props;
  const user = auth?.user;

  return (
    <>
      <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <NavLink href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            MyLogo
          </NavLink>
        </div>
        <nav className="flex items-center space-x-6">
          <NavLink
            href={route('home')}
            active={route().current('home')}
          >
            Home
          </NavLink>
          <NavLink
            href={route('about')}
            active={route().current('about')}
          >
            About Us
          </NavLink>
          <NavLink
            href={route('contact')}
            active={route().current('contact')}
          >
            Contact Us
          </NavLink>
          {auth.user ? (
            <DropdownInHeader />
          ) : (
            <>
              <NavLink
                href={route('login')}
                active={route().current('login')}
              >
                Log in
              </NavLink>
              <NavLink
                href={route('register')}
                active={route().current('register')}
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>
    </>
  );
}