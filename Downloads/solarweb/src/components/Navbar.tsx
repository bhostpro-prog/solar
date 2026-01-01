import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Safety', path: '/safety' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Bharat Renewable Energy" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/admin"
              className="text-gray-600 hover:text-[#228b22] transition-colors p-2 rounded-lg hover:bg-gray-100"
              title="CMS Admin"
            >
              <Settings size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-[#228b22] text-white px-8 py-2 rounded-full hover:bg-[#1a6b1a] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="border border-[#228b22] text-[#228b22] px-8 py-2 rounded-full hover:bg-[#228b22] hover:text-white transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block transition-colors ${
                  location.pathname === link.path
                    ? 'text-black'
                    : 'text-gray-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="flex items-center gap-2 text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Settings size={20} />
              CMS Admin
            </Link>
            <Link
              to="/contact"
              className="block bg-[#228b22] text-white px-8 py-2 rounded-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="block border border-[#228b22] text-[#228b22] px-8 py-2 rounded-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}