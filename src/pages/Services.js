import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  Glasses,
  Heart,
  Microscope,
  Phone,
  Shield,
  Stethoscope
} from 'lucide-react';
import pharmacyImg from '../assets/pharmacy.webp';
import generalImg from '../assets/general.webp';
import cataractImg from '../assets/cataract.webp';
import glaucomaImg from '../assets/Glaucoma.webp';
import retinaImg from '../assets/retina.webp';
import opticalImg from '../assets/optical.webp';
import './Services.css';

const Services = () => {
  const mainSurgeries = [
    { id: 'cataract-surgery', title: 'Cataract Surgery' },
    { id: 'oculoplasty', title: 'Occuloplasty' },
    { id: 'trabeculectomy', title: 'Trabeculectomy' },
    { id: 'squint-correction', title: 'Squint Correction' },
    { id: 'probing', title: 'Probing' },
    { id: 'pterygium', title: 'Pterygium' },
    { id: 'dct', title: 'DCT (Dacryocystectomy)' }
  ];

  const serviceImageById = {
    'general-ophthalmology': '1551884170-09fb70a3a2ed',
    'cataract-surgery': '1579684385127-1ef15d508118',
    'glaucoma-services': '1559757175-5700dde675bc',
    'retina-services': '1580281657527-47f249e8f1df',
    'lacrimal-system': '1576091160550-2173dba999ef',
    'strabismus-services': '1581594693702-fbdc51b2763b',
    'diagnostic-services': '1559757148-5c350d0d3c56',
    'optical-dispensary': '1574258495973-f010dfbb5371',
    pharmacy: '1576091160399-112ba8d25d1f'
  };

  const getServiceImageUrl = (service) => {
    if (service.image) return service.image;
    const unsplashId = serviceImageById[service.id] ?? '1551884170-09fb70a3a2ed';
    return `https://images.unsplash.com/photo-${unsplashId}?w=600&h=400&fit=crop`;
  };

  const mainServices = [
    {
      id: 'general-ophthalmology',
      icon: <Eye size={36} />,
      title: 'General Ophthalmology',
      shortDesc: 'Comprehensive eye examinations and treatment of common eye conditions.',
      fullDesc: `We provide comprehensive eye examinations and treatment for common eye conditions.
        Our team focuses on accurate diagnosis, clear guidance, and compassionate care.`,
      features: [
        'Complete eye examinations',
        'Vision testing and refraction',
        'Prescription for spectacles',
        'Treatment of eye infections and allergies',
        'Dry eye management'
      ],
      image: generalImg
    },
    {
      id: 'cataract-surgery',
      icon: <Activity size={36} />,
      title: 'Cataract Surgery',
      shortDesc: 'Small incision sutureless cataract surgeries with modern technology.',
      fullDesc: `We offer modern cataract surgery options with a focus on safety, comfort,
        and good visual outcomes.`,
      features: [
        'Small incision sutureless cataract surgeries',
        'Phacoemulsification (Phaco) cataract surgery',
        'Intraocular lens (IOL) implantation',
        'Pre-operative assessment and counselling',
        'Post-operative care and follow-up'
      ],
      image: cataractImg
    },
    {
      id: 'glaucoma-services',
      icon: <Shield size={36} />,
      title: 'Glaucoma Services',
      shortDesc: 'Early detection and medical/surgical management of glaucoma.',
      fullDesc: `Glaucoma can cause irreversible vision loss if left untreated. We provide
        comprehensive evaluation and management, including surgery and laser procedures when required.`,
      features: [
        'Comprehensive glaucoma evaluation',
        'Intraocular pressure measurement (Applanation tonometer)',
        'Computerized field analyser (Visual fields)',
        'Medical management',
        'Surgical management (Trabeculectomy)',
        'Yag Laser Iridotomy'
      ],
      image: glaucomaImg
    },
    {
      id: 'retina-services',
      icon: <Eye size={36} />,
      title: 'Retina Specialist & Diabetic Retinopathy',
      shortDesc: 'Evaluation and management of retina conditions, including diabetic retinopathy.',
      fullDesc: `We provide retina specialist consultations and screening for diabetic retinopathy.
        Early detection and timely management can help protect vision.`,
      features: [
        'Retina specialist consultation',
        'Diabetic retinopathy screening and follow-up',
        'Fundus evaluation and counselling',
        'Treatment planning and referrals when needed'
      ],
      image: retinaImg
    },
    {
      id: 'lacrimal-system',
      icon: <Stethoscope size={36} />,
      title: 'Lacrimal System Services',
      shortDesc: 'Evaluation and procedures for watering eyes and lacrimal duct conditions.',
      fullDesc: `We provide evaluation and treatment for lacrimal (tear drainage) system problems,
        including surgical procedures when needed to restore proper tear drainage.`,
      features: [
        'Dacryocystotomy',
        'Dacryocystorhinostomy (DCR)',
        'Evaluation of watering eyes (epiphora)',
        'Management of lacrimal infections and blockages'
      ]
    },
    {
      id: 'strabismus-services',
      icon: <Eye size={36} />,
      title: 'Strabismus (Squint) Services',
      shortDesc: 'Evaluation and surgery for squint correction.',
      fullDesc: `We offer assessment and management for strabismus (squint), including
        surgical correction where appropriate with proper follow-up care.`,
      features: [
        'Squint evaluation',
        'Surgery for squint correction',
        'Follow-up and post-operative care'
      ]
    },
    {
      id: 'diagnostic-services',
      icon: <Microscope size={36} />,
      title: 'Diagnostic & Laser Services',
      shortDesc: 'Modern diagnostic instruments and laser facilities for accurate diagnosis.',
      fullDesc: `Accurate diagnosis is the foundation of effective treatment. Our hospital is equipped
        with modern diagnostic instruments and laser facilities to support comprehensive care.`,
      features: [
        'Fundus camera',
        'Slit lamp',
        'Operating microscope',
        'Computerized auto refractometer',
        'Computerized auto keratometer',
        'Computerized field analyser',
        'A-Scan',
        'Applanation tonometer',
        'Yag laser',
        'Diode green laser'
      ]
    },
    {
      id: 'optical-dispensary',
      icon: <Glasses size={36} />,
      title: 'Optical Dispensary',
      shortDesc: 'Spectacle dispensing support at the hospital.',
      fullDesc: `We have an optical dispensary to support patients who need spectacles after
        refraction and evaluation.`,
      features: ['Spectacle guidance and dispensing support'],
      image: opticalImg
    },
    {
      id: 'pharmacy',
      icon: <Heart size={36} />,
      title: 'Pharmacy',
      shortDesc: 'On-site pharmacy support for prescribed medicines.',
      fullDesc: `A pharmacy facility is available to support patients with prescribed medicines
        as part of their treatment and follow-up care.`,
      features: ['On-site pharmacy facility'],
      image: pharmacyImg
    }
  ];

  return (
    <div className="services-page">
      <SEO
        title="Our Treatments & Services"
        description="Comprehensive eye care services including cataract surgery, glaucoma treatment, pediatric ophthalmology, and retina care at MOSCMM Kariambady."
        url="/services"
      />
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>Treatments</h1>
            <p>Comprehensive eye care treatments delivered with compassion and expertise</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Treatments</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="services-overview section">
        <div className="container">
          <div className="section-header">
            <span className="services-overview__label">What We Offer</span>
            <h2 className="section-title">Comprehensive Eye Care Treatments</h2>
            <p className="section-subtitle">
              From routine eye examinations to advanced surgical procedures, we provide a complete range of
              eye care treatments and services. Our commitment to excellence ensures you receive the highest quality care.
            </p>
          </div>

          <div className="services-quick-links">
            {mainServices.map((service) => (
              <a key={service.id} href={`#${service.id}`} className="quick-link">
                <span className="quick-link__icon">{service.icon}</span>
                <span className="quick-link__title">{service.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="services-detail section bg-light">
        <div className="container">
          {mainServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`service-detail ${index % 2 === 1 ? 'service-detail--reverse' : ''}`}
            >
              <div className="service-detail__content">
                <div className="service-detail__icon">{service.icon}</div>
                <h3 className="service-detail__title">{service.title}</h3>
                <p className="service-detail__desc">{service.fullDesc}</p>
                <ul className="service-detail__features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/patient-info" className="btn btn-primary">
                  Book Appointment
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="service-detail__image">
                <img
                  src={getServiceImageUrl(service)}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surgeries-section section">
        <div className="container">
          <div className="section-header">
            <span className="services-overview__label">Surgery</span>
            <h2 className="section-title">Main Surgeries</h2>
            <p className="section-subtitle">Our key surgical services.</p>
          </div>

          <div className="surgeries-grid" aria-label="Main surgeries">
            {mainSurgeries.map((item) => (
              <div key={item.id} className="surgery-tile">
                <span className="surgery-tile__icon" aria-hidden="true">
                  <Activity size={24} />
                </span>
                <span className="surgery-tile__title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Eye Care Treatments?</h2>
          </div>
          <div className="why-choose__grid">
            <div className="why-choose__item">
              <div className="why-choose__icon">
                <Heart size={28} />
              </div>
              <h3>Charitable Mission</h3>
              <p>Focused on quality eye care for rural and tribal communities</p>
            </div>
            <div className="why-choose__item">
              <div className="why-choose__icon">
                <Microscope size={28} />
              </div>
              <h3>Modern Equipment</h3>
              <p>Advanced diagnostic instruments and laser facilities</p>
            </div>
            <div className="why-choose__item">
              <div className="why-choose__icon">
                <Shield size={28} />
              </div>
              <h3>Safe Surgical Care</h3>
              <p>Modern surgical setup including AC operation theatre complex</p>
            </div>
            <div className="why-choose__item">
              <div className="why-choose__icon">
                <Clock size={28} />
              </div>
              <h3>Emergency Care</h3>
              <p>Emergency services available when needed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="services-cta__content">
            <div className="services-cta__text">
              <h2>Need an Eye Consultation?</h2>
              <p>
                For appointments and enquiries, please call us. OP timings: Monday–Saturday 8:30 AM – 5:00 PM.
                Sunday closed.
              </p>
            </div>
            <div className="services-cta__buttons">
              <Link to="/patient-info" className="btn btn-primary btn-lg">
                <Calendar size={20} />
                Book Appointment
              </Link>
              <a href="tel:04936247274" className="btn btn-outline btn-lg">
                <Phone size={20} />
                Call: 04936 247 274
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
