/**
 * ProfileCard.jsx — 3D Tilt Profile Card with Mobile Accelerometer Integration
 * 
 * Features:
 * - 3D Tilt driven by built-in Phone Accelerometer (DeviceOrientation API) on mobile devices.
 * - Mouse cursor 3D Tilt fallback on PC/Desktop environments.
 * - Permanent 100% Black & White portrait image (/Potrait1.jpeg).
 * - Dark Iridescent shimmer sheen overlay.
 * - ONLY 3 items: Photo, Email (manasx1upadhyay@gmail.com), Phone (+91 761732-5347).
 */
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Sparkles } from 'lucide-react';

export default function ProfileCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  /* Mobile Accelerometer / Gyroscope Integration */
  useEffect(() => {
    // Check if coarse pointer (mobile/tablet touch screen)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsMobileDevice(isTouch);

    if (!isTouch || !window.DeviceOrientationEvent) return;

    const handleOrientation = (event) => {
      // event.gamma: left-to-right tilt in degrees [-90, 90]
      // event.beta: front-to-back tilt in degrees [-180, 180]
      const gamma = event.gamma || 0; // Y tilt
      const beta = event.beta || 0;   // X tilt

      // Clamp angles for smooth response
      const clampedGamma = Math.max(-30, Math.min(30, gamma));
      const clampedBeta = Math.max(-30, Math.min(30, beta - 45)); // 45deg neutral holding position

      const tiltX = (clampedGamma / 30) * 25;
      const tiltY = -(clampedBeta / 30) * 25;

      const shineX = ((clampedGamma + 30) / 60) * 100;
      const shineY = ((clampedBeta + 30) / 60) * 100;

      setTilt({
        x: tiltX,
        y: tiltY,
        shineX,
        shineY,
      });
    };

    // Request permission on iOS 13+ if required
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then((state) => {
          if (state === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          }
        })
        .catch(() => {});
    } else {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  /* Desktop Mouse Tilt Handler */
  const handleMouseMove = (e) => {
    if (isMobileDevice) return; // Do not override accelerometer on mobile

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: x * 25,
      y: -y * 25,
      shineX: (x + 0.5) * 100,
      shineY: (y + 0.5) * 100,
    });
  };

  const handleMouseLeave = () => {
    if (isMobileDevice) return;
    setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 });
  };

  return (
    <div
      className="perspective-1000 w-full max-w-md mx-auto select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="bg-carbon border border-graphite-border p-6 sm:p-8 relative overflow-hidden transition-transform duration-150 ease-out shadow-2xl group"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
          transformStyle: 'preserve-3d',
          boxShadow: '0 25px 50px -12px rgba(255, 79, 43, 0.25), 0 0 1px 1px rgba(255, 79, 43, 0.2)',
        }}
      >
        {/* Dark Iridescent Shimmer Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255, 79, 43, 0.25) 0%, rgba(255, 255, 255, 0.1) 45%, transparent 80%)`,
          }}
        />

        {/* Top Ember Orange Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-ember-orange z-20" />

        {/* 1. Permanent Black & White Portrait Image */}
        <div className="relative w-full aspect-square mb-6 overflow-hidden border border-graphite-border bg-void-black z-20">
          <img
            src="/Potrait1.jpeg"
            alt="Manas Upadhyay Portrait"
            className="w-full h-full object-cover object-center grayscale contrast-115"
            style={{
              filter: 'grayscale(100%) contrast(115%) brightness(95%)',
            }}
          />
          <div className="absolute bottom-3 left-3 bg-void-black/85 backdrop-blur-md px-3 py-1 border border-graphite-border flex items-center gap-2">
            <Sparkles size={12} className="text-ember-orange animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-bone-white">
              Manas Upadhyay
            </span>
          </div>
        </div>

        {/* 2 & 3. Email and Phone Only */}
        <div className="space-y-4 pt-2 border-t border-graphite-border relative z-20">
          {/* 2. Email */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-void-black border border-graphite-border text-ember-orange shrink-0">
              <Mail size={18} />
            </div>
            <div className="overflow-hidden">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-steel-mid">
                Email
              </span>
              <a
                href="mailto:manasx1upadhyay@gmail.com"
                className="font-mono text-sm sm:text-base text-bone-white hover:text-ember-orange transition-colors truncate block no-underline"
              >
                manasx1upadhyay@gmail.com
              </a>
            </div>
          </div>

          {/* 3. Phone */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-void-black border border-graphite-border text-ember-orange shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-steel-mid">
                Phone
              </span>
              <a
                href="tel:+917617325347"
                className="font-mono text-sm sm:text-base text-bone-white hover:text-ember-orange transition-colors no-underline block"
              >
                +91 761732-5347
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
