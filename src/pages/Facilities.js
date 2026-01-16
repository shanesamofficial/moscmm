import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  CheckCircle,
  Microscope,
  Shield,
  Stethoscope
} from 'lucide-react';
import './Facilities.css';

import ascanImg from '../assets/ascan.webp';
import refractoKeratometerImg from '../assets/computerized auto kerato meter.jpg';
import fieldAnalyserImg from '../assets/Computerized filed analyser.jpg';
import diodeGreenLaserImg from '../assets/diode green laser.jpg';
import fundusCameraImg from '../assets/fundus camera.jpg';
import operatingMicroscopeImg from '../assets/Operating microscope.webp';
import phacoemulsificationImg from '../assets/phacoemulsification.jpg';
import slitLampImg from '../assets/slit lamp microscope.jpg';
import tonometryImg from '../assets/tonometry.jpg';
import yagLaserImg from '../assets/YAG-Laser.jpg';

const Facilities = () => {
  const mainSurgeries = [
    'Cataract Surgery',
    'Occuloplasty',
    'Trabeculectomy',
    'Squint correction',
    'Probing',
    'Pterygium',
    'DCT (Dacryocystectomy)'
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
      title: 'Slit lamp microscope',
      image: slitLampImg,
      features: ['Detailed examination of cornea, lens, and anterior segment', 'Essential for routine eye evaluation']
    },
    {
      id: 'operating-microscope',
      title: 'Operating microscope',
      image: operatingMicroscopeImg,
      features: ['Magnified view for microsurgical procedures', 'Supports precision during surgeries']
    },
    {
      id: 'computerized-refracto-kerato',
      title: 'Computerized auto refrato + kerato meter',
      image: refractoKeratometerImg,
      features: ['Objective refraction assessment', 'Measures corneal curvature (keratometry)']
    },
    {
      id: 'yag-laser',
      title: 'Yag laser',
      image: yagLaserImg,
      features: ['Used for laser procedures such as iridotomy', 'Supports glaucoma-related laser treatment']
    },
    {
      id: 'computerized-field-analyser',
      title: 'Computerized filed analyser',
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
      id: 'applanation-tono-meter',
      title: 'Applanation Tono meter',
      image: tonometryImg,
      features: ['Measures intraocular pressure (IOP)', 'Core test for glaucoma screening']
    }
  ];

  return (
    <div className="facilities-page">
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>Facilities</h1>
            <p>Our main surgeries and key diagnostic / surgical equipment</p>
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
          <div className="facilities-grid">
            <div className="facilities-card">
              <div className="facilities-card__head">
                <Activity size={22} />
                <h2>Main Surgeries</h2>
              </div>
              <ul className="facilities-list">
                {mainSurgeries.map((item) => (
                  <li key={item}>
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="facilities-card">
              <div className="facilities-card__head">
                <Shield size={22} />
                <h2>Hospital Facilities</h2>
              </div>
              <ul className="facilities-list">
                {[
                  '24 hour emergency service',
                  'Pharmacy',
                  'Optical dispensary',
                  'Well equipped A/c operation theatre complex',
                  'General wards and different kinds of special rooms'
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
