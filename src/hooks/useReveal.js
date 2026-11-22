import { useEffect } from 'react';

/** Adds `.active` to every `.reveal` element as it scrolls into view. Re-scans when `key` changes. */
export default function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.active)');
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('active'));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}
