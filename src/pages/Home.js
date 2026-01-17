import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Heart, 
  Users, 
  Calendar,
  Phone,
  ArrowRight,
  Shield,
  Award,
  Clock,
  Stethoscope,
  Activity,
  UserCheck,
  Building
} from 'lucide-react';
import './Home.css';

import drRajan from '../assets/drrajan.webp';
import drAparna from '../assets/Aparna R.jpg';
import drSravani from '../assets/Dr.Sravani S.webp';
import moscImage from '../assets/mosc.webp';

const Home = () => {
  const previewDoctors = [
    {
      name: 'Dr. Rajan Cyriac',
      designation: 'Medical Director & Chief Consultant',
      qualifications: 'M.B.B.S., M.S. (Ophthal), D.O.M.S (Ophthal)',
      image: drRajan
    },
    {
      name: 'Dr. Aparna R.',
      designation: 'Consultant Ophthalmologist',
      qualifications: 'M.B.B.S., M.S. (Ophthal), FAEH',
      image: drAparna
    },
    {
      name: 'Dr. S. Sravani',
      designation: 'Consultant Ophthalmologist',
      qualifications: 'M.B.B.S (Hons), M.S. (Ophthal)',
      image: drSravani
    }
  ];

  const services = [
    {
      icon: <Eye size={32} />,
      title: 'General Ophthalmology',
      description: 'Comprehensive eye examinations, diagnosis, and treatment of common eye conditions.'
    },
    {
      icon: <Activity size={32} />,
      title: 'Cataract Surgery',
      description: 'Advanced phacoemulsification surgery with premium intraocular lens options.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Glaucoma Care',
      description: 'Early detection and management of glaucoma to preserve your vision.'
    },
    {
      icon: <Stethoscope size={32} />,
      title: 'Retina Services',
      description: 'Specialized treatment for diabetic retinopathy and macular degeneration.'
    },
    {
      icon: <Users size={32} />,
      title: 'Pediatric Eye Care',
      description: 'Gentle, specialized eye care for children of all ages.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Community Eye Camps',
      description: 'Free eye screening and surgery camps for underserved tribal communities.'
    }
  ];

  const stats = [
    { number: '100,000+', label: 'Patients Treated', icon: <UserCheck size={24} /> },
    { number: '20,000+', label: 'Surgeries Performed', icon: <Activity size={24} /> },
    { number: '1,000+', label: 'Eye Camps Conducted', icon: <Building size={24} /> },
    { number: '40+', label: 'Years of Service', icon: <Award size={24} /> }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <div className="container">
            <div className="hero__text">
              <div className="hero__badge">
                <Heart size={16} />
                <span>Charitable Eye Care Since 1986</span>
              </div>
              <h1 className="hero__title">
                Compassionate Eye Care <span>for All</span>
              </h1>
              <p className="hero__subtitle">
                MOSCMM Kariambady Eye Hospital is dedicated to providing quality, affordable 
                eye care to the tribal and rural communities of Wayanad, Kerala. Under the 
                Malankara Orthodox Syrian Church Medical Mission, we bring light to lives 
                through compassionate care.
              </p>
              <div className="hero__cta">
                <Link to="/patient-info" className="btn btn-primary btn-lg">
                  <Calendar size={20} />
                  Book Appointment
                </Link>
                <Link to="/services" className="btn btn-outline btn-lg">
                  Our Services
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className="hero__contact">
                <Phone size={18} />
                <span>Phone: </span>
                <a href="tel:04936247274">04936 247 274</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="quick-info">
        <div className="container">
          <div className="quick-info__grid">
            <div className="quick-info__item">
              <Clock size={24} />
              <div>
                <h4>OPD Timings</h4>
                <p>Mon - Sat: 8:45 AM - 4:30 PM</p>
              </div>
            </div>
            <div className="quick-info__item">
              <Phone size={24} />
              <div>
                <h4>Contact Us</h4>
                <p>04936 247 274</p>
              </div>
            </div>
            <div className="quick-info__item">
              <Heart size={24} />
              <div>
                <h4>Charitable Care</h4>
                <p>Subsidized Treatment Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-preview__grid">
            <div className="about-preview__image">
              <div className="about-preview__image-main">
                <img 
                  src={moscImage}
                  alt="MOSCMM Kariambady Eye Hospital"
                />
              </div>
              <div className="about-preview__experience">
                <span className="about-preview__experience-number">40+</span>
                <span className="about-preview__experience-text">Years of Excellence</span>
              </div>
            </div>
            <div className="about-preview__content">
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <span className="about-preview__label">About Our Hospital</span>
                <h2 className="section-title">Bringing Light to Lives Through Compassionate Care</h2>
              </div>
              <p>
                MOSCMM Kariambady Eye Hospital was established under the Malankara Orthodox 
                Syrian Church Medical Mission with a vision to provide accessible, quality 
                eye care to the underserved tribal and rural populations of Wayanad district.
              </p>
              <p>
                Located in the heart of Wayanad, our hospital serves as a beacon of hope for 
                thousands who would otherwise have limited access to specialized eye care. 
                Our mission is rooted in the Christian values of compassion, service, and 
                healing, ensuring that financial constraints never prevent anyone from 
                receiving the care they deserve.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="stats__item">
                <div className="stats__icon">{stat.icon}</div>
                <div className="stats__number">{stat.number}</div>
                <div className="stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="services-preview__label">Our Services</span>
            <h2 className="section-title">Comprehensive Eye Care Services</h2>
            <p className="section-subtitle">
              We offer a complete range of eye care services, from routine examinations 
              to advanced surgical procedures, all delivered with compassion and expertise.
            </p>
          </div>
          <div className="services-preview__grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <Link to="/services" className="service-card__link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="mission-banner">
        <div className="mission-banner__overlay"></div>
        <div className="container">
          <div className="mission-banner__content">
            <h2>Our Mission</h2>
            <p>
              "To provide accessible, affordable, and quality eye care services to all, 
              especially the tribal and rural communities, upholding the values of 
              compassion, dignity, and service as inspired by the healing ministry of Christ."
            </p>
            <div className="mission-banner__org">
              <span>Under the aegis of</span>
              <strong>Malankara Orthodox Syrian Church Medical Mission</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="doctors-preview section">
        <div className="container">
          <div className="section-header">
            <span className="doctors-preview__label">Our Team</span>
            <h2 className="section-title">Meet Our Expert Doctors</h2>
            <p className="section-subtitle">
              Our team of highly qualified and experienced ophthalmologists is dedicated 
              to providing the best possible care for your eyes.
            </p>
          </div>
          <div className="doctors-preview__grid">
            {previewDoctors.map((doctor) => (
              <div key={doctor.name} className="doctor-card">
                <div className="doctor-card__image">
                  <img src={doctor.image} alt={doctor.name} />
                </div>
                <div className="doctor-card__content">
                  <h3 className="doctor-card__name">{doctor.name}</h3>
                  <p className="doctor-card__specialty">{doctor.designation}</p>
                  <p className="doctor-card__qualification">{doctor.qualifications}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/doctors" className="btn btn-secondary">
              Meet All Our Doctors
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="testimonials-preview section bg-accent">
        <div className="container">
          <div className="section-header">
            <span className="testimonials-preview__label">Facilities</span>
            <h2 className="section-title">Main Surgeries & Key Equipment</h2>
          </div>
          <div className="testimonials-preview__grid">
            <div className="testimonial-card">
              <div className="testimonial-card__content">
                <p>
                  Cataract Surgery, Occuloplasty, Trabeculectomy, Squint correction, Probing,
                  Pterygium, and DCT (Dacryocystectomy).
                </p>
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">OT</div>
                <div>
                  <h4>Main Surgeries</h4>
                  <span>Comprehensive surgical care</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card__content">
                <p>
                  Diode green laser, Fundus camera, Slit lamp microscope, Operating microscope,
                  Auto refractometer, Auto keratometer, YAG laser, Field analyser, A-Scan,
                  Phacoemulsification, and Applanation tonometer.
                </p>
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">EQ</div>
                <div>
                  <h4>Equipment</h4>
                  <span>Diagnostic & surgical setup</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/facilities" className="btn btn-primary">
              View Facilities
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-section__content">
            <div className="cta-section__text">
              <h2>Ready to Take Care of Your Eyes?</h2>
              <p>
                Schedule an appointment with our expert ophthalmologists today. 
                Early detection and treatment can save your vision.
              </p>
            </div>
            <div className="cta-section__buttons">
              <Link to="/patient-info" className="btn btn-primary btn-lg">
                <Calendar size={20} />
                Book Appointment
              </Link>
              <a href="tel:04936247274" className="btn btn-outline btn-lg">
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
