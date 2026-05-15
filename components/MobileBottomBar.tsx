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
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden safe-area-bottom">
      <div
        className="flex items-center justify-around border-t border-amber-500/10 px-2 py-1"
        style={{ background: 'rgba(10,10,15,0.96)', backdropFilter: 'blur(16px)' }}
      >
        {/* Menu */}
        <button
          onClick={() => scrollTo('#menu')}
          className="flex flex-col items-center gap-1 py-2.5 px-4 text-cafe-warm hover:text-amber-400 transition-colors"
        >
          <Utensils size={18} />
          <span className="text-[9px] font-medium tracking-wide">Menu</span>
        </button>

        {/* Order - center highlight */}
        <button
          onClick={openCart}
          className="relative flex flex-col items-center gap-0.5 px-5 py-2 amber-glow-btn rounded-xl"
        >
          <ShoppingBag size={18} />
          <span className="text-[9px] font-bold tracking-wide">Order</span>
          {count > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
              {count}
            </span>
          )}
        </button>

        {/* Book */}
        <button
          onClick={() => scrollTo('#book-table')}
          className="flex flex-col items-center gap-1 py-2.5 px-4 text-cafe-warm hover:text-amber-400 transition-colors"
        >
          <CalendarDays size={18} />
          <span className="text-[9px] font-medium tracking-wide">Book</span>
        </button>
      </div>
    </div>
  );
}
