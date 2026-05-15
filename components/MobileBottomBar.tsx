'use client';

import { Utensils, ShoppingBag, CalendarDays } from 'lucide-react';
import { useCartStore } from '@/lib/cartStore';

export default function MobileBottomBar() {
  const { totalItems, openCart } = useCartStore();
  const count = totalItems();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="mobile-bottom-bar">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '8px 16px',
        paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
        background: 'rgba(10,10,15,0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(245,158,11,0.08)',
      }}>
        {/* Menu */}
        <button
          onClick={() => scrollTo('#menu')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            padding: '6px 16px',
            background: 'transparent',
            border: 'none',
            color: '#c4a882',
            cursor: 'pointer',
          }}
        >
          <Utensils size={18} />
          <span style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.02em' }}>Menu</span>
        </button>

        {/* Order - center highlight */}
        <button
          onClick={openCart}
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            padding: '8px 20px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            borderRadius: '12px',
            border: 'none',
            color: '#000',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(245,158,11,0.3)',
          }}
        >
          <ShoppingBag size={17} />
          <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.02em' }}>Order</span>
          {count > 0 && (
            <span style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '16px',
              height: '16px',
              background: '#ef4444',
              color: '#fff',
              fontSize: '8px',
              fontWeight: 700,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}>
              {count}
            </span>
          )}
        </button>

        {/* Book */}
        <button
          onClick={() => scrollTo('#book-table')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            padding: '6px 16px',
            background: 'transparent',
            border: 'none',
            color: '#c4a882',
            cursor: 'pointer',
          }}
        >
          <CalendarDays size={18} />
          <span style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.02em' }}>Book</span>
        </button>
      </div>
    </div>
  );
}
