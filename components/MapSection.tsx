'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="contact" className="section-warm" style={{ padding: '80px 0 100px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{ color: '#fbbf24', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '14px' }}>Find Us</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.15, marginBottom: '16px' }}>
            Find Your <span className="gradient-text" style={{ fontStyle: 'italic' }}>Glow Spot</span>
          </h2>
          <div className="divider-glow" style={{ width: '80px', margin: '0 auto 16px' }} />
          <p style={{ color: '#c4a882', fontSize: '14px', maxWidth: '420px', margin: '0 auto', lineHeight: 1.6 }}>
            We&apos;re waiting for you in Khetrajpur, Sambalpur. Come, find your favourite corner.
          </p>
        </motion.div>

        <div className="map-grid">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(245,158,11,0.12)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
            className="map-embed"
          >
            <iframe
              src="https://maps.google.com/maps?q=City+Pride+Mall+Khetrajpur+Sambalpur+Odisha&output=embed&z=15"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) saturate(0.6)', minHeight: '340px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jugnu Cafe Location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            {/* Location */}
            <div className="glass-card" style={{ borderRadius: '14px', padding: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin size={14} style={{ color: '#fbbf24' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, color: '#f5f0e8', fontSize: '12px', marginBottom: '4px' }}>Location</h3>
                  <p style={{ color: '#c4a882', fontSize: '11px', lineHeight: 1.6 }}>
                    Jugnu Cafe, In front of City Pride,<br />
                    Charuapada, Farm Rd, Khetrajpur,<br />
                    Sambalpur, Odisha — 768003
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card" style={{ borderRadius: '14px', padding: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Clock size={14} style={{ color: '#fbbf24' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 600, color: '#f5f0e8', fontSize: '12px', marginBottom: '8px' }}>Opening Hours</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {[
                      { day: 'Mon – Fri', time: '12:00 PM – 10:00 PM' },
                      { day: 'Saturday', time: '11:00 AM – 10:30 PM' },
                      { day: 'Sunday', time: '11:00 AM – 10:30 PM' },
                    ].map((h) => (
                      <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#c4a882', fontSize: '11px' }}>{h.day}</span>
                        <span style={{ color: '#f5f0e8', fontSize: '11px', fontWeight: 500 }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <a
              href="https://wa.me/918917473202"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '13px',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '13px',
                color: '#fff',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                boxShadow: '0 4px 14px rgba(37,211,102,0.2)',
              }}
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>

            <a
              href="https://share.google/7VswjAcF4grKkS5nt"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-glow-btn"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px', borderRadius: '10px', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}
            >
              <Navigation size={15} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
