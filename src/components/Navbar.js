import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About Us</Link>
      <Link to="/portfolio" style={{ margin: '0 10px' }}>Portfolio</Link>
      <Link to="/testimonials" style={{ margin: '0 10px' }}>Testimonials</Link>
      <Link to="/our-team" style={{ margin: '0 10px' }}>Our Team</Link>
      <Link to="/resources" style={{ margin: '0 10px' }}>Resources</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
