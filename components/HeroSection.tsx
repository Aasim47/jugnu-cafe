'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Utensils, CalendarDays } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * 4,
        duration: 5 + Math.random() * 4,
      }))
    );
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/assets/hero/ambience.jpeg"
          alt="Jugnu Cafe ambience"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.3) 35%, rgba(10,10,15,0.85) 85%, rgba(10,10,15,1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,15,0.4) 0%, transparent 50%, rgba(10,10,15,0.3) 100%)' }} />
        {/* Warm vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,15,0.5) 100%)' }} />
      </div>

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, borderRadius: '50%', background: 'rgba(251,191,36,0.35)', pointerEvents: 'none' }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '720px', margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.04)', marginBottom: '28px' }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fbbf24' }} className="animate-pulse" />
          <span style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em' }}>Now Open · Khetrajpur, Sambalpur</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display"
          style={{ fontSize: 'clamp(36px, 7vw, 68px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.08, marginBottom: '20px' }}
        >
          Where Every{' '}
          <span className="gradient-text glow-text" style={{ fontStyle: 'italic' }}>Glow</span>
          <br />
          Tells a Story
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ color: '#c4a882', fontSize: 'clamp(15px, 2vw, 18px)', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.7 }}
        >
          A cozy cafe where fairy lights meet great food. Your perfect spot for evenings worth remembering.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
        >
          <button
            onClick={() => scrollTo('#menu')}
            className="amber-glow-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '999px', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
          >
            <Utensils size={16} />
            Explore Menu
          </button>
          <button
            onClick={() => scrollTo('#book-table')}
            className="outline-glow-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '999px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', background: 'transparent' }}
          >
            <CalendarDays size={16} />
            Book a Table
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(32px, 6vw, 56px)', marginTop: '56px' }}
        >
          {[
            { value: '50+', label: 'Menu Items' },
            { value: '4.8★', label: 'Rating' },
            { value: '500+', label: 'Happy Guests' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div className="gradient-text font-display" style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 700 }}>{stat.value}</div>
              <div style={{ fontSize: '10px', color: 'rgba(196,168,130,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'rgba(251,191,36,0.45)' }}
      >
        <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
