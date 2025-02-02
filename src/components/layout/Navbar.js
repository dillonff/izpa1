import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../../assets/media';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/team', label: 'Our Team' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const isCurrentPath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed w-full z-50 px-6 pt-6">
      <nav className="mx-auto max-w-7xl bg-white rounded-full px-6 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src={images.logoWithName}
              alt="IZ Planning"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group py-1"
              >
                <span
                  className={`transition-all text-[15px] group-hover:font-medium ${
                    isCurrentPath(item.path)
                      ? 'text-black font-medium'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                </span>
                {isCurrentPath(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-black"
                    initial={false}
                  />
                )}
                <div className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-50 transition-colors rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 right-0 top-full md:hidden bg-white rounded-3xl mt-4 border border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-xl transition-colors text-[15px] ${
                    isCurrentPath(item.path)
                      ? 'bg-gray-50 text-black font-medium'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
