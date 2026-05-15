'use client';

import Image from 'next/image';
import { Sparkles, Clock, MapPin, Star } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

const features = [
  { icon: Sparkles, title: 'Fairy Light Ambience', desc: 'Warm glowing lights for a cinematic vibe.' },
  { icon: Star, title: 'Curated Menu', desc: 'Handcrafted dishes that warm your soul.' },
  { icon: Clock, title: 'Open Till Late', desc: 'Your hangout, open till 10 PM daily.' },
  { icon: MapPin, title: 'Prime Location', desc: 'Khetrajpur, Sambalpur — easy to reach.' },
];

export default function ExperienceSection() {
  const header = useReveal();
  const imageCol = useReveal();
  const textCol = useReveal();
  const banner = useReveal();

  return (
    <section id="experience" className="section-warm" style={{ padding: '80px 0 100px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section Header */}
        <div
          ref={header.ref}
          className={`reveal-up ${header.visible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p style={{ color: '#fbbf24', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '14px' }}>
            The Experience
          </p>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.15, marginBottom: '18px' }}>
            More Than Just a Cafe
          </h2>
          <div className="divider-glow" style={{ width: '80px', margin: '0 auto 20px' }} />
          <p style={{ color: '#c4a882', fontSize: '15px', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7, textAlign: 'center' }}>
            Your cozy corner for warm conversations, aesthetic moments, and food that feels like a hug.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="experience-grid" style={{ marginBottom: '72px' }}>

          {/* Left: Image */}
          <div
            ref={imageCol.ref}
            className={`reveal-left ${imageCol.visible ? 'visible' : ''}`}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <Image
                src="/assets/gallery/interior.jpeg"
                alt="Jugnu Cafe interior ambience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,15,0.6) 0%, transparent 50%)' }} />
            </div>

            {/* Rating badge */}
            <div
              className="glass-card"
              style={{ position: 'absolute', bottom: '20px', right: '20px', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Star size={16} style={{ color: '#fbbf24' }} fill="currentColor" />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '15px', lineHeight: 1.2 }}>4.8 / 5</div>
                <div style={{ fontSize: '10px', color: '#c4a882', marginTop: '2px' }}>500+ Reviews</div>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div
            ref={textCol.ref}
            className={`reveal-right ${textCol.visible ? 'visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h3 className="font-display" style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.2, marginBottom: '20px' }}>
              A Cozy Glowing
              <br />
              <span className="gradient-text" style={{ fontStyle: 'italic' }}>Evening Escape</span>
            </h3>

            <p style={{ color: '#c4a882', fontSize: '14px', lineHeight: 1.8, marginBottom: '14px' }}>
              Jugnu Cafe was born from a love for warm evenings, great conversations, and food that tells a story. Our space is designed to feel like your favourite corner — lit by fairy lights, filled with warmth.
            </p>

            <p style={{ color: '#c4a882', fontSize: '14px', lineHeight: 1.8, marginBottom: '28px' }}>
              Whether it&apos;s a late-night catch-up with friends, a peaceful solo outing, or an aesthetic date night — Jugnu sets the perfect mood.
            </p>

            <div className="divider-glow" style={{ marginBottom: '28px' }} />

            {/* Features grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
              {features.map((f) => (
                <div
                  key={f.title}
                  style={{
                    borderRadius: '12px',
                    padding: '16px',
                    border: '1px solid rgba(245,158,11,0.08)',
                    background: 'rgba(10,10,15,0.5)',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(245,158,11,0.08)',
                    border: '1px solid rgba(245,158,11,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px',
                  }}>
                    <f.icon size={16} style={{ color: '#fbbf24' }} />
                  </div>
                  <h4 style={{ fontWeight: 600, color: '#f5f0e8', fontSize: '13px', marginBottom: '4px', lineHeight: 1.3 }}>
                    {f.title}
                  </h4>
                  <p style={{ color: '#7a6b8a', fontSize: '11px', lineHeight: 1.5 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width ambience banner */}
        <div
          ref={banner.ref}
          className={`reveal-scale ${banner.visible ? 'visible' : ''}`}
          style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: 'clamp(200px, 28vw, 300px)' }}
        >
          <Image
            src="/assets/gallery/ambience.jpeg"
            alt="Jugnu Cafe ambience"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.4) 50%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 clamp(24px, 5vw, 64px)' }}>
            <div>
              <p style={{ color: '#fbbf24', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>
                Open Daily
              </p>
              <h3 className="font-display" style={{ fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.2, marginBottom: '6px' }}>
                12:00 PM – 10:00 PM
              </h3>
              <p style={{ color: '#c4a882', fontSize: '14px' }}>Your table is always waiting.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
