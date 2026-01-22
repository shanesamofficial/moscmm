import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
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

  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Treatments' },
    { to: '/doctors', label: 'Panel Of Doctors' },
    { to: '/facilities', label: 'Facilities' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header__top">
        <div className="container">
          <div className="header__top-content">
            <Link to="/" className="header__brand" onClick={closeMenu} aria-label="MOSCMM Kariambady Eye Hospital">
              <img
                src={logoP}
                alt="MOSCMM Kariambady Eye Hospital"
                className="header__brand-img"
                width="56"
                height="56"
              />
              <div className="header__brand-text">
                <span className="header__brand-subtitle">MOSCMM</span>
                <span className="header__brand-title">Kariambady Eye Hospital</span>
              </div>
            </Link>

            <div className="header__top-info">
              <a href="tel:04936247274" className="header__top-item">
                <span className="header__top-icon" aria-hidden="true">
                  <Phone size={16} />
                </span>
                <span className="header__top-text">
                  <span className="header__top-label">Appointment</span>
                  <span className="header__top-value">04936 247 274</span>
                </span>
              </a>
              <a href="mailto:moscmmkariambady@gmail.com" className="header__top-item">
                <span className="header__top-icon" aria-hidden="true">
                  <Mail size={16} />
                </span>
                <span className="header__top-text">
                  <span className="header__top-label">Email Address</span>
                  <span className="header__top-value">mosceyecare@gmail.com</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="header__toggle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="header__nav" aria-label="Primary">
        <div className="container">
          <div className="header__nav-content">
            {/* Desktop Navigation */}
            <ul className="header__menu" id="primary-navigation">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}
        >
          <ul className="header__mobile-nav">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
