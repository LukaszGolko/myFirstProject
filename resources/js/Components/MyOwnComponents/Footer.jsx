import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 shadow-inner px-6 py-4 mt-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
                {/* Logo / Brand */}
                <div className="text-lg font-semibold text-gray-700">
                    © {new Date().getFullYear()} MyLogo. All rights reserved.
                </div>
            </div>
        </footer>
    )
}