'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera } from 'lucide-react';

const galleryImages = [
  { src: '/assets/gallery/ambience.jpeg', alt: 'Cafe ambience', span: 'span 2 / span 2' },
  { src: '/assets/food/peri-peri-fries.jpg', alt: 'Peri Peri Fries', span: '' },
  { src: '/assets/food/white-sauce-pasta.jpg', alt: 'White Sauce Pasta', span: '' },
  { src: '/assets/gallery/interior.jpeg', alt: 'Interior seating', span: '/ span 2' },
  { src: '/assets/food/chilli-chicken.jpeg', alt: 'Chilli Chicken', span: '' },
  { src: '/assets/food/mojito.jpeg', alt: 'Virgin Mojito', span: '' },
  { src: '/assets/gallery/exterior.jpeg', alt: 'Cafe exterior', span: 'span 2 /' },
  { src: '/assets/food/biryani.jpg', alt: 'Chicken Biryani', span: '' },
  { src: '/assets/food/cold-coffee.jpg', alt: 'Cold Coffee', span: '' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-warm" style={{ padding: '80px 0 100px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{ color: '#fbbf24', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '14px' }}>Gallery</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.15, marginBottom: '16px' }}>
            Moments That <span className="gradient-text" style={{ fontStyle: 'italic' }}>Glow</span>
          </h2>
          <div className="divider-glow" style={{ width: '80px', margin: '0 auto 16px' }} />
          <p style={{ color: '#c4a882', fontSize: '14px', maxWidth: '420px', margin: '0 auto', lineHeight: 1.6 }}>
            Every corner of Jugnu is crafted to be your next favourite photo.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="gallery-item"
              style={{ gridArea: img.span || undefined, position: 'relative', overflow: 'hidden', borderRadius: '10px', cursor: 'pointer' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                className="group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,15,0)', transition: 'background 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="gallery-overlay">
                <div style={{ opacity: 0, transition: 'opacity 0.3s' }} className="gallery-icon">
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Camera size={14} style={{ color: '#fbbf24' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          <a
            href="https://www.instagram.com/jugnu_cafe_/"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-glow-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style={{ color: '#f59e0b' }}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow Our Vibes on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
