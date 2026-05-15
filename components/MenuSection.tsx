'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus, Check, Flame, ShoppingBag } from 'lucide-react';
import { menuItems, menuCategories } from '@/lib/menuData';
import { useCartStore } from '@/lib/cartStore';

function VegIcon({ isVeg }: { isVeg: boolean }) {
  const color = isVeg ? '#22c55e' : '#ef4444';
  return (
    <div style={{ width: '16px', height: '16px', border: `1.5px solid ${color}`, borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
    </div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const { addItem, openCart } = useCartStore();

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  const handleAdd = (item: (typeof menuItems)[0]) => {
    addItem({ id: item.id, name: item.name, price: item.price, isVeg: item.isVeg });
    setAddedIds((prev) => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedIds((prev) => { const next = new Set(prev); next.delete(item.id); return next; });
    }, 1500);
  };

  return (
    <section id="menu" className="section-dark" style={{ padding: '80px 0 100px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <p style={{ color: '#fbbf24', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '14px' }}>Our Menu</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.15, marginBottom: '16px' }}>
            Crafted with <span className="gradient-text" style={{ fontStyle: 'italic' }}>Love</span>
          </h2>
          <div className="divider-glow" style={{ width: '80px', margin: '0 auto 16px' }} />
          <p style={{ color: '#c4a882', fontSize: '14px', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>
            Every dish is made fresh, every bite tells a story.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'tab-active' : ''}
              style={{
                padding: '7px 16px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 500,
                border: `1px solid ${activeCategory === cat ? 'rgba(245,158,11,0.45)' : 'rgba(245,158,11,0.12)'}`,
                background: activeCategory === cat ? 'rgba(245,158,11,0.1)' : 'transparent',
                color: activeCategory === cat ? '#f59e0b' : '#c4a882',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="menu-card"
                style={{ borderRadius: '14px', overflow: 'hidden' }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,17,26,0.9) 0%, transparent 50%)' }} />
                  {item.isPopular && (
                    <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', alignItems: 'center', gap: '3px', background: '#f59e0b', color: '#000', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px' }}>
                      <Flame size={9} />
                      Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <VegIcon isVeg={item.isVeg} />
                    <h3 style={{ fontWeight: 600, color: '#f5f0e8', fontSize: '14px', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.name}
                    </h3>
                  </div>
                  <p style={{ color: '#7a6b8a', fontSize: '11px', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '33px' }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
                    <span className="font-display" style={{ fontWeight: 700, color: '#fbbf24', fontSize: '16px' }}>₹{item.price}</span>
                    <button
                      onClick={() => handleAdd(item)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '5px 12px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 600,
                        border: `1px solid ${addedIds.has(item.id) ? 'rgba(34,197,94,0.4)' : 'rgba(245,158,11,0.25)'}`,
                        background: addedIds.has(item.id) ? 'rgba(34,197,94,0.1)' : 'rgba(245,158,11,0.08)',
                        color: addedIds.has(item.id) ? '#4ade80' : '#fbbf24',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      {addedIds.has(item.id) ? <><Check size={11} /> Added</> : <><Plus size={11} /> Add</>}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Cart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <button
            onClick={openCart}
            className="outline-glow-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 28px', borderRadius: '999px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', background: 'transparent' }}
          >
            <ShoppingBag size={16} />
            View Cart & Order via WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}
