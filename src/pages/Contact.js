import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Our Location',
      details: [
        'MOSCMM Kariambady Eye Hospital',
        'Kariambady P.O., Mananthavady',
        'Wayanad District, Kerala - 670645',
        'India'
      ]
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone Numbers',
      details: [
        'Reception: +91 4936 202030',
        'Appointment: +91 4936 202031',
        'Emergency: +91 4936 202030'
      ],
      isLink: 'tel'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: [
        'info@moscmmkariambadyeyehospital.com',
        'appointments@moscmmkariambadyeyehospital.com'
      ],
      isLink: 'mailto'
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Emergency Only'
      ]
    }
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>Contact Us</h1>
            <p>Get in touch with us for appointments, inquiries, or any assistance</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-card__icon">{info.icon}</div>
                <h3 className="contact-info-card__title">{info.title}</h3>
                <div className="contact-info-card__details">
                  {info.details.map((detail, idx) => (
                    info.isLink ? (
                      <a key={idx} href={`${info.isLink}:${detail.replace(/[^0-9+@.a-zA-Z]/g, '')}`}>
                        {detail}
                      </a>
                    ) : (
                      <p key={idx}>{detail}</p>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-main__grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p>
                Have a question or need assistance? Fill out the form below and we'll 
                get back to you as soon as possible.
              </p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select subject</option>
                      <option value="appointment">Appointment Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="billing">Billing & Insurance</option>
                      <option value="feedback">Feedback</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Write your message here..."
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg contact-form__submit">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="contact-sidebar">
              <div className="contact-map">
                <h3>Find Us On Map</h3>
                <div className="contact-map__embed">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8765!2d76.0041!3d11.8015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ4JzA1LjQiTiA3NsKwMDAnMTQuOCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MOSCMM Kariambady Eye Hospital Location"
                  ></iframe>
                </div>
                <a 
                  href="https://goo.gl/maps/wayanad-kariambady" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary contact-map__directions"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>

              <div className="contact-social">
                <h3>Connect With Us</h3>
                <p>Follow us on social media for updates and health tips</p>
                <div className="contact-social__links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook size={22} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter size={22} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={22} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube size={22} />
                  </a>
                  <a href="https://wa.me/914936202030" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle size={22} />
                  </a>
                </div>
              </div>

              <div className="contact-emergency">
                <h3>Emergency Contact</h3>
                <p>For eye emergencies outside regular hours:</p>
                <a href="tel:+914936202030" className="contact-emergency__number">
                  +91 4936 202030
                </a>
                <p className="contact-emergency__note">
                  Available 24/7 for genuine emergencies such as eye injuries, 
                  sudden vision loss, or severe eye pain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach Section */}
      <section className="directions-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How to Reach Us</h2>
            <p className="section-subtitle">
              Our hospital is conveniently located in Kariambady, Wayanad. Here are the ways to reach us.
            </p>
          </div>
          <div className="directions-grid">
            <div className="direction-card">
              <div className="direction-card__icon">🚗</div>
              <h3>By Road</h3>
              <p>
                From Mananthavady town center, take the Thirunelly Road. The hospital is 
                located approximately 5 km from Mananthavady. From Kalpetta, it's about 
                30 km via Mananthavady. Well-connected by state highways.
              </p>
            </div>
            <div className="direction-card">
              <div className="direction-card__icon">🚌</div>
              <h3>By Bus</h3>
              <p>
                Regular KSRTC and private buses are available from Kalpetta, Sultan Bathery, 
                and other major towns to Mananthavady. From Mananthavady bus stand, 
                local buses and auto-rickshaws are available to Kariambady.
              </p>
            </div>
            <div className="direction-card">
              <div className="direction-card__icon">✈️</div>
              <h3>Nearest Airport</h3>
              <p>
                Calicut International Airport (CCJ) is the nearest airport, approximately 
                100 km away. From the airport, you can hire a taxi or take a bus to 
                Mananthavady. The journey takes about 3 hours.
              </p>
            </div>
            <div className="direction-card">
              <div className="direction-card__icon">🚂</div>
              <h3>Nearest Railway</h3>
              <p>
                Kozhikode (Calicut) Railway Station is the nearest major railway station, 
                about 95 km away. Mysore Junction is another option at about 115 km. 
                Taxis and buses are available from both stations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="contact-cta__content">
            <h2>Need Immediate Assistance?</h2>
            <p>
              Our team is ready to help you with appointments, directions, or any 
              other queries. Don't hesitate to reach out.
            </p>
            <div className="contact-cta__buttons">
              <a href="tel:+914936202030" className="btn btn-primary btn-lg">
                <Phone size={20} />
                Call Us Now
              </a>
              <a 
                href="https://wa.me/914936202030" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
