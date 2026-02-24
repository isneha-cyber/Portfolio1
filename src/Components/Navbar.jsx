import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items - note: 'home' points to 'hero' section
  const navItems = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    // If clicking home or logo, scroll to hero section
    const targetId = sectionId === 'home' ? 'hero' : sectionId;
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <nav 
        className={`fixed w-full z-50 py-3 transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-white shadow-lg' : 'bg-white'
        }`}
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Desktop Navigation - Left */}
            <div className="hidden md:flex items-center gap-8 flex-1">
              {navItems.slice(0, 3).map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`transition-colors duration-200 font-medium text-lg hover:text-gray-600 hover:underline capitalize cursor-pointer ${
                    isScrolled ? 'text-gray-700' : 'text-black'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Logo - scrolls to hero section */}
            <div className="flex items-center justify-center flex-shrink-0">
              <button
                onClick={() => scrollToSection('home')} // This will scroll to hero
                className={`text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300 whitespace-nowrap hover:text-gray-600 focus:outline-none cursor-pointer ${
                  isScrolled ? 'text-gray-800' : 'text-black'
                }`}
              >
                Isneha Manandhar
              </button>
            </div>

            {/* Desktop Navigation - Right */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
              {navItems.slice(3).map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`transition-colors duration-200 font-medium text-lg hover:text-gray-600 hover:underline capitalize cursor-pointer ${
                    isScrolled ? 'text-gray-700' : 'text-black'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`focus:outline-none p-2 rounded-md transition-colors duration-200 cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-black hover:bg-blue-50'
                }`}
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-white rounded-lg shadow-lg py-4 border">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left px-4 py-3 text-gray-700 hover:text-gray-600 hover:underline hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium text-base capitalize cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;