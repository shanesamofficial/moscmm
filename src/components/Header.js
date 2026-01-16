import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import logoP from '../assets/logo_p.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header__top">
        <div className="container">
          <div className="header__top-content">
            <div className="header__top-info">
              <a href="tel:04936247274" className="header__top-item">
                <Phone size={14} />
                <span>04936 247 274</span>
              </a>
              <span className="header__top-item">
                <Clock size={14} />
                <span>Mon - Sat: 8:45 AM - 4:30 PM</span>
              </span>
              <span className="header__top-item header__top-item--hide-mobile">
                <MapPin size={14} />
                <span>Kariambady, Wayanad, Kerala</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="header__nav">
        <div className="container">
          <div className="header__nav-content">
            {/* Logo */}
            <Link to="/" className="header__logo" onClick={closeMenu}>
              <img
                src={logoP}
                alt="MOSCMM Kariambady Eye Hospital"
                className="header__logo-img"
                width="48"
                height="48"
              />
              <div className="header__logo-text">
                <span className="header__logo-title">MOSCMM Kariambady</span>
                <span className="header__logo-subtitle">Eye Hospital</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="header__menu">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/doctors" className={({ isActive }) => isActive ? 'active' : ''}>
                  Our Doctors
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/facilities" className={({ isActive }) => isActive ? 'active' : ''}>
                  Facilities
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* CTA Button */}
            <Link to="/patient-info" className="btn btn-primary header__cta">
              Book Appointment
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="header__toggle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <ul className="header__mobile-nav">
            <li>
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/doctors" onClick={closeMenu}>Our Doctors</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/facilities" onClick={closeMenu}>Facilities</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </li>
          </ul>
          <Link to="/patient-info" className="btn btn-primary header__mobile-cta" onClick={closeMenu}>
            Book Appointment
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
