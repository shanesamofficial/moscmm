import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu, X, Phone, Mail,
  Home, Info, Stethoscope, Users, Building, Image, FileText, Send, ChevronRight
} from 'lucide-react';
import logoP from '../assets/logo_p.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body class for home/inner pages styling
  useEffect(() => {
    if (isHome) {
      document.body.classList.add('is-home-page');
      document.body.classList.remove('is-inner-page');
    } else {
      document.body.classList.add('is-inner-page');
      document.body.classList.remove('is-home-page');
    }
  }, [isHome]);

  // Handle body overflow when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { to: '/', label: 'Home', end: true, icon: Home },
    { to: '/about', label: 'About Us', icon: Info },
    { to: '/services', label: 'Treatments', icon: Stethoscope },
    { to: '/doctors', label: 'Panel Of Doctors', icon: Users },
    { to: '/facilities', label: 'Facilities', end: true, icon: Building },
    { to: '/gallery', label: 'Gallery', icon: Image },
    { to: '/blog', label: 'Blog', icon: FileText },
    { to: '/contact', label: 'Contact Us', icon: Send }
  ];

  const mobileMenuNode = (
    <>
      <div
        className={`header__mobile-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        className={`header__mobile-drawer ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="header__mobile-header">
          <div className="header__mobile-brand">
            <span className="header__mobile-brand-subtitle">MOSCMM</span>
            <span className="header__mobile-brand-title">Kariambadi Eye Hospital</span>
          </div>
          <button
            className="header__close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="header__mobile-content">
          <ul className="header__mobile-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={closeMenu}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    <span className="mobile-nav-icon">
                      <Icon size={20} />
                    </span>
                    <span className="mobile-nav-label">{item.label}</span>
                    <ChevronRight size={16} className="mobile-nav-chevron" />
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="header__mobile-contact">
            <h4 className="header__mobile-contact-title">Contact Us</h4>
            <div className="header__mobile-contact-list">
              <a href="tel:04936247274" className="header__mobile-contact-item">
                <div className="mobile-contact-icon">
                  <Phone size={18} />
                </div>
                <span>04936 247 274</span>
              </a>
              <a href="mailto:moscmmkariambady@gmail.com" className="header__mobile-contact-item">
                <div className="mobile-contact-icon">
                  <Mail size={18} />
                </div>
                <span>mosceyecare@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

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
                <span className="header__brand-title">Kariambadi Eye Hospital</span>
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

      </nav>

      {/* Render Mobile Menu via Portal */}
      {ReactDOM.createPortal(mobileMenuNode, document.body)}
    </header>
  );
};

export default Header;
