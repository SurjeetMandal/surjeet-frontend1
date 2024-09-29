import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar for larger screens */}
      <div className="flex items-center justify-between h-16 Container">
        <div className="Logo font-cusFont text-2xl font-semibold">
          <Link to="/">&#123;Finsweet</Link>
        </div>
        <div className="hidden md:flex Nav_Link font-cusFont text-sm font-light gap-7 items-center text-gray-700">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/Product" className="hover:text-gray-400">Product</Link>
          <Link to="/AboutUs" className="hover:text-gray-400">About Us</Link>
          <Link to="/Contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/Prizing" className="hover:text-gray-400">Prizing</Link>
          <button className="bg-black text-white py-2 px-5 rounded-md">
            Free trial
          </button>
        </div>

        {/* Hamburger button for mobile view */}
        <button
          className="md:hidden text-black text-2xl p-2 rounded focus:outline-none"
          onClick={toggleMenu}
        >
          {!isOpen ? <IoMenu /> : <IoIosClose />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white py-3 px-2.5 md:hidden">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="Logo font-cusFont text-2xl font-semibold"
            >
              &#123;Finsweet
            </Link>
            <button
              className="text-black text-4xl p-0.5 rounded"
              onClick={toggleMenu}
            >
              <IoIosClose />
            </button>
          </div>

          <div className="mt-8 flex px-4 flex-col gap-8 font-cusFont text-sm font-light text-gray-700">
            <Link to="/" onClick={toggleMenu} className="hover:border-[#6B7CFF]">Home</Link>
            <Link to="/Product" onClick={toggleMenu}>Product</Link>
            <Link to="/AboutUs" onClick={toggleMenu}>About Us</Link>
            <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
            <Link to="/Prizing" onClick={toggleMenu}>Prizing</Link>
            <button className="bg-black text-white py-2 px-5 rounded-md w-28">
              Free trial
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
