'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Primary timer
    const timer = setTimeout(() => setLoading(false), 1600);
    // Fallback: force hide after 4s in case something goes wrong
    const fallback = setTimeout(() => setLoading(false), 4000);
    return () => { clearTimeout(timer); clearTimeout(fallback); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cafe-dark"
        >
          <div className="flex flex-col items-center gap-5">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Spinning ring */}
              <div
                className="absolute -inset-3 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 70%, rgba(245,158,11,0.4) 100%)',
                  mask: 'radial-gradient(circle, transparent 65%, black 66%)',
                  WebkitMask: 'radial-gradient(circle, transparent 65%, black 66%)',
                }}
              />
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500/30">
                <Image
                  src="/assets/logo/logo.jpeg"
                  alt="Jugnu Cafe"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-center"
            >
              <h2 className="font-display text-xl font-bold text-amber-400 glow-text mb-0.5">Jugnu Cafe</h2>
              <p className="text-cafe-warm text-[10px] tracking-[0.25em] uppercase">Loading your glow...</p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-36 h-[2px] bg-cafe-card rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
