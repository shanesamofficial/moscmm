import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Activity,
  Eye,
  Glasses,
  Microscope,
  Building,
  Car,
  Shield,
  Heart,
  Users,
  Stethoscope,
  Bed,
  Wind,
  Droplet,
  Clock,
  Tv,
  Wifi,
  Phone,
  CheckCircle
} from 'lucide-react';
import './Facilities.css';

import ascanImg from '../assets/ascan.webp';
import refractoKeratometerImg from '../assets/computerized auto kerato meter.webp';
import fieldAnalyserImg from '../assets/Computerized filed analyser.webp';
import diodeGreenLaserImg from '../assets/diode green laser.webp';
import fundusCameraImg from '../assets/fundus camera.webp';
import operatingMicroscopeImg from '../assets/Operating microscope.webp';
import phacoemulsificationImg from '../assets/phacoemulsification.webp';
import slitLampImg from '../assets/slit lamp microscope.webp';
import tonometryImg from '../assets/tonometry.jpg';
import yagLaserImg from '../assets/YAG-Laser.webp';
import topconTrk2pImg from '../assets/Topcon TRK-2P.webp';

const Facilities = () => {
  const roomFacilities = [
    {
      id: 'general-ward-non-ac',
      title: 'General Ward (Non-AC)',
      description: 'Affordable accommodation option with basic amenities for patients requiring standard care.'
    },
    {
      id: 'single-room-non-ac',
      title: 'Single Room (Non-AC)',
      description: 'Private room offering personal space and comfort without air conditioning.'
    },
    {
      id: 'deluxe-elite-ac',
      title: 'Deluxe Room (AC)',
      description: 'Premium accommodations with enhanced amenities and air conditioning for a luxurious patient experience.'
    }
  ];

  const hospitalFacilities = [
    { id: 'ac-rooms', title: 'Airconditioned Rooms', icon: <Building size={24} /> },
    { id: 'advanced-equipment', title: 'Advanced Surgical Equipments', icon: <Microscope size={24} /> },
    { id: 'operation-theatre', title: 'Operation Theatre', icon: <Activity size={24} /> },
    { id: 'private-wards', title: 'Private Wards', icon: <Shield size={24} /> },
    { id: 'service-staff', title: 'Service Staff', icon: <Users size={24} /> },
    { id: 'vehicle-parking', title: 'Vehicle Parking', icon: <Car size={24} /> },
    { id: 'pharmacy', title: 'Pharmacy', icon: <Stethoscope size={24} /> },
    { id: 'opticals', title: 'Opticals', icon: <Glasses size={24} /> },
    { id: 'fire-security-alarm', title: 'Fire Security Alarm', icon: <Eye size={24} /> }
  ];

  const equipment = [
    {
      id: 'diode-green-laser',
      title: 'Diode green laser',
      image: diodeGreenLaserImg,
      features: ['Laser photocoagulation for retinal conditions', 'Used in retina management']
    },
    {
      id: 'fundus-camera',
      title: 'Fundus camera',
      image: fundusCameraImg,
      features: ['Retinal imaging for diagnosis and documentation', 'Useful in diabetic retinopathy screening']
    },
    {
      id: 'slit-lamp-microscope',
      title: 'Slit Lamp equipped with Applanation Tonometer',
      image: slitLampImg,
      features: [
        'Detailed examination of cornea, lens, and anterior segment',
        'Essential for routine eye evaluation',
        'Measures intraocular pressure (IOP) for glaucoma screening'
      ]
    },
    {
      id: 'operating-microscope',
      title: 'Operating microscope',
      image: operatingMicroscopeImg,
      features: ['Magnified view for microsurgical procedures', 'Supports precision during surgeries']
    },
    {
      id: 'computerized-refracto-kerato',
      title: 'Computerized Auto Refracto + Kerato Meter',
      image: refractoKeratometerImg,
      features: ['Objective refraction assessment', 'Measures corneal curvature (keratometry)']
    },
    {
      id: 'yag-laser',
      title: 'Yag Laser',
      image: yagLaserImg,
      features: ['Used for laser procedures such as iridotomy', 'Supports glaucoma-related laser treatment']
    },
    {
      id: 'computerized-field-analyser',
      title: 'Computerized Field Analyser',
      image: fieldAnalyserImg,
      features: ['Visual field testing', 'Important for glaucoma evaluation and follow-up']
    },
    {
      id: 'a-scan',
      title: 'A-Scan',
      image: ascanImg,
      features: ['Biometry for IOL power calculation', 'Pre-op measurement for cataract surgery']
    },
    {
      id: 'phacoemulsification',
      title: 'Phacoemulsification',
      image: phacoemulsificationImg,
      features: ['Modern cataract surgery technology', 'Small-incision, efficient lens removal']
    },
    {
      id: 'topcon-trk-2p',
      title: 'Topcon TRK-2P (4-in-1 Diagnostic Station)',
      image: refractoKeratometerImg,
      features: [
        'Computerized Auto Refracto + Kerato Meter: Objective refraction and corneal curvature measurement',
        'Non-Contact Tonometer: Air puff IOP measurement for glaucoma screening',
        'Pachymeter: Corneal thickness measurement for accurate pressure readings'
      ]
    }
  ];

  return (
    <div className="facilities-page">
      <SEO
        title="Hospital Facilities & Equipment"
        description="Discover our state-of-the-art diagnostic and surgical equipment, patient accommodations, and facilities at MOSCMM Kariambady Eye Hospital."
        url="/facilities"
      />
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>Facilities</h1>
            <p>Hospital facilities and key diagnostic / surgical equipment</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Facilities</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="facilities-intro section">
        <div className="container">
          <div className="section-header">
            <span className="facilities-label">Facilities</span>
            <h2 className="section-title">Hospital Facilities</h2>
            <p className="section-subtitle">
              Patient-friendly facilities to support comfortable care.
            </p>
          </div>

          <div className="facilities-amenities-grid" aria-label="Hospital facilities">
            {hospitalFacilities.map((item) => (
              <div key={item.id} className="facility-tile">
                <span className="facility-tile__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="facility-tile__title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="facilities-amenities section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="facilities-label">Room Types</span>
            <h2 className="section-title">Patient Accommodation</h2>
            <p className="section-subtitle">
              Comfortable and well-equipped rooms for patient care and recovery.
            </p>
          </div>

          <div className="room-facilities-grid" aria-label="Room facilities">
            {roomFacilities.map((room) => (
              <div key={room.id} className="room-facility-card">
                <h3 className="room-facility-card__title">{room.title}</h3>
                <p className="room-facility-card__description">{room.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="equipment-section section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="facilities-label">Equipment</span>
            <h2 className="section-title">Diagnostic & Surgical Equipment</h2>
            <p className="section-subtitle">
              Below are the key machines and instruments available at our hospital.
            </p>
          </div>

          <div className="equipment-grid">
            {equipment.map((item) => (
              <article key={item.id} className="equipment-card">
                <div className="equipment-card__image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="equipment-card__body">
                  <div className="equipment-card__titleRow">
                    <Microscope size={18} />
                    <h3 className="equipment-card__title">{item.title}</h3>
                  </div>
                  <ul className="equipment-card__features">
                    {item.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
