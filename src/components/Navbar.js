import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional external CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
    <div className="navbar-logo">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m1Ruld2Uqbu1ZPIhvUjmjnlvZr4PUHOHIQ&s"
    alt="SourceCode Logo"
    style={{ width: '35px', height: '35px', marginRight: '10px', borderRadius: '4px' }}
  />
  <span>SourceCode</span>
</div>
     
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About Us</Link>
        <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
        <Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link>
        <Link to="/our-team" onClick={toggleMenu}>Our Team</Link>
        <Link to="/resources" onClick={toggleMenu}>Resources</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
