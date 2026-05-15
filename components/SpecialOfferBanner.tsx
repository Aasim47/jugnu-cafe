'use client';

import { Sparkles, ArrowRight } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

export default function SpecialOfferBanner() {
  const reveal = useReveal();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section style={{ position: 'relative', padding: '48px 0', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(245,158,11,0.04) 0%, rgba(245,158,11,0.08) 50%, rgba(245,158,11,0.04) 100%)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)' }} />

      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div
          ref={reveal.ref}
          className={`reveal-up offer-banner-content ${reveal.visible ? 'visible' : ''}`}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}
        >
          {/* Left: Text */}
          <div className="offer-banner-text">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '999px',
              border: '1px solid rgba(245,158,11,0.2)',
              background: 'rgba(245,158,11,0.06)',
              marginBottom: '12px',
            }}>
              <Sparkles size={11} style={{ color: '#fbbf24' }} />
              <span style={{ color: '#fbbf24', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Limited Time</span>
            </div>

            <h3 className="font-display" style={{ fontSize: 'clamp(20px, 3.5vw, 30px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.2, marginBottom: '6px' }}>
              Get <span className="gradient-text">10% Off</span> on Your First Order
            </h3>

            <p style={{ color: '#c4a882', fontSize: '13px', lineHeight: 1.5 }}>
              Visit us today and mention this offer. Valid for dine-in & WhatsApp orders.
            </p>
          </div>

          {/* Right: CTA */}
          <button
            onClick={() => scrollTo('#menu')}
            className="amber-glow-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            Order Now
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
