'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Flame } from 'lucide-react';
import { useCartStore } from '@/lib/cartStore';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Table', href: '#book-table' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCartStore();
  const count = totalItems();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: scrolled ? '12px' : '0',
          left: 0,
          right: 0,
          zIndex: 50,
          maxWidth: scrolled ? '1080px' : '100%',
          margin: '0 auto',
          transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          background: scrolled ? 'rgba(10,10,15,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
          borderRadius: scrolled ? '16px' : '0',
          border: scrolled ? '1px solid rgba(245,158,11,0.1)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,158,11,0.05) inset' : 'none',
        }}
      >
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: scrolled ? '0 20px' : '0 24px', transition: 'padding 0.5s cubic-bezier(0.22, 1, 0.36, 1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? '56px' : '64px', transition: 'height 0.5s cubic-bezier(0.22, 1, 0.36, 1)' }}>

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}
            >
              <div style={{
                position: 'relative',
                width: scrolled ? '32px' : '36px',
                height: scrolled ? '32px' : '36px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid rgba(245,158,11,0.3)',
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                boxShadow: scrolled ? '0 0 12px rgba(245,158,11,0.15)' : 'none',
              }}>
                <Image
                  src="/assets/logo/logo.jpeg"
                  alt="Jugnu Cafe Logo"
                  fill
                  sizes="36px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div style={{ lineHeight: 1 }}>
                <span className="font-display glow-text" style={{ fontWeight: 700, fontSize: scrolled ? '15px' : '17px', color: '#fbbf24', display: 'block', transition: 'font-size 0.5s cubic-bezier(0.22, 1, 0.36, 1)' }}>
                  Jugnu
                </span>
                <span style={{ fontSize: '8px', letterSpacing: '0.2em', color: '#c4a882', textTransform: 'uppercase', display: 'block', marginTop: '2px' }}>
                  Cafe
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  style={{
                    padding: '6px 12px',
                    fontSize: '12.5px',
                    fontWeight: 500,
                    color: 'rgba(245,240,232,0.7)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'color 0.2s, background 0.2s',
                  }}
                  className="nav-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Cart */}
              <button
                onClick={openCart}
                aria-label="Open cart"
                style={{
                  position: 'relative',
                  padding: '7px',
                  borderRadius: '50%',
                  border: '1px solid rgba(245,158,11,0.12)',
                  background: 'transparent',
                  color: 'rgba(245,240,232,0.7)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="nav-cart-btn"
              >
                <ShoppingCart size={15} />
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      position: 'absolute',
                      top: '-3px',
                      right: '-3px',
                      width: '16px',
                      height: '16px',
                      background: '#f59e0b',
                      color: '#000',
                      fontSize: '8px',
                      fontWeight: 700,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {count}
                  </motion.span>
                )}
              </button>

              {/* Order CTA */}
              <a
                href="#menu"
                onClick={(e) => { e.preventDefault(); scrollTo('#menu'); }}
                className="amber-glow-btn nav-order-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: 'none',
                }}
              >
                <Flame size={11} />
                Order Now
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="nav-mobile-toggle"
                style={{
                  display: 'none',
                  padding: '8px',
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(245,240,232,0.7)',
                  cursor: 'pointer',
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 40 }}
            className="nav-mobile-overlay"
          >
            <div
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '280px',
                background: '#12111a',
                borderLeft: '1px solid rgba(245,158,11,0.08)',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '80px',
                paddingBottom: '32px',
                paddingLeft: '24px',
                paddingRight: '24px',
              }}
            >
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      color: 'rgba(245,240,232,0.8)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '15px',
                      transition: 'all 0.2s',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid rgba(245,158,11,0.08)' }}>
                <a
                  href="#menu"
                  onClick={(e) => { e.preventDefault(); scrollTo('#menu'); }}
                  className="amber-glow-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '12px',
                    borderRadius: '999px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                    border: 'none',
                  }}
                >
                  <Flame size={15} />
                  Order Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
