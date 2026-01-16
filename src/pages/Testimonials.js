import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote,
  Calendar,
  ArrowRight
} from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Velayudhan Kunhi',
      location: 'Paniya Tribal Community, Wayanad',
      avatar: 'VK',
      rating: 5,
      testimonial: `After my cataract surgery at MOSCMM Kariambady Eye Hospital, I can see the world 
        clearly again. For years, I struggled with dim vision and couldn't work in the fields anymore. 
        The doctors and staff were incredibly kind and caring. Being from a tribal community, I never 
        thought I could afford such treatment, but their charitable mission made it possible. Today, 
        I can see my grandchildren's faces clearly. This hospital is truly a blessing for people like us.`,
      treatment: 'Cataract Surgery',
      date: 'March 2023'
    },
    {
      id: 2,
      name: 'Santha Madhavan',
      location: 'Anganwadi Worker, Thirunelly',
      avatar: 'SM',
      rating: 5,
      testimonial: `The eye camp organized in our village was a blessing. Many elderly people who had 
        lost hope of ever seeing properly again received free treatment. I helped coordinate the camp 
        as an Anganwadi worker, and I was amazed by the dedication of the medical team. They examined 
        over 200 people in a single day and arranged free surgeries for those who needed them. The 
        hospital's outreach program is truly serving God's purpose.`,
      treatment: 'Community Eye Camp',
      date: 'January 2023'
    },
    {
      id: 3,
      name: 'Raghavan Nair',
      location: 'Retired Teacher, Mananthavady',
      avatar: 'RN',
      rating: 5,
      testimonial: `I was diagnosed with glaucoma two years ago. The doctors at MOSCMM caught it early 
        during a routine check-up and started treatment immediately. Dr. Thomas Varghese explained 
        everything about the condition and the importance of regular monitoring. Thanks to their timely 
        intervention, my vision has been preserved. I'm grateful for their expertise and the follow-up 
        care they provide. Every six months, I come for my check-up, and they always treat me with respect.`,
      treatment: 'Glaucoma Management',
      date: 'Ongoing since 2022'
    },
    {
      id: 4,
      name: 'Lakshmi Devi',
      location: 'Homemaker, Kalpetta',
      avatar: 'LD',
      rating: 5,
      testimonial: `My son Arjun was diagnosed with lazy eye (amblyopia) when he was 5 years old. 
        Dr. Mary Philip was wonderful with him - so patient and gentle. She explained the treatment 
        plan clearly and worked with us for over a year with patching therapy and exercises. Today, 
        Arjun is 8 years old and his vision has improved dramatically. We are so thankful to the 
        pediatric eye care team for their dedication.`,
      treatment: 'Pediatric Eye Care - Amblyopia Treatment',
      date: 'Treatment completed 2023'
    },
    {
      id: 5,
      name: 'Fr. Joseph Thomas',
      location: 'Parish Priest, Bathery',
      avatar: 'JT',
      rating: 5,
      testimonial: `As a priest, I've seen firsthand the impact MOSCMM Kariambady Eye Hospital has had 
        on our community. The hospital embodies the true spirit of Christian service - healing those in 
        need without discrimination. I've accompanied many parishioners, especially from poor families, 
        for their treatments. The staff treats everyone with dignity, whether they can pay or not. This 
        is healthcare as it should be - accessible to all.`,
      treatment: 'Community Observer',
      date: 'Ongoing'
    },
    {
      id: 6,
      name: 'Krishnan Kutty',
      location: 'Farmer, Pulpally',
      avatar: 'KK',
      rating: 5,
      testimonial: `I suffered from diabetic retinopathy and was losing my vision gradually. Dr. John 
        Mathew, the retina specialist, performed laser treatment on both my eyes. He also counseled me 
        about controlling my diabetes better. The treatment has stabilized my vision, and I can continue 
        my farming work. The hospital also helped me with managing my diabetes diet. They truly care 
        about the whole person, not just the eyes.`,
      treatment: 'Diabetic Retinopathy Treatment',
      date: 'August 2023'
    },
    {
      id: 7,
      name: 'Meera Kumari',
      location: 'College Student, Sultan Bathery',
      avatar: 'MK',
      rating: 5,
      testimonial: `I needed contact lenses because I couldn't wear glasses during my dance performances. 
        Dr. Sarah Abraham at the Contact Lens Clinic was excellent. She did thorough testing and found 
        the perfect lenses for my eyes and lifestyle. She taught me proper care techniques and always 
        makes time for my follow-up visits. The quality of care here matches any big city hospital, 
        but with small-town warmth.`,
      treatment: 'Contact Lens Fitting',
      date: 'June 2023'
    },
    {
      id: 8,
      name: 'Govindan Master',
      location: 'School Teacher, Panamaram',
      avatar: 'GM',
      rating: 5,
      testimonial: `When the hospital's team came to our school for vision screening, they identified 
        several children with vision problems that we hadn't noticed. Three students in my class got 
        free spectacles. One child had a serious condition that needed immediate attention. The school 
        screening program is doing wonderful work - these children's academic performance has improved 
        significantly after getting proper vision correction.`,
      treatment: 'School Screening Program',
      date: 'November 2023'
    }
  ];

  const stats = [
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '100,000+', label: 'Patients Treated' },
    { number: '20,000+', label: 'Successful Surgeries' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={18}
        className={index < rating ? 'star-filled' : 'star-empty'}
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="testimonials-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>Patient Testimonials</h1>
            <p>Read stories from patients whose lives have been transformed by our care</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Testimonials</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="testimonial-stats">
        <div className="container">
          <div className="testimonial-stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="testimonial-stats__item">
                <span className="testimonial-stats__number">{stat.number}</span>
                <span className="testimonial-stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header">
            <span className="testimonials-label">Patient Stories</span>
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">
              Every testimonial represents a life touched by our care. These stories inspire 
              us to continue our mission of bringing sight and hope to those in need.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card-large">
                <div className="testimonial-card-large__header">
                  <div className="testimonial-card-large__avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-card-large__info">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.location}</p>
                    <div className="testimonial-card-large__rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <Quote className="testimonial-card-large__quote" size={40} />
                </div>
                <div className="testimonial-card-large__content">
                  <p>{testimonial.testimonial}</p>
                </div>
                <div className="testimonial-card-large__footer">
                  <span className="testimonial-card-large__treatment">
                    {testimonial.treatment}
                  </span>
                  <span className="testimonial-card-large__date">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Story Section */}
      <section className="share-story section bg-light">
        <div className="container">
          <div className="share-story__content">
            <div className="share-story__text">
              <h2>Share Your Story</h2>
              <p>
                Have you or a loved one received care at MOSCMM Kariambady Eye Hospital? 
                We would love to hear about your experience. Your story could inspire others 
                to seek the care they need.
              </p>
              <ul>
                <li>Your feedback helps us improve our services</li>
                <li>Stories of recovery inspire hope in others</li>
                <li>Help spread awareness about our charitable mission</li>
              </ul>
            </div>
            <div className="share-story__form">
              <h3>Submit Your Testimonial</h3>
              <form>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-input" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-input" placeholder="Your village/town" />
                </div>
                <div className="form-group">
                  <label className="form-label">Treatment Received</label>
                  <input type="text" className="form-input" placeholder="e.g., Cataract Surgery" />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Experience</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="Share your experience with us..."
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Story
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta">
        <div className="container">
          <div className="testimonials-cta__content">
            <h2>Experience Our Compassionate Care</h2>
            <p>
              Join thousands of satisfied patients who have trusted MOSCMM Kariambady 
              Eye Hospital with their vision. Schedule your appointment today.
            </p>
            <div className="testimonials-cta__buttons">
              <Link to="/patient-info" className="btn btn-primary btn-lg">
                <Calendar size={20} />
                Book Appointment
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                View Services
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
