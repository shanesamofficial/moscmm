import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import PatientInfo from './pages/PatientInfo';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import InitialLoader from './components/InitialLoader';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const startAt = Date.now();
    const MIN_VISIBLE_MS = 750;
    let done = false;
    let intervalId = 0;
    let fadeTimerId = 0;

    const stopInterval = () => {
      if (intervalId) window.clearInterval(intervalId);
      intervalId = 0;
    };

    const finish = () => {
      if (done) return;
      done = true;
      stopInterval();
      setLoadingProgress(100);

      const elapsed = Date.now() - startAt;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

      fadeTimerId = window.setTimeout(() => {
        setIsInitialLoading(false);
      }, remaining + 300);
    };

    if (prefersReducedMotion) {
      setLoadingProgress(100);
      window.setTimeout(() => setIsInitialLoading(false), 200);
      return;
    }

    intervalId = window.setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) return prev;
        const bump = 2 + Math.random() * 6;
        return Math.min(90, prev + bump);
      });
    }, 140);

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    const fallback = window.setTimeout(finish, 5000);

    return () => {
      stopInterval();
      window.clearTimeout(fallback);
      if (fadeTimerId) window.clearTimeout(fadeTimerId);
      window.removeEventListener('load', finish);
    };
  }, []);

  useEffect(() => {
    if (!isInitialLoading) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isInitialLoading]);

  return (
    <div className="App">
      <ScrollProgressBar />
      <InitialLoader active={isInitialLoading} progress={loadingProgress} />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patient-info" element={<PatientInfo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
