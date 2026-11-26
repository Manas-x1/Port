/**
 * Lightbox.jsx — full-screen viewer for stills.
 * Wrap a gallery in <LightboxGallery>; tapping any image inside opens it.
 * Arrows / swipe to move, Esc / tap outside to close.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const full = (src) => src.replace('/stills/sm/', '/stills/');

export default function LightboxGallery({ children, className = '' }) {
  const boxRef = useRef(null);
  const [items, setItems] = useState([]);
  const [i, setI] = useState(-1);
  const open = i >= 0;

  const onClick = (e) => {
    const img = e.target.closest('img');
    if (!img || !boxRef.current) return;
    const imgs = [...boxRef.current.querySelectorAll('img')];
    setItems(imgs.map((el) => ({ src: full(el.getAttribute('src')), alt: el.alt })));
    setI(imgs.indexOf(img));
  };

  const close = useCallback(() => setI(-1), []);
  const step = useCallback((d) => setI((v) => (v + d + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    document.documentElement.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
      window.__lenis?.start();
    };
  }, [open, close, step]);

  // Preload neighbours so arrowing feels instant
  useEffect(() => {
    if (!open || items.length < 2) return;
    [1, -1].forEach((d) => { new Image().src = items[(i + d + items.length) % items.length].src; });
  }, [open, i, items]);

  const touch = useRef(null);
  const item = items[i];

  return (
    <>
      <div ref={boxRef} onClick={onClick} className={`[&_img]:cursor-zoom-in ${className}`}>
        {children}
      </div>
      {createPortal(
        <AnimatePresence>
          {open && item && (
            <motion.div
              key="lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Image viewer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[10000] bg-void-black flex flex-col"
              onClick={close}
              onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                if (touch.current === null) return;
                const dx = e.changedTouches[0].clientX - touch.current;
                if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
                touch.current = null;
              }}
            >
              <div className="shell flex items-center justify-between py-4 t-label text-fog-light">
                <span className="tabular-nums">{String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
                <button type="button" onClick={close} className="p-3 -m-3 text-bone-white hover:text-ember-orange" aria-label="Close">
                  Close ✕
                </button>
              </div>
              <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-16">
                <motion.img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain select-none"
                  onClick={(e) => e.stopPropagation()}
                  draggable={false}
                />
                {items.length > 1 && (
                  <>
                    <button type="button" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}
                      className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-2xl text-bone-white/70 hover:text-ember-orange">←</button>
                    <button type="button" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}
                      className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-2xl text-bone-white/70 hover:text-ember-orange">→</button>
                  </>
                )}
              </div>
              <p className="shell py-4 m-0 t-label text-steel-mid min-h-[3.5rem]">{item.alt}</p>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
