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
                <a href="https://www.facebook.com/moscmm.kariambady" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer__column">
              <h3 className="footer__title">Our Services</h3>
              <ul className="footer__links">
                <li><Link to="/services">General Ophthalmology</Link></li>
                <li><Link to="/services">Cataract Surgery</Link></li>
                <li><Link to="/services">Glaucoma Services</Link></li>
                <li><Link to="/services">Lacrimal System Services</Link></li>
                <li><Link to="/services">Strabismus (Squint) Services</Link></li>
                <li><Link to="/services">Diagnostic &amp; Laser Services</Link></li>
                <li><Link to="/services">Optical Dispensary</Link></li>
                <li><Link to="/services">Pharmacy</Link></li>
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
                    <a href="tel:04936247274">04936 247 274</a>
                  </div>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:mosceyecare@gmail.com">
                    mosceyecare@gmail.com
                  </a>
                </li>
                <li>
                  <Clock size={18} />
                  <span>
                    Mon - Sat: 8:45 AM - 4:30 PM<br />
                    Sunday: Closed
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
