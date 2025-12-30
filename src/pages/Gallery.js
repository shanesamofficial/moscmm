import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight
} from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'facility', name: 'Hospital Facility' },
    { id: 'camps', name: 'Eye Camps' },
    { id: 'surgeries', name: 'Surgeries' },
    { id: 'outreach', name: 'Community Outreach' },
    { id: 'events', name: 'Events' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
      title: 'Hospital Main Building',
      description: 'The main building of MOSCMM Kariambady Eye Hospital',
      category: 'facility'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=400&h=300&fit=crop',
      title: 'Eye Examination',
      description: 'Comprehensive eye examination using modern equipment',
      category: 'facility'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      title: 'Community Eye Camp',
      description: 'Free eye screening camp in a tribal village',
      category: 'camps'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop',
      title: 'Operation Theatre',
      description: 'State-of-the-art operation theatre for eye surgeries',
      category: 'surgeries'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      title: 'Village Screening Camp',
      description: 'Eye screening at a remote tribal settlement',
      category: 'outreach'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop',
      title: 'Diagnostic Equipment',
      description: 'Advanced diagnostic equipment for accurate diagnosis',
      category: 'facility'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=400&h=300&fit=crop',
      title: 'Patient Care',
      description: 'Compassionate care for patients from rural communities',
      category: 'outreach'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop',
      title: 'School Screening Program',
      description: 'Vision screening at a tribal school',
      category: 'camps'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      title: 'Slit Lamp Examination',
      description: 'Detailed eye examination using slit lamp',
      category: 'facility'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop',
      title: 'Medical Team',
      description: 'Our dedicated medical team at work',
      category: 'events'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop',
      title: 'Contact Lens Clinic',
      description: 'Expert fitting of contact lenses',
      category: 'facility'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?w=400&h=300&fit=crop',
      title: 'Cataract Surgery Camp',
      description: 'Free cataract surgery camp for underprivileged patients',
      category: 'surgeries'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop',
      title: 'Patient Waiting Area',
      description: 'Comfortable waiting area for patients',
      category: 'facility'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
      title: 'Doctor Consultation',
      description: 'One-on-one consultation with our specialists',
      category: 'facility'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop',
      title: 'Hospital Anniversary Event',
      description: 'Celebrating years of service to the community',
      category: 'events'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=300&fit=crop',
      title: 'Spectacle Distribution',
      description: 'Free distribution of spectacles at eye camp',
      category: 'outreach'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    if (direction === 'prev') {
      setCurrentImage(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setCurrentImage(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>Gallery</h1>
            <p>Explore images of our facility, services, and community outreach programs</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Gallery</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section">
        <div className="container">
          <div className="section-header">
            <span className="gallery-label">Our Photo Gallery</span>
            <h2 className="section-title">Glimpses of Our Work</h2>
            <p className="section-subtitle">
              Browse through photos of our hospital facilities, community eye camps, 
              surgeries, and outreach programs that showcase our commitment to 
              eye care for all.
            </p>
          </div>

          {/* Category Filter */}
          <div className="gallery-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`gallery-filter__btn ${activeCategory === category.id ? 'gallery-filter__btn--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={image.thumb} alt={image.title} />
                <div className="gallery-item__overlay">
                  <Camera size={24} />
                  <span>{image.title}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="gallery-empty">
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox}>
            <X size={24} />
          </button>
          <button 
            className="lightbox__nav lightbox__nav--prev" 
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
          >
            <ChevronLeft size={32} />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={filteredImages[currentImage].src} alt={filteredImages[currentImage].title} />
            <div className="lightbox__caption">
              <h3>{filteredImages[currentImage].title}</h3>
              <p>{filteredImages[currentImage].description}</p>
            </div>
          </div>
          <button 
            className="lightbox__nav lightbox__nav--next" 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
          >
            <ChevronRight size={32} />
          </button>
          <div className="lightbox__counter">
            {currentImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}

      {/* Video Section */}
      <section className="video-section section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Watch Our Story</h2>
            <p className="section-subtitle">
              Learn more about our mission and the impact of our work through these videos
            </p>
          </div>
          <div className="video-grid">
            <div className="video-card">
              <div className="video-card__thumbnail">
                <img 
                  src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&h=340&fit=crop" 
                  alt="Hospital introduction video"
                />
                <div className="video-card__play">▶</div>
              </div>
              <h3>About MOSCMM Kariambady Eye Hospital</h3>
              <p>A brief introduction to our hospital, mission, and services</p>
            </div>
            <div className="video-card">
              <div className="video-card__thumbnail">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=340&fit=crop" 
                  alt="Eye camp video"
                />
                <div className="video-card__play">▶</div>
              </div>
              <h3>Community Eye Camp Documentary</h3>
              <p>See how our outreach programs bring eye care to remote areas</p>
            </div>
            <div className="video-card">
              <div className="video-card__thumbnail">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=340&fit=crop" 
                  alt="Patient testimonial video"
                />
                <div className="video-card__play">▶</div>
              </div>
              <h3>Patient Success Stories</h3>
              <p>Hear from patients whose lives were transformed through our care</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="container">
          <div className="gallery-cta__content">
            <h2>Visit Our Hospital</h2>
            <p>
              Experience our world-class eye care services firsthand. 
              Schedule a visit or book an appointment today.
            </p>
            <div className="gallery-cta__buttons">
              <Link to="/patient-info" className="btn btn-primary btn-lg">
                <Calendar size={20} />
                Book Appointment
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Get Directions
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
