import React, { useState } from 'react';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };
  
    return (
      <header className="header">
        <div className="container">
          {/* Main logo/title area */}
          <div className="logo-container">
            <h1 className="logo-text">Flora Luxe.</h1>
          </div>
          
          {/* Navigation section */}
          <nav className={`navigation ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          
          {/* Mobile menu button (hamburger icon) */}
          <div className="mobile-menu">
            <button className="hamburger-button" onClick={toggleMobileMenu}>
              <svg className="hamburger-icon" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Decorative plant-inspired pattern along the bottom */}
        <div className="decorative-border"></div>
      </header>
    );
}

export default Header
