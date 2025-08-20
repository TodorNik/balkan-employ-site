"use client";

import { useState } from "react";
import Link from "next/link";
import "@/app/globals.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Desktop Links */}
          <div className="flex items-center">
            <div className="text-xl font-bold">MyLogo</div>
            <div className="hidden md:flex space-x-4 ml-10">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/about" className="hover:text-gray-300">About</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
              <Link href="/profile" className="hover:text-gray-300">Profile</Link>
              <Link href="/logout" className="hover:text-gray-300">Logout</Link>
            </div>
          </div>

          {/* Hamburger Button (mobile only) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (shown only when isOpen === true) */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-700">
          <Link href="/" className="block hover:text-gray-300">Home</Link>
          <Link href="/about" className="block hover:text-gray-300">About</Link>
          <Link href="/contact" className="block hover:text-gray-300">Contact</Link>
          <Link href="/profile" className="block hover:text-gray-300">Profile</Link>
          <Link href="/logout" className="block hover:text-gray-300">Logout</Link>
        </div>
      )}
    </nav>
  );
}