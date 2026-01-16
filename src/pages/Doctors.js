import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  GraduationCap, 
  Award,
  Phone,
  ArrowRight
} from 'lucide-react';
import './Doctors.css';

import drRajan from '../assets/drrajan.webp';
import drAparna from '../assets/Aparna R.jpg';
import drSravani from '../assets/Dr.Sravani S.webp';
import drVinny from '../assets/Dr.Vinny.webp';
import drAmrutha from '../assets/Dr.Amrutha.webp';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajan Cyriac',
      image: drRajan,
      designation: 'Medical Director & Chief Consultant',
      specialization: 'Ophthalmology',
      qualifications: 'M.B.B.S., M.S. (Ophthal), D.O.M.S (Ophthal)',
      regNo: 'TCMC-9422',
      languages: 'Malayalam, English',
      bio: `Dr. Rajan Cyriac is the Medical Director & Chief Consultant at MOSCMM Kariambady Eye Hospital (Reg.No. TCMC-9422).`
    },
    {
      id: 2,
      name: 'Dr. Aparna R.',
      image: drAparna,
      designation: 'Consultant Ophthalmologist',
      specialization: 'Ophthalmology',
      qualifications: 'M.B.B.S., M.S. (Ophthal), FAEH',
      regNo: 'TCMC-52762',
      languages: 'Malayalam, English',
      bio: `Dr. Aparna R. is a Consultant Ophthalmologist at MOSCMM Kariambady Eye Hospital (Reg.No. TCMC-52762).`
    },
    {
      id: 3,
      name: 'Dr. S. Sravani',
      image: drSravani,
      designation: 'Consultant Ophthalmologist',
      specialization: 'Ophthalmology',
      qualifications: 'M.B.B.S (Hons), M.S. (Ophthal)',
      regNo: 'TCMC-91189',
      languages: 'Malayalam, English',
      bio: `Dr. S. Sravani is a Consultant Ophthalmologist at MOSCMM Kariambady Eye Hospital (Reg.No. TCMC-91189).`
    },
    {
      id: 4,
      name: 'Dr. Vinny Joy',
      image: drVinny,
      designation: 'Consultant Ophthalmologist',
      specialization: 'Ophthalmology',
      qualifications: 'M.B.B.S., D.O, D.N.B (Ophthal)',
      regNo: 'TCMC-63219',
      languages: 'Malayalam, English',
      bio: `Dr. Vinny Joy is a Consultant Ophthalmologist at MOSCMM Kariambady Eye Hospital (Reg.No. TCMC-63219).`
    },
    {
      id: 5,
      name: 'Dr. Amrutha P. M.',
      image: drAmrutha,
      designation: 'Consultant Ophthalmologist',
      specialization: 'Ophthalmology',
      qualifications: 'M.B.B.S., M.S. (Ophthal)',
      regNo: 'TCMC-71189',
      languages: 'Malayalam, English',
      bio: `Dr. Amrutha P. M. is a Consultant Ophthalmologist at MOSCMM Kariambady Eye Hospital (Reg.No. TCMC-71189).`
    }
  ];

  return (
    <div className="doctors-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>Our Doctors</h1>
            <p>Meet our team of experienced and compassionate eye care specialists</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Our Doctors</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Doctors Introduction */}
      <section className="doctors-intro section">
        <div className="container">
          <div className="section-header">
            <span className="doctors-intro__label">Our Medical Team</span>
            <h2 className="section-title">Experienced Specialists Dedicated to Your Eye Health</h2>
            <p className="section-subtitle">
              Our team of qualified ophthalmologists brings together decades of combined experience 
              in various eye care specialties. Each doctor is committed to the hospital's mission 
              of providing compassionate, quality care to all patients.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Profiles */}
      <section className="doctors-profiles section bg-light">
        <div className="container">
          {doctors.map((doctor, index) => (
            <div 
              key={doctor.id} 
              className={`doctor-profile ${index % 2 === 1 ? 'doctor-profile--reverse' : ''}`}
            >
              <div className="doctor-profile__image-container">
                <div className="doctor-profile__image">
                  <img src={doctor.image} alt={doctor.name} />
                </div>
                {doctor.experience && (
                  <div className="doctor-profile__experience">
                    <span className="doctor-profile__experience-number">{doctor.experience}</span>
                    <span className="doctor-profile__experience-text">Experience</span>
                  </div>
                )}
              </div>
              <div className="doctor-profile__content">
                <h2 className="doctor-profile__name">{doctor.name}</h2>
                <p className="doctor-profile__designation">{doctor.designation}</p>
                
                <div className="doctor-profile__meta">
                  <div className="doctor-profile__meta-item">
                    <GraduationCap size={18} />
                    <span>{doctor.qualifications}</span>
                  </div>
                  <div className="doctor-profile__meta-item">
                    <Award size={18} />
                    <span>{doctor.specialization}</span>
                  </div>
                </div>

                <p className="doctor-profile__bio">{doctor.bio}</p>

                <p className="doctor-profile__languages">
                  <strong>Languages:</strong> {doctor.languages}
                </p>

                <Link to="/patient-info" className="btn btn-primary">
                  <Calendar size={18} />
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Staff */}
      <section className="support-staff section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Support Team</h2>
            <p className="section-subtitle">
              Behind our doctors is a dedicated team of nurses, optometrists, technicians, 
              and administrative staff who ensure smooth operations and excellent patient care.
            </p>
          </div>
          <div className="support-staff__grid">
            <div className="support-staff__item">
              <div className="support-staff__icon">👩‍⚕️</div>
              <h3>Nursing Staff</h3>
              <p>12 trained ophthalmic nurses providing compassionate pre and post-operative care</p>
            </div>
            <div className="support-staff__item">
              <div className="support-staff__icon">🔬</div>
              <h3>Optometrists</h3>
              <p>4 qualified optometrists for vision testing, refraction, and contact lens fitting</p>
            </div>
            <div className="support-staff__item">
              <div className="support-staff__icon">💻</div>
              <h3>Technicians</h3>
              <p>6 trained technicians operating diagnostic equipment and assisting in surgeries</p>
            </div>
            <div className="support-staff__item">
              <div className="support-staff__icon">📋</div>
              <h3>Administrative Team</h3>
              <p>Dedicated staff handling registrations, billing, and patient coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="doctors-cta">
        <div className="container">
          <div className="doctors-cta__content">
            <h2>Schedule a Consultation with Our Specialists</h2>
            <p>
              Our doctors are available for consultations Monday through Saturday. 
              Book your appointment today for expert eye care.
            </p>
            <div className="doctors-cta__buttons">
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

export default Doctors;
