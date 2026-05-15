'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Heart } from 'lucide-react';

const previews = [
  { id: 1, image: '/assets/gallery/ambience.jpeg', caption: 'Golden hours & glowing vibes ✨', likes: '324' },
  { id: 2, image: '/assets/food/peri-peri-fries.jpg', caption: 'The fries that started it all 🍟🔥', likes: '287' },
  { id: 3, image: '/assets/gallery/drink.jpeg', caption: 'Sip slow, feel good 🍹', likes: '412' },
];

export default function InstagramSection() {
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
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #fbbf24, #ec4899)', marginBottom: '16px' }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <p style={{ color: '#fbbf24', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '14px' }}>@jugnu_cafe_</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.15, marginBottom: '16px' }}>
            Follow Our <span className="gradient-text" style={{ fontStyle: 'italic' }}>Vibes</span>
          </h2>
          <div className="divider-glow" style={{ width: '80px', margin: '0 auto 16px' }} />
          <p style={{ color: '#c4a882', fontSize: '14px', maxWidth: '380px', margin: '0 auto', lineHeight: 1.6 }}>
            Tag us in your Jugnu moments. We love seeing your glow.
          </p>
        </motion.div>

        {/* Preview Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {previews.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/jugnu_cafe_/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '14px', aspectRatio: '1', display: 'block' }}
              className="insta-card"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', inset: 0, borderRadius: '14px', border: '1px solid transparent', transition: 'border-color 0.3s' }} className="insta-border" />

              {/* Caption */}
              <div style={{ position: 'absolute', bottom: '14px', left: '14px', right: '14px' }}>
                <p style={{ color: '#f5f0e8', fontSize: '12px', fontWeight: 500, lineHeight: 1.4 }}>{post.caption}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '6px' }}>
                  <Heart size={11} style={{ color: '#fbbf24' }} fill="currentColor" />
                  <span style={{ color: '#fbbf24', fontSize: '10px', fontWeight: 600 }}>{post.likes}</span>
                </div>
              </div>

              {/* Hover icon */}
              <div style={{ position: 'absolute', top: '12px', right: '12px', opacity: 0, transition: 'opacity 0.3s' }} className="insta-icon">
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ExternalLink size={11} style={{ color: '#fbbf24' }} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <a
            href="https://www.instagram.com/jugnu_cafe_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '13px',
              color: '#fff',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 50%, #8b5cf6 100%)',
              boxShadow: '0 4px 16px rgba(245,158,11,0.2)',
              transition: 'transform 0.2s',
            }}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow Our Vibes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
