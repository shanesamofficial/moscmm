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

const About = () => {
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
    { year: '1998', title: 'Foundation', description: 'MOSCMM Kariambady Eye Hospital established under the Malankara Orthodox Syrian Church Medical Mission.' },
    { year: '2003', title: 'First Eye Camp', description: 'Launched community eye screening camps reaching remote tribal settlements in Wayanad.' },
    { year: '2008', title: 'Surgical Expansion', description: 'Upgraded facilities with modern phacoemulsification equipment for advanced cataract surgery.' },
    { year: '2012', title: '10,000 Surgeries', description: 'Milestone of 10,000 successful eye surgeries performed, majority for underprivileged patients.' },
    { year: '2018', title: '20th Anniversary', description: 'Celebrated two decades of service with expansion of specialty clinics and diagnostic services.' },
    { year: '2023', title: 'Digital Transformation', description: 'Implementation of digital health records and telemedicine services for follow-up care.' }
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
              <h2>A Legacy of Compassionate Care</h2>
              <p>
                <strong>MOSCMM Kariambady Eye Hospital</strong> is a charitable eye care institution 
                established under the auspices of the <strong>Malankara Orthodox Syrian Church Medical Mission 
                (MOSCMM)</strong>. Located in Kariambady, in the heart of Wayanad district, Kerala, 
                our hospital has been serving the tribal and rural communities of this region for 
                over two decades.
              </p>
              <p>
                Wayanad, known for its lush landscapes and diverse tribal population, has historically 
                faced significant healthcare challenges due to its remote location and economic constraints 
                faced by its residents. Recognizing this need, the Malankara Orthodox Syrian Church 
                established this eye hospital as part of its medical mission to bring healing and hope 
                to those who need it most.
              </p>
              <p>
                Our hospital combines modern medical technology with the ancient Christian values of 
                compassion, service, and healing. We believe that quality eye care should be accessible 
                to all, regardless of their financial circumstances. This guiding principle has enabled 
                us to treat thousands of patients, many of whom would otherwise have no access to 
                specialized eye care.
              </p>
            </div>
            <div className="about-intro__image">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=700&fit=crop" 
                alt="MOSCMM Kariambady Eye Hospital Building"
              />
              <div className="about-intro__badge">
                <span className="about-intro__badge-number">25+</span>
                <span className="about-intro__badge-text">Years of Service</span>
              </div>
            </div>
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
              <h2>Malankara Orthodox Syrian Church Medical Mission</h2>
              <p>
                The Malankara Orthodox Syrian Church, one of the oldest Christian churches in India 
                with a history dating back to the arrival of St. Thomas the Apostle in 52 AD, has a 
                long tradition of service to humanity. The Medical Mission of the Church was established 
                to extend the healing ministry of Christ to all people, especially the poor and marginalized.
              </p>
              <p>
                MOSCMM operates several hospitals, clinics, and healthcare initiatives across Kerala 
                and other parts of India. The Kariambady Eye Hospital is a key part of this mission, 
                specifically focused on addressing the eye care needs of the tribal communities of 
                Wayanad who have historically been underserved.
              </p>
              <p>
                Our hospital operates on the principle that healthcare is a fundamental right, not a 
                privilege. We provide subsidized and free treatment to those who cannot afford to pay, 
                while maintaining the same high standards of care for all patients.
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
              A timeline of our growth and achievements in serving the community
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
