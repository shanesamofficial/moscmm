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
  CheckCircle,
  Stethoscope,
  Activity,
  UserCheck,
  Building
} from 'lucide-react';
import './Home.css';

const Home = () => {
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
    { number: '50,000+', label: 'Patients Treated', icon: <UserCheck size={24} /> },
    { number: '15,000+', label: 'Surgeries Performed', icon: <Activity size={24} /> },
    { number: '200+', label: 'Eye Camps Conducted', icon: <Building size={24} /> },
    { number: '25+', label: 'Years of Service', icon: <Award size={24} /> }
  ];

  const features = [
    'State-of-the-art diagnostic equipment',
    'Experienced and compassionate medical team',
    'Affordable and subsidized treatments',
    'Focus on tribal and rural communities',
    'Modern operation theatre facilities',
    'Post-operative care and follow-up'
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
                <span>Charitable Eye Care Since 1998</span>
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
                <span>Emergency Helpline: </span>
                <a href="tel:+914936202030">+91 4936 202030</a>
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
                <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="quick-info__item">
              <Phone size={24} />
              <div>
                <h4>Contact Us</h4>
                <p>+91 4936 202030</p>
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
                  src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&h=400&fit=crop" 
                  alt="Eye examination at MOSCMM Kariambady Eye Hospital"
                />
              </div>
              <div className="about-preview__image-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop" 
                  alt="Modern eye care equipment"
                />
              </div>
              <div className="about-preview__experience">
                <span className="about-preview__experience-number">25+</span>
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
              <ul className="about-preview__features">
                {features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
            <div className="doctor-card">
              <div className="doctor-card__image">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop" 
                  alt="Dr. Thomas Varghese"
                />
              </div>
              <div className="doctor-card__content">
                <h3 className="doctor-card__name">Dr. Thomas Varghese</h3>
                <p className="doctor-card__specialty">Chief Medical Officer & Senior Consultant</p>
                <p className="doctor-card__qualification">MS (Ophthalmology), FRCS</p>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-card__image">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop" 
                  alt="Dr. Mary Philip"
                />
              </div>
              <div className="doctor-card__content">
                <h3 className="doctor-card__name">Dr. Mary Philip</h3>
                <p className="doctor-card__specialty">Consultant Ophthalmologist</p>
                <p className="doctor-card__qualification">MBBS, DO, DNB (Ophthalmology)</p>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-card__image">
                <img 
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop" 
                  alt="Dr. John Mathew"
                />
              </div>
              <div className="doctor-card__content">
                <h3 className="doctor-card__name">Dr. John Mathew</h3>
                <p className="doctor-card__specialty">Retina Specialist</p>
                <p className="doctor-card__qualification">MS, DNB, FVRS (Retina)</p>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/doctors" className="btn btn-secondary">
              Meet All Our Doctors
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="testimonials-preview section bg-accent">
        <div className="container">
          <div className="section-header">
            <span className="testimonials-preview__label">Patient Stories</span>
            <h2 className="section-title">What Our Patients Say</h2>
          </div>
          <div className="testimonials-preview__grid">
            <div className="testimonial-card">
              <div className="testimonial-card__content">
                <p>
                  "After my cataract surgery at MOSCMM Kariambady Eye Hospital, I can see 
                  the world clearly again. The doctors and staff were incredibly kind and 
                  caring. Being from a tribal community, I never thought I could afford 
                  such treatment, but their charitable mission made it possible."
                </p>
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">VK</div>
                <div>
                  <h4>Velayudhan Kunhi</h4>
                  <span>Paniya Tribal Community, Wayanad</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card__content">
                <p>
                  "The eye camp organized in our village was a blessing. Many elderly 
                  people who had lost hope of ever seeing properly again received free 
                  treatment. The hospital's outreach program is truly serving God's purpose."
                </p>
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">SM</div>
                <div>
                  <h4>Santha Madhavan</h4>
                  <span>Anganwadi Worker, Thirunelly</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/testimonials" className="btn btn-primary">
              Read More Stories
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
              <a href="tel:+914936202030" className="btn btn-outline btn-lg">
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
