'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918917473202"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', delay: 1.5, damping: 20 }}
      aria-label="Chat on WhatsApp"
      className="wa-float-btn"
      style={{
        position: 'fixed',
        bottom: '76px',
        right: '16px',
        zIndex: 35,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
      }}
    >
      {/* Button */}
      <div
        className="wa-btn-pulse"
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 4px 14px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s',
        }}
      >
        <MessageCircle size={22} style={{ color: '#fff' }} fill="white" />
      </div>
    </motion.a>
  );
}
