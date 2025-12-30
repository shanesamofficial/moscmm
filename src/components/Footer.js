import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart
} from 'lucide-react';
import logoW from '../assets/logo_w.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* About Column */}
            <div className="footer__column">
              <div className="footer__logo">
                <img
                  src={logoW}
                  alt="MOSCMM Kariambady Eye Hospital"
                  className="footer__logo-img"
                  width="44"
                  height="44"
                />
                <div>
                  <span className="footer__logo-title">MOSCMM Kariambady</span>
                  <span className="footer__logo-subtitle">Eye Hospital</span>
                </div>
              </div>
              <p className="footer__about">
                A charitable eye care institution under the Malankara Orthodox Syrian Church 
                Medical Mission, dedicated to providing quality eye care services to the tribal 
                and rural communities of Wayanad, Kerala.
              </p>
              <div className="footer__social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__column">
              <h3 className="footer__title">Quick Links</h3>
              <ul className="footer__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/doctors">Our Doctors</Link></li>
                <li><Link to="/patient-info">Patient Information</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer__column">
              <h3 className="footer__title">Our Services</h3>
              <ul className="footer__links">
                <li><Link to="/services">General Ophthalmology</Link></li>
                <li><Link to="/services">Cataract Surgery</Link></li>
                <li><Link to="/services">Glaucoma Care</Link></li>
                <li><Link to="/services">Retina Services</Link></li>
                <li><Link to="/services">Pediatric Eye Care</Link></li>
                <li><Link to="/services">Contact Lens Clinic</Link></li>
                <li><Link to="/services">Community Eye Camps</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__column">
              <h3 className="footer__title">Contact Us</h3>
              <ul className="footer__contact">
                <li>
                  <MapPin size={18} />
                  <span>
                    MOSCMM Kariambady Eye Hospital<br />
                    Kariambady P.O., Mananthavady<br />
                    Wayanad District, Kerala - 670645
                  </span>
                </li>
                <li>
                  <Phone size={18} />
                  <div>
                    <a href="tel:+914936202030">+91 4936 202030</a><br />
                    <a href="tel:+914936202031">+91 4936 202031</a>
                  </div>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:info@moscmmkariambadyeyehospital.com">
                    info@moscmmkariambadyeyehospital.com
                  </a>
                </li>
                <li>
                  <Clock size={18} />
                  <span>
                    Mon - Sat: 9:00 AM - 5:00 PM<br />
                    Sunday: Closed (Emergency Only)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} MOSCMM Kariambady Eye Hospital. All rights reserved.
            </p>
            <p className="footer__charity">
              <Heart size={14} className="footer__heart" />
              <span>A Charitable Institution under Malankara Orthodox Syrian Church Medical Mission</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
