

"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons from shadcn/ui

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-19 py-10 ">
      <div className="max-w-7xl mx-0 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[112px] h-8">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Hamburger Menu Button (Visible on Mobile and Tablet) */}
        <button className="lg:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Nav items container (Hidden on Mobile and Tablet, Visible on Desktop) */}
        <div className="hidden lg:flex flex-1 items-center justify-between space-x-9 ml-7">
          {/* Nav items */}
          <div className="flex space-x-9"> {/* 36px spacing between items */}
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

          {/* Right side buttons and links */}
          <div className="flex items-center space-x-9"> {/* 36px spacing */}
            {/* Create Portfolio button */}
            <Link href="/create-portfolio" className="text-white text-base hover:text-gray-400">
              Create Portfolio
            </Link>

            {/* Login link */}
            <Link href="/login" className="text-white text-base hover:text-gray-400">
              Login
            </Link>

            {/* Signup button */}
            <Link href="/signup">
              <button className="bg-signup-gradient text-[#1E1E1E] text-sm px-4 py-2 rounded-[2px] hover:opacity-90">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Menu (Visible on Mobile and Tablet) */}
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
              {/* <button className="bg-signup-gradient text-[#1E1E1E] text-sm px-4 py-2 rounded-[2px] hover:opacity-90  mt-2">
                Signup
              </button> */}
  <button className="w-20 h-8 px-8 py-2 text-sm leading-5 bg-signup-gradient  text-[#1E1E1E] rounded-[2px] ver:opacity-90  mt-2">
  Signup
</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


// const Navbar = () => {
//   return (
//     <nav className="w-[1280px] h-8 absolute left-[80px] top-[44px]">
//       <div className="w-full h-full flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="w-[112px] h-8">
//           <img 
//             src="/logo.svg" 
//             alt="Logo" 
//             className="w-full h-full object-contain"
//           />
//         </div>
        
//         {/* Menu Items Section */}
//         <div className="flex items-center gap-9 w-[536px] justify-center">
//           {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
//             <a 
//               key={item} 
//               href="#" 
//               className="text-base text-white hover:text-gray-300 transition-colors"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
        
//         {/* Auth Section */}
//         <div className="flex items-center gap-9 w-[323px] justify-end">
//           <a href="#" className="text-base text-white hover:text-gray-300 transition-colors">
//             FAQ
//           </a>
//           <a href="#" className="text-base text-white hover:text-gray-300 transition-colors">
//             Login
//           </a>
//           <button className="w-20 h-8 rounded-sm bg-blue-500 text-white hover:bg-blue-600 transition-colors">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



