import React, { useState } from 'react';
import { Home, HelpCircle, LogOut, AlignJustify } from 'lucide-react';
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [state, setState] = useState({
    tabActive: "home"
  });

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    window.location.href = "/auth";
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="w-full mx-5 pl-4 pr-16 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">Learn2Gether</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            <AlignJustify size={24} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors ${
                state.tabActive === "home" ? "text-blue-600 font-semibold" : ""
              }`}
          >
            <Home size={20} />
            <span>Home</span>
          </button>
          
          <button 
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <HelpCircle size={20} />
            <span>Help</span>
          </button>
          
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2  text-gray-700 hover:bg-red-100 rounded"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-2">
              <button 
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
              >
                <Home size={20} />
                <span>Home</span>
              </button>
              
              <button 
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
              >
                <HelpCircle size={20} />
                <span>Help</span>
              </button>
              
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 p-2 hover:bg-red-100 rounded"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;