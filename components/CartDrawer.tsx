'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, MessageCircle } from 'lucide-react';
import { useCartStore } from '@/lib/cartStore';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice, totalItems, generateWhatsAppMessage } =
    useCartStore();

  const count = totalItems();
  const total = totalPrice();
  const waMsg = generateWhatsAppMessage();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleWhatsAppOrder = () => {
    window.open(`https://wa.me/918917473202?text=${waMsg}`, '_blank');
    // Clear cart and close drawer after redirecting
    const { clearCart, closeCart } = useCartStore.getState();
    clearCart();
    closeCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            style={{
              position: 'fixed',
              right: 0,
              top: 0,
              bottom: 0,
              zIndex: 50,
              width: '100%',
              maxWidth: '360px',
              background: '#12111a',
              borderLeft: '1px solid rgba(245,158,11,0.08)',
              boxShadow: '-8px 0 30px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid rgba(245,158,11,0.06)', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShoppingBag size={14} style={{ color: '#fbbf24' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, color: '#f5f0e8', fontSize: '14px', lineHeight: 1.2 }}>Your Order</h3>
                  <p style={{ fontSize: '10px', color: '#c4a882', marginTop: '2px' }}>{count} item{count !== 1 ? 's' : ''}</p>
                </div>
              </div>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                style={{ padding: '6px', borderRadius: '8px', background: 'transparent', border: 'none', color: '#c4a882', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Items - scrollable area */}
            <div style={{ flex: items.length === 0 ? 1 : 'none', overflowY: 'auto', padding: '16px 20px' }}>
              {items.length === 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', paddingBottom: '40px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(245,158,11,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <ShoppingBag size={26} style={{ color: 'rgba(251,191,36,0.25)' }} />
                  </div>
                  <p style={{ fontWeight: 500, color: 'rgba(245,240,232,0.5)', fontSize: '14px', marginBottom: '6px' }}>Your cart is empty</p>
                  <p style={{ fontSize: '11px', color: '#7a6b8a' }}>Add items from the menu to get started!</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px',
                        borderRadius: '10px',
                        background: 'rgba(18,17,26,0.6)',
                        border: '1px solid rgba(245,158,11,0.06)',
                      }}
                    >
                      {/* Veg indicator */}
                      <div style={{
                        width: '14px',
                        height: '14px',
                        border: `1.5px solid ${item.isVeg ? '#22c55e' : '#ef4444'}`,
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: item.isVeg ? '#22c55e' : '#ef4444' }} />
                      </div>

                      {/* Info */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontWeight: 500, color: '#f5f0e8', fontSize: '12px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</p>
                        <p style={{ fontSize: '10px', color: '#fbbf24', fontWeight: 500, marginTop: '2px' }}>Rs.{item.price} each</p>
                      </div>

                      {/* Quantity controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', cursor: 'pointer' }}
                        >
                          <Minus size={10} />
                        </button>
                        <span style={{ color: '#f5f0e8', fontWeight: 600, fontSize: '12px', width: '16px', textAlign: 'center' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', cursor: 'pointer' }}
                        >
                          <Plus size={10} />
                        </button>
                      </div>

                      {/* Price + Remove */}
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <p style={{ color: '#f5f0e8', fontWeight: 700, fontSize: '13px' }}>Rs.{item.price * item.quantity}</p>
                        <button
                          onClick={() => removeItem(item.id)}
                          style={{ color: 'rgba(248,113,113,0.5)', background: 'transparent', border: 'none', cursor: 'pointer', marginTop: '4px', padding: '2px' }}
                        >
                          <Trash2 size={11} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer - only when items exist */}
            {items.length > 0 && (
              <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(245,158,11,0.06)', flexShrink: 0, marginTop: 'auto' }}>
                {/* Total */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ color: '#c4a882', fontSize: '14px', fontWeight: 500 }}>Total</span>
                  <span className="font-display" style={{ color: '#fbbf24', fontWeight: 700, fontSize: '20px' }}>Rs.{total}</span>
                </div>

                {/* WhatsApp Order Button */}
                <button
                  onClick={handleWhatsAppOrder}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 4px 14px rgba(37,211,102,0.25)',
                  }}
                >
                  <MessageCircle size={17} />
                  Order on WhatsApp
                </button>

                <p style={{ textAlign: 'center', fontSize: '10px', color: '#7a6b8a', marginTop: '10px' }}>
                  Your order will be sent to Jugnu Cafe on WhatsApp
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
