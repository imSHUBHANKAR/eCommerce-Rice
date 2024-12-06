import React, { useState } from 'react';
import ViLogo from '../assets/ViExport.jpg';
import { CiUser, CiShoppingCart, CiSearch, CiHeart } from 'react-icons/ci';
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the useCart hook

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart(); // Access cartCount

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-2 md:px-8">
        {/* Logo */}
        <div>
          <img src={ViLogo} alt="Logo" className="w-20 h-14" />
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-500"><li>Home</li></Link>
            <Link to="/rice" className="hover:text-blue-500"><li>Rice</li></Link>
            <Link to="/wheat" className="hover:text-blue-500"><li>Wheat</li></Link>
            <Link to="/pulses" className="hover:text-blue-500"><li>Pulses</li></Link>
            <Link to="/aboutus" className="hover:text-blue-500"><li>About Us</li></Link>
            <Link to="/contactus" className="hover:text-blue-500"><li>Contact Us</li></Link>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 bg-gray-300 rounded-full m-3 p-2">
          <div className="text-gray-600 text-xl cursor-pointer hover:text-blue-500"><Link to="/wishlist"><CiHeart /></Link></div>
          <div className="text-gray-600 text-xl cursor-pointer hover:text-blue-500"><CiSearch /></div>
          <div className="relative">
            <div className="text-gray-600 text-xl cursor-pointer hover:text-blue-500"><Link to="/cart"><CiShoppingCart /></Link></div>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <div className="text-gray-600 text-xl cursor-pointer hover:text-blue-500"><Link to="/profile"><CiUser /></Link></div>
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="block md:hidden">
          <button
            className="text-gray-700 text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RxCross2 /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu and overlay */}
      {isMenuOpen && (
        <>
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[#1b263b] text-white z-50 shadow-lg transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-500 ease-in-out`}
          >
            {/* Menu Items */}
            <ul className="flex flex-col items-start gap-6 px-6 py-4">
              <Link to="/" onClick={toggleMenu} className="hover:text-blue-500">Home</Link>
              <Link to="/rice" onClick={toggleMenu} className="hover:text-blue-500">Rice</Link>
              <Link to="/wheat" onClick={toggleMenu} className="hover:text-blue-500">Wheat</Link>
              <Link to="/pulses" onClick={toggleMenu} className="hover:text-blue-500">Pulses</Link>
              <Link to="/aboutus" onClick={toggleMenu} className="hover:text-blue-500">About Us</Link>
              <Link to="/contactus" onClick={toggleMenu} className="hover:text-blue-500">Contact Us</Link>
            </ul>
          </div>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
