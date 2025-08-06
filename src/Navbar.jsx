import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="bg-gray-500 shadow-md sticky top-0 z-50 w-full">
      <div className="w-screen px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* ✅ Logo */}
        <div className="text-2xl font-bold text-white">TOYOTA</div>

        {/* ✅ Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-white   font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-red-500 cursor-pointer transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* ✅ Right: Search + Menu */}
        <div className="flex items-center gap-4">
          
          {/* 🔍 Search Bar */}
          <div
            className={`transition-all duration-300 ease-in-out border rounded-full px-3 py-1 flex items-center
              ${searchFocus ? "w-64 border-orange-400" : "w-12 border-gray-300"} 
              bg-white hover:border-orange-400 shadow-sm`}
          >
            <Search size={18} className="text-gray-500" />
            <input
  type="text"
  placeholder="Search..."
  onFocus={() => setSearchFocus(true)}
  onBlur={() => setSearchFocus(false)}
  className="ml-2 outline-none bg-transparent text-sm w-full block"
/>

          </div>

          {/* ☰ Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-sm">
          {navLinks.map((link) => (
            <li
              key={link}
              className="text-gray-700 font-medium hover:text-red-500 cursor-pointer transition"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
