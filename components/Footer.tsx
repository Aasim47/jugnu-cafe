'use client';

import Image from 'next/image';
import { MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Table', href: '#book-table' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer style={{ background: '#050508', borderTop: '1px solid rgba(245,158,11,0.06)', paddingTop: '48px', paddingBottom: '24px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid" style={{ marginBottom: '36px' }}>

          {/* Logo + Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(245,158,11,0.2)' }}>
                <Image src="/assets/logo/logo.jpeg" alt="Jugnu Cafe" fill sizes="40px" style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div className="font-display glow-text" style={{ fontWeight: 700, fontSize: '18px', color: '#fbbf24', lineHeight: 1.1 }}>Jugnu</div>
                <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#c4a882', textTransform: 'uppercase', marginTop: '2px' }}>Cafe</div>
              </div>
            </div>
            <p style={{ color: '#c4a882', fontSize: '12px', lineHeight: 1.7, marginBottom: '16px', maxWidth: '280px' }}>
              A cozy glowing evening escape — where fairy lights, great food, and warm conversations come together.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {[
                { href: 'https://www.instagram.com/jugnu_cafe_/', label: 'Instagram', icon: <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg> },
                { href: 'https://wa.me/918917473202', label: 'WhatsApp', icon: <MessageCircle size={13} /> },
                { href: 'https://share.google/7VswjAcF4grKkS5nt', label: 'Maps', icon: <ExternalLink size={13} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ width: '32px', height: '32px', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4a882', transition: 'all 0.2s', textDecoration: 'none' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 600, color: '#f5f0e8', fontSize: '11px', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{ color: '#c4a882', fontSize: '12px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(245,158,11,0.3)' }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 style={{ fontWeight: 600, color: '#f5f0e8', fontSize: '11px', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Find Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={12} style={{ color: '#fbbf24', marginTop: '2px', flexShrink: 0 }} />
                <p style={{ color: '#c4a882', fontSize: '11px', lineHeight: 1.6 }}>
                  In front of City Pride, Charuapada,<br />
                  Farm Rd, Khetrajpur, Sambalpur,<br />
                  Odisha — 768003
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Clock size={12} style={{ color: '#fbbf24', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <p style={{ color: '#c4a882', fontSize: '11px' }}>Mon–Fri: 12 PM – 10 PM</p>
                  <p style={{ color: '#c4a882', fontSize: '11px' }}>Sat–Sun: 11 AM – 10:30 PM</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageCircle size={12} style={{ color: '#fbbf24', flexShrink: 0 }} />
                <a href="https://wa.me/918917473202" style={{ color: '#c4a882', fontSize: '11px', textDecoration: 'none' }}>+91 8917473202</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-glow" style={{ marginBottom: '20px' }} />

        {/* Bottom */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <p style={{ color: '#7a6b8a', fontSize: '10px' }}>© {new Date().getFullYear()} Jugnu Cafe. All rights reserved.</p>
          <p style={{ color: '#7a6b8a', fontSize: '10px' }}>Designed with <span style={{ color: '#fbbf24' }}>warmth</span> for Jugnu Cafe ✨</p>
        </div>
      </div>
    </footer>
  );
}
