import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Importing CSS for styling

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
  
    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    const navigateToHome = () => {
      navigate('/'); // Navigates to the home page
    };
  
    return (
      <header className="header">
        <div className="container">
          {/* Main logo/title area */}
          <div className="logo-container" onClick={() => navigate('/')}>
            <h1 className="logo-text">Flora Luxe.</h1>
          </div>
          
          {/* Navigation section */}
          <nav className={`navigation ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="/" className="nav-link">Home</a>
            <a href="/products" className="nav-link">Products</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
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