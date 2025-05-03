"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-19 py-10">
      <div className="max-w-7xl mx-0 flex items-center justify-between">
        {/* Logo */}
      
        <div className="w-[112px] h-8">
          <Link href="/">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </Link>
          
        </div>

       

        {/* Hamburger Menu Button */}
        <button className="lg:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-between space-x-9 ml-7">
          <div className="flex space-x-9">
            <Link href="/assets" className="text-white text-base hover:text-gray-400">
              Assets
            </Link>
            <Link href="/ai-tools" className="text-white text-base hover:text-gray-400">
              Ai Tools
            </Link>
            <Link href="/ai-images" className="text-white text-base hover:text-gray-400">
              Ai Images
            </Link>
            <Link href="/templates" className="text-white text-base hover:text-gray-400">
              Templates
            </Link>
            <Link href="/explore" className="text-white text-base hover:text-gray-400">
              Explore
            </Link>
            <Link href="/hire" className="text-white text-base hover:text-gray-400">
              Hire
            </Link>
          </div>

          <div className="flex items-center space-x-9">
            <Link href="/create-portfolio" className="text-white text-base hover:text-gray-400">
              Create Portfolio
            </Link>
            <Link href="/login" className="text-white text-base hover:text-gray-400">
              Login
            </Link>
            <Link href="/signup">
              <button className="bg-signup-gradient text-[#1E1E1E] text-sm px-4 py-2 rounded-[2px] hover:opacity-90">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-1/2 h-full bg-gray-800 p-4 z-50">
          <div className="flex justify-end">
            <button className="text-white" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-4">
            <Link href="/assets" className="block text-white text-base hover:text-gray-400 py-2">
              Assets
            </Link>
            <Link href="/ai-tools" className="block text-white text-base hover:text-gray-400 py-2">
              Ai Tools
            </Link>
            <Link href="/ai-images" className="block text-white text-base hover:text-gray-400 py-2">
              Ai Images
            </Link>
            <Link href="/templates" className="block text-white text-base hover:text-gray-400 py-2">
              Templates
            </Link>
            <Link href="/explore" className="block text-white text-base hover:text-gray-400 py-2">
              Explore
            </Link>
            <Link href="/hire" className="block text-white text-base hover:text-gray-400 py-2">
              Hire
            </Link>
            <Link href="/create-portfolio" className="block text-white text-base hover:text-gray-400 py-2">
              Create Portfolio
            </Link>
            <Link href="/login" className="block text-white text-base hover:text-gray-400 py-2">
              Login
            </Link>
            <Link href="/signup">
              <button className="w-20 h-8 px-8 py-2 text-sm leading-5 bg-signup-gradient text-[#1E1E1E] rounded-[2px] ver:opacity-90 mt-2">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}