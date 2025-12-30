import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Activity, 
  Shield, 
  Stethoscope, 
  Users, 
  Heart,
  Glasses,
  Microscope,
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
  Phone
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const mainServices = [
    {
      id: 'general-ophthalmology',
      icon: <Eye size={36} />,
      title: 'General Ophthalmology',
      shortDesc: 'Comprehensive eye examinations and treatment of common eye conditions.',
      fullDesc: `Our General Ophthalmology department provides comprehensive eye care services for 
        patients of all ages. From routine eye examinations to diagnosis and treatment of 
        common eye conditions, our experienced team ensures your eyes receive the best care.`,
      features: [
        'Complete eye examinations',
        'Vision testing and refraction',
        'Prescription for glasses and contact lenses',
        'Treatment of eye infections and allergies',
        'Dry eye management',
        'Foreign body removal',
        'Minor surgical procedures'
      ]
    },
    {
      id: 'cataract-surgery',
      icon: <Activity size={36} />,
      title: 'Cataract Surgery',
      shortDesc: 'Advanced phacoemulsification surgery with premium lens options.',
      fullDesc: `Cataracts are the leading cause of blindness in India, and our hospital specializes 
        in advanced cataract surgery. Using state-of-the-art phacoemulsification technology, 
        we perform safe and effective cataract removal with minimal recovery time.`,
      features: [
        'Phacoemulsification (Phaco) surgery',
        'Small incision cataract surgery (SICS)',
        'Premium intraocular lens (IOL) options',
        'Multifocal and toric IOLs available',
        'Day-care surgery facility',
        'Free surgery camps for underprivileged patients',
        'Post-operative care and follow-up'
      ]
    },
    {
      id: 'glaucoma-care',
      icon: <Shield size={36} />,
      title: 'Glaucoma Care',
      shortDesc: 'Early detection and comprehensive management of glaucoma.',
      fullDesc: `Glaucoma is often called the "silent thief of sight" because it can cause 
        irreversible vision loss without noticeable symptoms. Our glaucoma specialists use 
        advanced diagnostic tools for early detection and provide comprehensive management 
        to preserve your vision.`,
      features: [
        'Comprehensive glaucoma evaluation',
        'Intraocular pressure (IOP) measurement',
        'Visual field testing (Perimetry)',
        'OCT nerve fiber analysis',
        'Medical management with eye drops',
        'Laser treatment (Trabeculoplasty)',
        'Surgical options when needed'
      ]
    },
    {
      id: 'retina-services',
      icon: <Stethoscope size={36} />,
      title: 'Retina Services',
      shortDesc: 'Specialized treatment for diabetic retinopathy and macular diseases.',
      fullDesc: `Our retina department provides specialized care for conditions affecting the 
        retina and vitreous. With the increasing prevalence of diabetes in our region, 
        diabetic retinopathy screening and treatment are key services we offer.`,
      features: [
        'Diabetic retinopathy screening and treatment',
        'Macular degeneration management',
        'Retinal detachment evaluation',
        'Fluorescein angiography',
        'OCT imaging of retina',
        'Intravitreal injections',
        'Laser photocoagulation'
      ]
    },
    {
      id: 'pediatric-eye-care',
      icon: <Users size={36} />,
      title: 'Pediatric Eye Care',
      shortDesc: 'Gentle, specialized eye care for children of all ages.',
      fullDesc: `Children's eye health needs special attention and expertise. Our pediatric eye 
        care team is trained to work with children in a friendly, comfortable environment, 
        ensuring accurate diagnosis and effective treatment of childhood eye conditions.`,
      features: [
        'Vision screening for infants and children',
        'Amblyopia (lazy eye) treatment',
        'Squint (strabismus) evaluation',
        'Pediatric glasses prescription',
        'Congenital eye conditions',
        'School vision screening programs',
        'Child-friendly examination environment'
      ]
    },
    {
      id: 'contact-lens-clinic',
      icon: <Glasses size={36} />,
      title: 'Contact Lens Clinic',
      shortDesc: 'Expert fitting and guidance for all types of contact lenses.',
      fullDesc: `Our contact lens clinic provides expert fitting and ongoing care for patients 
        who prefer contact lenses over glasses. We offer a variety of lens types suitable 
        for different needs and lifestyles.`,
      features: [
        'Comprehensive contact lens evaluation',
        'Soft contact lens fitting',
        'Rigid gas permeable (RGP) lenses',
        'Toric lenses for astigmatism',
        'Multifocal contact lenses',
        'Contact lens care education',
        'Follow-up and aftercare services'
      ]
    },
    {
      id: 'community-camps',
      icon: <Heart size={36} />,
      title: 'Community Eye Camps',
      shortDesc: 'Free eye screening and surgery camps for underserved communities.',
      fullDesc: `As part of our charitable mission, we regularly organize free eye camps in 
        tribal settlements and rural areas. These camps provide screening, treatment, and 
        surgeries to those who cannot access or afford regular eye care services.`,
      features: [
        'Free eye screening camps',
        'Free cataract surgery camps',
        'School eye screening programs',
        'Distribution of free spectacles',
        'Eye health awareness programs',
        'Transportation assistance for patients',
        'Post-camp follow-up care'
      ]
    },
    {
      id: 'diagnostic-services',
      icon: <Microscope size={36} />,
      title: 'Diagnostic Services',
      shortDesc: 'Advanced diagnostic equipment for accurate diagnosis.',
      fullDesc: `Accurate diagnosis is the foundation of effective treatment. Our hospital is 
        equipped with modern diagnostic instruments to ensure precise evaluation of all 
        eye conditions.`,
      features: [
        'Optical Coherence Tomography (OCT)',
        'Visual field analyzer',
        'Fundus photography',
        'Slit lamp biomicroscopy',
        'Autorefractometer',
        'A-scan and B-scan ultrasonography',
        'Keratometry and topography'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>Our Services</h1>
            <p>Comprehensive eye care services delivered with compassion and expertise</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section">
        <div className="container">
          <div className="section-header">
            <span className="services-overview__label">What We Offer</span>
            <h2 className="section-title">Comprehensive Eye Care Services</h2>
            <p className="section-subtitle">
              From routine eye examinations to advanced surgical procedures, we provide a 
              complete range of eye care services. Our commitment to excellence ensures 
              you receive the highest quality care.
            </p>
          </div>

          {/* Quick Service Links */}
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

      {/* Detailed Services */}
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
                <h2 className="service-detail__title">{service.title}</h2>
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
                  src={`https://images.unsplash.com/photo-${
                    index === 0 ? '1551884170-09fb70a3a2ed' :
                    index === 1 ? '1579684385127-1ef15d508118' :
                    index === 2 ? '1559757175-5700dde675bc' :
                    index === 3 ? '1576091160550-2173dba999ef' :
                    index === 4 ? '1581594693702-fbdc51b2763b' :
                    index === 5 ? '1574258495973-f010dfbb5371' :
                    index === 6 ? '1576091160399-112ba8d25d1f' :
                    '1559757148-5c350d0d3c56'
                  }?w=600&h=400&fit=crop`}
                  alt={service.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Eye Care Services?</h2>
          </div>
          <div className="why-choose__grid">
            <div className="why-choose__item">
              <div className="why-choose__icon">
                <Heart size={28} />
              </div>
              <h3>Charitable Mission</h3>
              <p>Subsidized and free treatment available for those who cannot afford to pay</p>
            </div>
            <div className="why-choose__item">
              <div className="why-choose__icon">
                <Users size={28} />
              </div>
              <h3>Experienced Team</h3>
              <p>Qualified ophthalmologists with years of experience in their specialties</p>
            </div>
            <div className="why-choose__item">
              <div className="why-choose__icon">
                <Microscope size={28} />
              </div>
              <h3>Modern Equipment</h3>
              <p>State-of-the-art diagnostic and surgical equipment for accurate care</p>
            </div>
            <div className="why-choose__item">
              <div className="why-choose__icon">
                <Clock size={28} />
              </div>
              <h3>Convenient Timings</h3>
              <p>OP consultations available Monday through Saturday</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta__content">
            <div className="services-cta__text">
              <h2>Ready to Schedule Your Eye Examination?</h2>
              <p>
                Don't wait for symptoms to appear. Regular eye check-ups can help detect 
                problems early and prevent vision loss. Book your appointment today.
              </p>
            </div>
            <div className="services-cta__buttons">
              <Link to="/patient-info" className="btn btn-primary btn-lg">
                <Calendar size={20} />
                Book Appointment
              </Link>
              <a href="tel:+914936247274" className="btn btn-outline btn-lg">
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
