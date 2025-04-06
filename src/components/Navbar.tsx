
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className={`text-xl md:text-2xl font-semibold ${isScrolled ? 'text-ocean-800' : 'text-white'}`}>
            Mlango Paje
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Accommodations', 'Amenities', 'Gallery', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`${
                  isScrolled ? 'text-gray-700 hover:text-ocean-600' : 'text-white hover:text-ocean-100'
                } transition-colors duration-300`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <Button
          className="hidden md:flex bg-ocean-600 hover:bg-ocean-700 text-white"
          onClick={() => window.location.href = '#booking'}
        >
          Book Now
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 animate-fade-in">
          <ul className="space-y-4">
            {['Home', 'About', 'Accommodations', 'Amenities', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-ocean-600 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Button
                className="w-full bg-ocean-600 hover:bg-ocean-700 text-white"
                onClick={() => {
                  window.location.href = '#booking';
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
