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

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajan Cyriac',
      image: 'https://lh3.googleusercontent.com/sitesv/AAzXCke_fOFhxq0onDqnNW4N70fMU17DJ3S0NcegOYLS6PKmKDZsUeIVgYGvvfmwBDpWePM7nTFdmWAaStQ7JEbLERaY0FT_L1RroS2GbPYzjmwX5DUAbAENrbxDDHhuVAa1AYV82vEEKAhuAITXOCtGo6izVJOl-5jSEbva2jJD1q1_zE6G-ZovCdS70J-BemyrAED14rfswa7GysoGXVZW7paaabKERaLO8aaoNuA=w1280',
      designation: 'Medical Director & Chief Consultant',
      specialization: 'Cataract Surgery, General Ophthalmology',
      qualifications: 'M.B.B.S., M.S.(Ophthal.), D.O.M.S',
      experience: '25+ years',
      languages: 'English, Malayalam, Hindi',
      bio: `Dr. Rajan Cyriac is the Medical Director and Chief Consultant at MOSCMM Kariambady Eye Hospital. 
        With extensive qualifications including M.B.B.S., M.S. in Ophthalmology, and D.O.M.S., he brings 
        over 25 years of experience in comprehensive eye care. As the Medical Director, he oversees 
        all clinical operations and ensures the highest standards of patient care. Dr. Cyriac is 
        particularly committed to the hospital's charitable mission of serving the underprivileged 
        communities of Wayanad.`,
      achievements: [
        'Leading the hospital as Medical Director',
        'Extensive experience in cataract and general eye surgeries',
        'Pioneer in establishing quality eye care in Wayanad',
        'Committed to community eye health programs'
      ]
    },
    {
      id: 2,
      name: 'Dr. Joel Varghese Kuruvilla',
      image: 'https://lh3.googleusercontent.com/sitesv/AAzXCkfQhUadXSk7qazp7Wpi9eptoJB8JS2u4BqJqRNTfZAN3Eu39E6jFFARrlYbDu0WuXpKYC9yifgUI-6zcr6nUXu6uxruBgakM_9Rpaitzgjg8np88B_g0USNzMAJ_PzMAKyGqjSspCT87HRwFvvwRtZDmCYnkpwyMCFagSO8nbenj0hxHQZ5U9brK8VwUwbvVYe1qBUwXs3pV3N3xXFc6fhKDSqfZp8ssDhu=w1280',
      designation: 'Associate Consultant',
      specialization: 'General Ophthalmology, Cataract Surgery',
      qualifications: 'M.B.B.S., M.S.(Ophthal)',
      experience: '10+ years',
      languages: 'English, Malayalam',
      bio: `Dr. Joel Varghese Kuruvilla serves as an Associate Consultant at MOSCMM Kariambady Eye Hospital. 
        He holds an M.B.B.S. degree and M.S. in Ophthalmology, bringing comprehensive training in modern 
        eye care techniques. Dr. Joel is known for his patient-centric approach and dedication to 
        providing quality eye care services. He actively participates in the hospital's community 
        outreach programs and eye camps conducted in remote areas of Wayanad.`,
      achievements: [
        'Skilled in modern cataract surgery techniques',
        'Active participant in community eye camps',
        'Dedicated to serving rural and tribal populations',
        'Expertise in comprehensive eye examinations'
      ]
    },
    {
      id: 3,
      name: 'Dr. Lalith Sundar',
      image: 'https://lh3.googleusercontent.com/sitesv/AAzXCkdZl8qM8S--qv5TcM9zOUzDE9GAcwXB3hiv1VLy3AAJPgi3fkiMDb0O5Bcuj6_UsnepgGx0qvKWjBxSiHWceNgRZM_OBFk8pQqTos8e56u9DDTesY0iFnl_dnkWcvAsxAf_u-qf7B2igk-clXigXJH_EjETL7cONf9a7mTmm5S01ISJAGAmt5aZ4waydFkR1IJUmh72I66_qUfWxCC-Wp74MDuvgIArH6SeYUI=w1280',
      designation: 'Retina Specialist',
      specialization: 'Medical and Surgical Retina, Diabetic Retinopathy',
      qualifications: 'M.B.B.S., M.S., D.O., D.N.B',
      experience: '15+ years',
      languages: 'English, Malayalam, Tamil',
      bio: `Dr. Lalith Sundar is the Retina Specialist at MOSCMM Kariambady Eye Hospital. With impressive 
        qualifications including M.B.B.S., M.S., D.O., and D.N.B., he brings specialized expertise in 
        vitreoretinal diseases. His expertise is particularly valuable given the high prevalence of 
        diabetic retinopathy in the region. Dr. Lalith Sundar handles complex retinal conditions 
        including diabetic eye disease, macular degeneration, and retinal detachments.`,
      achievements: [
        'Specialized expertise in vitreoretinal surgery',
        'Managing diabetic retinopathy screening programs',
        'Expert in intravitreal injection therapy',
        'Treating complex retinal conditions'
      ]
    },
    {
      id: 4,
      name: 'Dr. Jithendranath',
      image: 'https://lh3.googleusercontent.com/sitesv/AAzXCkdZl8qM8S--qv5TcM9zOUzDE9GAcwXB3hiv1VLy3AAJPgi3fkiMDb0O5Bcuj6_UsnepgGx0qvKWjBxSiHWceNgRZM_OBFk8pQqTos8e56u9DDTesY0iFnl_dnkWcvAsxAf_u-qf7B2igk-clXigXJH_EjETL7cONf9a7mTmm5S01ISJAGAmt5aZ4waydFkR1IJUmh72I66_qUfWxCC-Wp74MDuvgIArH6SeYUI=w1280',
      designation: 'Anaesthetist',
      specialization: 'Anaesthesiology, Surgical Support',
      qualifications: 'B.Sc., M.B.B.S., D.A',
      experience: '15+ years',
      languages: 'English, Malayalam',
      bio: `Dr. Jithendranath is the dedicated Anaesthetist at MOSCMM Kariambady Eye Hospital. With 
        qualifications including B.Sc., M.B.B.S., and D.A. (Diploma in Anaesthesiology), he ensures 
        the safety and comfort of patients during surgical procedures. His expertise in ophthalmic 
        anaesthesia is crucial for the hospital's surgical programs, including cataract surgeries 
        and other eye procedures. Dr. Jithendranath's experience ensures that even elderly and 
        high-risk patients can safely undergo necessary eye surgeries.`,
      achievements: [
        'Expertise in ophthalmic anaesthesia',
        'Ensuring patient safety during surgeries',
        'Managing anaesthesia for high-risk patients',
        'Essential support for the surgical team'
      ]
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
                <div className="doctor-profile__experience">
                  <span className="doctor-profile__experience-number">{doctor.experience}</span>
                  <span className="doctor-profile__experience-text">Experience</span>
                </div>
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

                <div className="doctor-profile__achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {doctor.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

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

export default Doctors;
