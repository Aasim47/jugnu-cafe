'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Priya Sharma', role: 'Regular Visitor', text: 'The ambience is absolutely magical! Fairy lights, great music, and the food is to die for. My go-to spot for evening hangouts.', rating: 5, avatar: 'PS' },
  { id: 2, name: 'Rahul Patel', role: 'Food Blogger', text: 'Best cafe in Sambalpur, hands down. The Peri Peri Fries and Cold Coffee combo is unbeatable. Instagram-worthy at every corner!', rating: 5, avatar: 'RP' },
  { id: 3, name: 'Ananya Das', role: 'College Student', text: "Perfect place for date nights and friend gatherings. The staff is super friendly and the White Sauce Pasta is chef's kiss!", rating: 5, avatar: 'AD' },
  { id: 4, name: 'Vikram Singh', role: 'Working Professional', text: 'Finally a cafe in Sambalpur that matches the vibe of metro city cafes. Love the cozy interiors and the Chicken Biryani is amazing.', rating: 5, avatar: 'VS' },
  { id: 5, name: 'Sneha Mohanty', role: 'Frequent Diner', text: "The Oreo Shake here is the best I've ever had! And the warm lighting makes everything feel so special. Highly recommend!", rating: 5, avatar: 'SM' },
  { id: 6, name: 'Arjun Nayak', role: 'Weekend Regular', text: 'Great place to unwind after a long week. The Mojitos are refreshing and the Chilli Chicken is perfectly spiced. Love it here!', rating: 4, avatar: 'AN' },
];

export default function TestimonialsSection() {
  return (
    <section className="section-darker" style={{ padding: '80px 0 100px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{ color: '#fbbf24', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '14px' }}>Testimonials</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.15, marginBottom: '16px' }}>
            What Our Guests <span className="gradient-text" style={{ fontStyle: 'italic' }}>Say</span>
          </h2>
          <div className="divider-glow" style={{ width: '80px', margin: '0 auto 16px' }} />
          <p style={{ color: '#c4a882', fontSize: '14px', maxWidth: '440px', margin: '0 auto', lineHeight: 1.6 }}>
            Don&apos;t just take our word for it — hear from the people who make Jugnu their happy place.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '18px' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card"
              style={{ borderRadius: '14px', padding: '22px', position: 'relative', transition: 'border-color 0.3s' }}
            >
              {/* Quote icon */}
              <Quote size={22} style={{ position: 'absolute', top: '16px', right: '16px', color: 'rgba(251,191,36,0.08)' }} />

              {/* Stars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '14px' }}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={13}
                    style={{ color: idx < t.rating ? '#fbbf24' : 'rgba(122,107,138,0.3)' }}
                    fill={idx < t.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>

              {/* Text */}
              <p style={{ color: 'rgba(245,240,232,0.8)', fontSize: '13px', lineHeight: 1.7, marginBottom: '18px' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(183,117,9,0.2))',
                  border: '1px solid rgba(245,158,11,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ color: '#fbbf24', fontSize: '10px', fontWeight: 700 }}>{t.avatar}</span>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#f5f0e8', fontSize: '12px', lineHeight: 1.3 }}>{t.name}</div>
                  <div style={{ color: '#7a6b8a', fontSize: '10px', marginTop: '2px' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '10px 20px', borderRadius: '999px', border: '1px solid rgba(245,158,11,0.12)', background: 'rgba(245,158,11,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} style={{ color: '#fbbf24' }} fill="currentColor" />
              ))}
            </div>
            <span style={{ color: '#f5f0e8', fontSize: '12px', fontWeight: 600 }}>4.8 / 5</span>
            <span style={{ color: '#c4a882', fontSize: '12px' }}>from 500+ guests</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
