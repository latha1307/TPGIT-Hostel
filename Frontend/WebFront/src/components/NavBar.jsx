import { useState } from 'react';
import { FaXmark, FaBars } from "react-icons/fa6";
import {Link} from 'react-router-dom';

export const NavBar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "/home" },
    { link: "About", path: "/about" },
    { link: "New Student Register", path: "/new-student-register" },
    { link: "Existing Student Register", path: "/existing-student-register" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="flex justify-between items-center py-4 px-6 bg-quaternary shadow-lg z-10">
          <div className="flex items-center space-x-3 font-bold text-gray-900">
            <ul className="hidden md:flex flex-row">
              {navItems.map(({ link, path }) => (
                <li key={link} className="mx-4">
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    to={path}
                    className="hover:text-gray-400 cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none focus:text-gray-900"
              >
                {isMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="inline-flex justify-center gap-x-1.5 rounded-md  bg-secondary text-white   px-3 py-2 text-sm font-semibold hover:text-quaternary  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary"
              id="menu-button"
              aria-expanded={isLoginOpen}
              aria-haspopup="true"
              onMouseOver={toggleLogin}
            >
              Login
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        
      </nav>
      {isLoginOpen && (
        <div
          className="absolute right-0 z-20 mt-auto md:mt-0  w-56 origin-top-right rounded-md shadow-lg ring-1 bg-white ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1 font-bold " role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-primary hover:text-white" role="menuitem">
              Admin Login
            </a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-primary hover:text-white" role="menuitem">
              Student Login
            </a>
          </div>
        </div>
      )}
      {isMenuOpen && (
          <div className="px-6 pb-5 bg-quaternary top-auto opacity-3 left-0 right-0 z-10 md:hidden">
            <ul className="flex flex-col items-center space-y-4 pt-5">
              {navItems.map(({ link, path }) => (
                <li key={link}>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    to={path}
                    className="hover:text-gray-400 cursor-pointer font-bold text-gray-900"
                    onClick={toggleMenu}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      
    </>
  );
};
