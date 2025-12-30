import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Phone, 
  FileText, 
  CreditCard,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  MapPin
} from 'lucide-react';
import './PatientInfo.css';

const PatientInfo = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    department: '',
    message: ''
  });

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your appointment request! We will contact you shortly to confirm.');
  };

  const opTimings = [
    { day: 'Monday', time: '9:00 AM - 5:00 PM', status: 'open' },
    { day: 'Tuesday', time: '9:00 AM - 5:00 PM', status: 'open' },
    { day: 'Wednesday', time: '9:00 AM - 5:00 PM', status: 'open' },
    { day: 'Thursday', time: '9:00 AM - 5:00 PM', status: 'open' },
    { day: 'Friday', time: '9:00 AM - 5:00 PM', status: 'open' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM', status: 'open' },
    { day: 'Sunday', time: 'Emergency Only', status: 'emergency' }
  ];

  const departments = [
    'General Ophthalmology',
    'Cataract Services',
    'Glaucoma Clinic',
    'Retina Services',
    'Pediatric Eye Care',
    'Contact Lens Clinic'
  ];

  const admissionChecklist = [
    'Valid ID proof (Aadhaar Card, Voter ID, or Passport)',
    'Previous medical records and prescriptions',
    'List of current medications',
    'Insurance documents (if applicable)',
    'BPL/Tribal card for subsidized treatment',
    'One attendant/family member',
    'Change of clothes for overnight stay',
    'Emergency contact details'
  ];

  const faqs = [
    {
      question: 'Do I need to book an appointment before visiting?',
      answer: `While we accept walk-in patients, we highly recommend booking an appointment to 
        minimize your waiting time. You can book an appointment by calling us at +91 4936 202030 
        or by filling out the appointment form on this page. Emergency cases are attended to 
        immediately without prior appointment.`
    },
    {
      question: 'What should I bring for my first visit?',
      answer: `For your first visit, please bring: a valid ID proof, any previous eye examination 
        reports or prescriptions, a list of current medications you're taking, and your glasses 
        if you wear them. If you have health insurance, bring your insurance card and policy details.`
    },
    {
      question: 'Is subsidized or free treatment available?',
      answer: `Yes, as a charitable hospital, we provide subsidized treatment to patients who 
        cannot afford full fees. Free treatment is available for patients with BPL (Below Poverty 
        Line) cards. We also conduct free eye camps for tribal communities. Please speak with our 
        medical social worker about the available options.`
    },
    {
      question: 'How much does cataract surgery cost?',
      answer: `The cost of cataract surgery varies depending on the type of surgery (Phaco or SICS) 
        and the intraocular lens (IOL) chosen. Basic surgery with standard IOL starts at affordable 
        rates, with premium IOLs available at additional cost. Subsidized and free surgeries are 
        available for eligible patients. Contact us for detailed pricing.`
    },
    {
      question: 'What are the payment options available?',
      answer: `We accept cash, debit cards, credit cards, and UPI payments. For patients with 
        government health insurance schemes like KASP (Karunya Arogya Suraksha Padhathi), we 
        provide cashless treatment for covered procedures. EMI options may be available for 
        higher-cost procedures.`
    },
    {
      question: 'Is there accommodation for patients coming from far places?',
      answer: `Yes, we have a patient guest house on campus where patients from distant places 
        can stay at nominal charges before and after their procedures. For patients undergoing 
        surgery, this facility ensures easy access for post-operative care. Please inform us 
        in advance if you need accommodation.`
    },
    {
      question: 'How long does eye surgery recovery take?',
      answer: `Recovery time varies by procedure. For cataract surgery, most patients can resume 
        normal activities within a few days, with full recovery in 4-6 weeks. Your doctor will 
        provide specific post-operative care instructions and schedule follow-up visits to 
        monitor your recovery.`
    },
    {
      question: 'Do you offer emergency eye care services?',
      answer: `Yes, we provide emergency eye care services for conditions such as eye injuries, 
        sudden vision loss, severe eye pain, or infections. For emergencies outside regular 
        hours, please call our emergency number: +91 4936 202030. Emergency cases are 
        prioritized and attended to immediately.`
    }
  ];

  const insurancePartners = [
    'KASP (Karunya Arogya Suraksha Padhathi)',
    'Ayushman Bharat PMJAY',
    'ESI (Employee State Insurance)',
    'CGHS (Central Government Health Scheme)',
    'Star Health Insurance',
    'ICICI Lombard',
    'Max Bupa Health Insurance',
    'Religare Health Insurance'
  ];

  return (
    <div className="patient-info-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>Patient Information</h1>
            <p>Everything you need to know about visiting and receiving care at our hospital</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Patient Information</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="patient-quick-links">
        <div className="container">
          <div className="patient-quick-links__grid">
            <a href="#appointment" className="patient-quick-link">
              <Calendar size={24} />
              <span>Book Appointment</span>
            </a>
            <a href="#timings" className="patient-quick-link">
              <Clock size={24} />
              <span>OP Timings</span>
            </a>
            <a href="#admission" className="patient-quick-link">
              <FileText size={24} />
              <span>Admission Info</span>
            </a>
            <a href="#insurance" className="patient-quick-link">
              <CreditCard size={24} />
              <span>Insurance</span>
            </a>
            <a href="#faq" className="patient-quick-link">
              <HelpCircle size={24} />
              <span>FAQ</span>
            </a>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="appointment" className="appointment-section section">
        <div className="container">
          <div className="appointment-grid">
            <div className="appointment-form-container">
              <h2>Book an Appointment</h2>
              <p>Fill out the form below and we will contact you to confirm your appointment.</p>
              
              <form className="appointment-form" onSubmit={handleSubmit}>
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
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="form-input"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      className="form-select"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select time slot</option>
                      <option value="09:00">9:00 AM - 10:00 AM</option>
                      <option value="10:00">10:00 AM - 11:00 AM</option>
                      <option value="11:00">11:00 AM - 12:00 PM</option>
                      <option value="12:00">12:00 PM - 1:00 PM</option>
                      <option value="14:00">2:00 PM - 3:00 PM</option>
                      <option value="15:00">3:00 PM - 4:00 PM</option>
                      <option value="16:00">4:00 PM - 5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="department">Department *</label>
                  <select
                    id="department"
                    name="department"
                    className="form-select"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select department</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your symptoms or any specific concerns"
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg appointment-form__submit">
                  <Calendar size={20} />
                  Request Appointment
                </button>
              </form>
            </div>

            <div className="appointment-info">
              <div className="appointment-info__card">
                <h3><Phone size={20} /> Book by Phone</h3>
                <p>Prefer to speak with us directly? Call our appointment desk:</p>
                <a href="tel:+914936202030" className="appointment-info__phone">
                  +91 4936 202030
                </a>
                <p className="appointment-info__hours">
                  Available Mon-Sat: 8:00 AM - 6:00 PM
                </p>
              </div>

              <div className="appointment-info__card">
                <h3><MapPin size={20} /> Walk-in Patients</h3>
                <p>
                  We welcome walk-in patients during our regular OP hours. 
                  However, please note that patients with prior appointments 
                  will be given priority.
                </p>
              </div>

              <div className="appointment-info__card appointment-info__card--highlight">
                <h3><AlertCircle size={20} /> Emergency Cases</h3>
                <p>
                  For eye emergencies (injuries, sudden vision loss, severe pain), 
                  please come directly to the hospital or call:
                </p>
                <a href="tel:+914936202030" className="appointment-info__emergency">
                  Emergency: +91 4936 202030
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OP Timings Section */}
      <section id="timings" className="timings-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Outpatient (OP) Timings</h2>
            <p className="section-subtitle">
              Plan your visit according to our regular consultation hours
            </p>
          </div>
          <div className="timings-grid">
            <div className="timings-table-container">
              <table className="timings-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Timing</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {opTimings.map((timing, index) => (
                    <tr key={index}>
                      <td>{timing.day}</td>
                      <td>{timing.time}</td>
                      <td>
                        <span className={`status-badge status-badge--${timing.status}`}>
                          {timing.status === 'open' ? 'Open' : 'Emergency Only'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="timings-note">
              <h3>Please Note:</h3>
              <ul>
                <li>Registration counter opens 30 minutes before OP timing</li>
                <li>Last token issued 30 minutes before closing time</li>
                <li>Specialty clinics may have different timings - please confirm while booking</li>
                <li>Timing may vary during public holidays</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section id="admission" className="admission-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Admission Information</h2>
            <p className="section-subtitle">
              What you need to know if you're being admitted for surgery or treatment
            </p>
          </div>
          <div className="admission-grid">
            <div className="admission-checklist">
              <h3>What to Bring</h3>
              <p>Please ensure you have the following items when coming for admission:</p>
              <ul className="checklist">
                {admissionChecklist.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="admission-process">
              <h3>Admission Process</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="process-step__number">1</div>
                  <div className="process-step__content">
                    <h4>Registration</h4>
                    <p>Complete the admission form at the registration counter with your ID proof</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__number">2</div>
                  <div className="process-step__content">
                    <h4>Pre-operative Assessment</h4>
                    <p>Medical team will conduct necessary tests and evaluations</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__number">3</div>
                  <div className="process-step__content">
                    <h4>Consent & Briefing</h4>
                    <p>Doctor will explain the procedure and obtain your informed consent</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__number">4</div>
                  <div className="process-step__content">
                    <h4>Procedure</h4>
                    <p>Surgery/treatment is performed by our expert team</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__number">5</div>
                  <div className="process-step__content">
                    <h4>Post-operative Care</h4>
                    <p>Recovery monitoring and discharge instructions provided</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="insurance-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Insurance & Payment Options</h2>
            <p className="section-subtitle">
              We work with major insurance providers to ensure affordable care
            </p>
          </div>
          <div className="insurance-content">
            <div className="insurance-list">
              <h3>Accepted Insurance & Schemes</h3>
              <div className="insurance-grid">
                {insurancePartners.map((partner, index) => (
                  <div key={index} className="insurance-item">
                    <CheckCircle size={18} />
                    <span>{partner}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="payment-options">
              <h3>Payment Options</h3>
              <ul>
                <li>Cash payment</li>
                <li>Debit / Credit cards</li>
                <li>UPI (Google Pay, PhonePe, Paytm)</li>
                <li>Bank transfer</li>
                <li>Cashless insurance claims</li>
              </ul>
              <div className="subsidy-note">
                <AlertCircle size={20} />
                <p>
                  <strong>Subsidized Care Available:</strong> Patients with BPL cards, 
                  tribal community members, and those facing financial hardship can 
                  avail subsidized or free treatment. Please speak with our Medical 
                  Social Worker for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeAccordion === index ? 'faq-item--active' : ''}`}
              >
                <button 
                  className="faq-item__question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                >
                  <span>{faq.question}</span>
                  {activeAccordion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div className="faq-item__answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="patient-cta">
        <div className="container">
          <div className="patient-cta__content">
            <h2>Have More Questions?</h2>
            <p>Our team is here to help you with any queries about your visit or treatment.</p>
            <div className="patient-cta__buttons">
              <a href="tel:+914936202030" className="btn btn-primary btn-lg">
                <Phone size={20} />
                Call Us Now
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientInfo;
