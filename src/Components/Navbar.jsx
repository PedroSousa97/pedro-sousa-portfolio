import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Set to visible after component mounts
  }, []);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className={`navbar ${open ? 'open' : ''} ${isVisible ? 'navbar-visible' : ''}`}>
      <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleOpen}>
        <div />
        <div />
        <div />
      </div>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="career" smooth={true} duration={1000} onClick={closeMenu}>
            Career
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={1500} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contacts" smooth={true} duration={2000} onClick={closeMenu}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
