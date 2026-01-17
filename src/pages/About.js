import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Target, 
  Eye, 
  Users, 
  Award, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Cross
} from 'lucide-react';
import './About.css';

import bavaThirumeniImg from '../assets/BAVA THIRUMENI.webp';
import marBarnabasImg from '../assets/H.G.DR.GEEVARGHESE MAR BARNABAS  .webp';
import marPachomiosImg from '../assets/H.G.GEEVARGHESE MAR PACHOMIOS.webp';
import abrahamMathewImg from '../assets/Rev. Abraham Mathew Cor-Episcopa Adayakattu.webp';
import thomasUzhunnungalImg from '../assets/Thomas M. Uzhunnungal.webp';
import officerPlaceholderImg from '../assets/officer-placeholder.svg';

const About = () => {
  const officers = [
    {
      role: 'President & Patron',
      name: 'Bava Thirumeni',
      image: bavaThirumeniImg
    },
    {
      role: 'Ex-officio Vice President',
      name: 'H.G. Dr. Geevarghese Mar Barnabas',
      note: 'Metropolitan of Sulthan Bathery Diocese',
      image: marBarnabasImg
    },
    {
      role: 'Vice President',
      name: 'H.G. Geevarghese Mar Pachomios',
      note: 'Metropolitan of Malabar Diocese',
      image: marPachomiosImg
    },
    {
      role: 'Vice President',
      name: 'Rev. Fr. A. D. Geevargheese',
      image: officerPlaceholderImg
    },
    {
      role: 'Vice President',
      name: 'K. O. Peter Master Kuchupurackal',
      image: officerPlaceholderImg
    },
    {
      role: 'Secretary',
      name: 'Rev. Abraham Mathew Cor-Episcopa Adayakattu',
      image: abrahamMathewImg
    },
    {
      role: 'Treasurer',
      name: 'Thomas M. Uzhunnungal',
      image: thomasUzhunnungalImg
    }
  ];

  const values = [
    {
      icon: <Heart size={28} />,
      title: 'Compassion',
      description: 'We treat every patient with kindness, empathy, and respect, recognizing the dignity inherent in each person we serve.'
    },
    {
      icon: <Cross size={28} />,
      title: 'Service',
      description: 'Inspired by Christian values, we are committed to serving the underserved communities without discrimination.'
    },
    {
      icon: <Award size={28} />,
      title: 'Excellence',
      description: 'We strive for the highest standards of medical care, continuously improving our skills and facilities.'
    },
    {
      icon: <Users size={28} />,
      title: 'Community',
      description: 'We are deeply rooted in our community, actively participating in its health and well-being through outreach programs.'
    }
  ];

  const milestones = [
    { year: '1986', title: 'Established', description: 'MOSC Medical Mission Kariambady Eye Hospital started as a charitable mission hospital in Kariambady, Wayanad.' },
    { year: '1990', title: 'Local Society Formed', description: 'For better administration and care, the hospital was transferred to a local society formed in Kariambady (registered under the Societies Registration Act XXI of 1860).' },
    { year: 'Today', title: 'Modern Facilities', description: 'Developed into a leading eye hospital in Wayanad with almost all modern facilities, serving rural and tribal communities through decades of continuous service.' }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>About Us</h1>
            <p>Learn about our mission, history, and commitment to compassionate eye care</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro section">
        <div className="container">
          <div className="about-intro__grid">
            <div className="about-intro__content">
              <span className="about-intro__label">Who We Are</span>
              <h2>A Charitable Mission Hospital Established in 1986</h2>
              <p>
                <strong>MOSC Medical Mission Kariambady Eye Hospital</strong> is a charitable mission hospital
                established in <strong>1986</strong> and run by the <strong>Malankara Orthodox Syrian Church</strong>.
                This is a leading eye hospital in Wayanad with almost all modern facilities.
              </p>
              <p>
                The hospital has played a vital role in providing eye care for the rural population of Wayanad
                for the last decades, especially in underserved areas.
              </p>
              <p>
                Kariambady eye hospital is a unit of the healing mission of Malankara Orthodox Syrian Church and
                it is dedicated to the service of the poor people of Wayanad.
              </p>
            </div>
            <div className="about-intro__image">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=700&fit=crop" 
                alt="MOSCMM Kariambady Eye Hospital Building"
              />
              <div className="about-intro__badge">
                <span className="about-intro__badge-number">40+</span>
                <span className="about-intro__badge-text">Years of Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Officers Section */}
      <section className="officers-section section">
        <div className="container">
          <div className="section-header">
            <span className="officers-section__label">OUR BOARD MEMBERS</span>
            <h2 className="section-title">OFFICERS</h2>
          </div>

          <div className="officers-grid">
            {officers.map((officer) => (
              <div key={`${officer.role}-${officer.name}`} className="officer-card">
                <div className="officer-card__image">
                  <img src={officer.image} alt={officer.name} loading="lazy" />
                </div>
                <div className="officer-card__content">
                  <div className="officer-card__role">{officer.role}</div>
                  <div className="officer-card__name">{officer.name}</div>
                  {officer.note ? <div className="officer-card__note">{officer.note}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision section bg-light">
        <div className="container">
          <div className="mission-vision__grid">
            <div className="mission-vision__card mission-vision__card--mission">
              <div className="mission-vision__icon">
                <Target size={40} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide accessible, affordable, and quality eye care services to all members 
                of society, with special emphasis on the tribal and rural communities of Wayanad, 
                upholding the values of compassion, dignity, and service as inspired by the 
                healing ministry of Jesus Christ.
              </p>
              <ul>
                <li><CheckCircle size={16} /> Deliver compassionate, patient-centered care</li>
                <li><CheckCircle size={16} /> Ensure affordability for all economic backgrounds</li>
                <li><CheckCircle size={16} /> Reach underserved communities through outreach</li>
                <li><CheckCircle size={16} /> Maintain highest standards of medical excellence</li>
              </ul>
            </div>
            <div className="mission-vision__card mission-vision__card--vision">
              <div className="mission-vision__icon">
                <Eye size={40} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a center of excellence in eye care that serves as a beacon of hope for 
                the underserved, ensuring that no one in our community suffers from preventable 
                or treatable blindness, while spreading the light of Christ's love through 
                our healing ministry.
              </p>
              <ul>
                <li><CheckCircle size={16} /> Eliminate preventable blindness in Wayanad</li>
                <li><CheckCircle size={16} /> Become a regional referral center for eye care</li>
                <li><CheckCircle size={16} /> Train next generation of eye care professionals</li>
                <li><CheckCircle size={16} /> Expand community outreach and education programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Church Affiliation */}
      <section className="church-section section">
        <div className="container">
          <div className="church-section__content">
            <div className="church-section__text">
              <span className="church-section__label">Our Foundation</span>
              <h2>Malankara Orthodox Syrian Church Medical Mission Kariambady Eye Hospital</h2>
              <p>
                Kariambady eye hospital is a unit of the healing mission of Malankara Orthodox Syrian Church and
                it is dedicated to the service of the poor people of Wayanad. The hospital started in 1986 at
                the village Kariambady, situated 5 km away from Meenangady which is on the Kozhikode - Mysore Highway.
                By the Grace of God it has grown to its present status with all modern facilities.
              </p>
              <p>
                Wayanad is a hilly region. According to the recent census the population is 8 lakhs.
                There are two lakhs of tribals in 600 colonies. It is estimated that 60% of the population is
                below the poverty line.
              </p>
              <p>
                Christofel Blinden Mission (CBM), an organisation in Germany, works to eradicate curable blindness
                in partnership with charitable hospitals in developing countries. In response to the call to serve
                villages with limited medical facilities, the Eye department of MOSC Medical Mission Hospital, Kolenchery
                decided to start a peripheral hospital in North Kerala, and Wayanad was identified as a most deserving place.
              </p>
              <p>
                For better administration and care the hospital was transferred to a local society formed in Kariambady in 1990.
                The management of the institution is now vested on the Malankara Orthodox Syrian Church Medical Mission Kariambady.
              </p>
            </div>
            <div className="church-section__image">
              <img 
                src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=500&h=600&fit=crop" 
                alt="Orthodox Church Symbol"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities CTA */}
      <section className="about-facilities section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="history-section__label">Facilities</span>
            <h2 className="section-title">Main Surgeries & Equipment</h2>
            <p className="section-subtitle">
              Explore our key facilities, major surgeries, and diagnostic/surgical equipment.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/facilities" className="btn btn-primary btn-lg">
              View Facilities
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section bg-accent">
        <div className="container">
          <div className="section-header">
            <span className="values-section__label">Our Values</span>
            <h2 className="section-title">The Principles That Guide Us</h2>
            <p className="section-subtitle">
              Our work is guided by core values rooted in our faith and commitment to service
            </p>
          </div>
          <div className="values-section__grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="history-section section">
        <div className="container">
          <div className="section-header">
            <span className="history-section__label">Our Journey</span>
            <h2 className="section-title">Milestones in Our History</h2>
            <p className="section-subtitle">
              Key milestones in the development of the hospital
            </p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}>
                <div className="timeline__content">
                  <span className="timeline__year">{milestone.year}</span>
                  <h3 className="timeline__title">{milestone.title}</h3>
                  <p className="timeline__description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Focus */}
      <section className="community-section section bg-light">
        <div className="container">
          <div className="community-section__grid">
            <div className="community-section__images">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop" 
                alt="Community eye camp"
                className="community-section__image community-section__image--1"
              />
              <img 
                src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=400&h=300&fit=crop" 
                alt="Tribal community healthcare"
                className="community-section__image community-section__image--2"
              />
            </div>
            <div className="community-section__content">
              <span className="community-section__label">Community Focus</span>
              <h2>Serving the Tribal & Rural Communities</h2>
              <p>
                Wayanad is home to several tribal communities including the Paniyas, Kurichyas, 
                Kurumas, Adiyans, and Kattunaikkas. These communities face unique healthcare 
                challenges due to their remote locations, economic constraints, and sometimes, 
                limited awareness about eye health.
              </p>
              <p>
                Our hospital has developed specialized outreach programs to reach these communities:
              </p>
              <ul className="community-section__list">
                <li>
                  <CheckCircle size={18} />
                  <span><strong>Mobile Eye Camps:</strong> Regular visits to tribal settlements for screening and basic treatment</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span><strong>Free Surgery Camps:</strong> Periodic camps offering free cataract surgeries to eligible patients</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span><strong>School Screening Programs:</strong> Vision testing for children in tribal schools</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span><strong>Health Education:</strong> Awareness programs about eye health and disease prevention</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span><strong>Transportation Support:</strong> Assistance with travel for patients from remote areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section">
        <div className="container">
          <div className="about-cta__content">
            <h2>Join Us in Our Mission</h2>
            <p>
              Whether you need eye care services or wish to support our charitable work, 
              we welcome you to be part of our mission to bring sight and hope to those in need.
            </p>
            <div className="about-cta__buttons">
              <Link to="/patient-info" className="btn btn-primary btn-lg">
                <Calendar size={20} />
                Book Appointment
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
