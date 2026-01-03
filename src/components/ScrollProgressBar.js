import React, { useEffect, useRef, useState } from 'react';
import './ScrollProgressBar.css';

export default function ScrollProgressBar() {
  const [topOffset, setTopOffset] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateBar = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      );
      const winHeight = window.innerHeight;
      const scrollable = docHeight - winHeight;
      const pct = scrollable > 0 ? (scrollY / scrollable) * 100 : 0;
      const clamped = Math.max(0, Math.min(100, pct));
      if (barRef.current) {
        barRef.current.style.width = `${clamped}%`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateBar);
      }
    };

    updateBar();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateBar);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateBar);
    };
  }, []);

  useEffect(() => {
    const headerEl = document.querySelector('.header');
    if (!headerEl) return;

    const updateOffset = () => {
      const rect = headerEl.getBoundingClientRect();
      setTopOffset(Math.max(0, Math.round(rect.height)));
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => updateOffset());
      ro.observe(headerEl);
    }

    return () => {
      window.removeEventListener('resize', updateOffset);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true" style={{ top: `${topOffset}px` }}>
      <div ref={barRef} className="scroll-progress__bar" />
    </div>
  );
}
