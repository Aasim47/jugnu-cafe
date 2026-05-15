'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, Users, Phone, User, MessageCircle, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  paddingLeft: '38px',
  paddingRight: '12px',
  paddingTop: '12px',
  paddingBottom: '12px',
  background: '#0a0a0f',
  border: '1px solid rgba(245,158,11,0.1)',
  borderRadius: '10px',
  color: '#f5f0e8',
  fontSize: '13px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  color: '#c4a882',
  fontSize: '11px',
  fontWeight: 500,
  marginBottom: '6px',
};

const iconStyle: React.CSSProperties = {
  position: 'absolute',
  left: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'rgba(251,191,36,0.4)',
};

export default function BookTableSection() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', date: '', time: '', guests: '2' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format date nicely
    const dateObj = new Date(form.date + 'T00:00:00');
    const formattedDate = dateObj.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

    const message = encodeURIComponent(
      `*Table Booking Request - Jugnu Cafe*\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Date: ${formattedDate}\n` +
        `Time: ${form.time}\n` +
        `Guests: ${form.guests}\n\n` +
        `Please confirm my table booking. Thank you!`
    );
    window.open(`https://wa.me/918917473202?text=${message}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', date: '', time: '', guests: '2' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="book-table" className="section-dark" style={{ padding: '80px 0 100px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
        <div className="booking-grid">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ color: '#fbbf24', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '14px' }}>Reservations</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.15, marginBottom: '16px' }}>
              Reserve Your <span className="gradient-text" style={{ fontStyle: 'italic' }}>Glow Spot</span>
            </h2>
            <div className="divider-glow" style={{ width: '72px', marginBottom: '24px' }} />
            <p style={{ color: '#c4a882', fontSize: '14px', lineHeight: 1.7, marginBottom: '32px', maxWidth: '420px' }}>
              Plan your perfect evening at Jugnu. Reserve a table and we&apos;ll make sure everything is set just right — warm lights, cozy vibes, and great food.
            </p>

            {/* Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: Clock, title: 'Opening Hours', desc: 'Daily: 12:00 PM – 10:00 PM' },
                { icon: Phone, title: 'Call Us', desc: '+91 8917473202' },
                { icon: CalendarDays, title: 'Advance Booking', desc: 'Book up to 7 days in advance' },
              ].map((item) => (
                <div key={item.title} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '12px', borderRadius: '12px', padding: '14px 16px' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <item.icon size={15} style={{ color: '#fbbf24' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#f5f0e8', fontSize: '12px' }}>{item.title}</div>
                    <div style={{ color: '#c4a882', fontSize: '11px', marginTop: '2px' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card" style={{ borderRadius: '20px', padding: 'clamp(24px, 4vw, 36px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: 'rgba(245,158,11,0.04)', borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none' }} />

              <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#f5f0e8', marginBottom: '6px' }}>Book a Table</h3>
              <p style={{ color: '#c4a882', fontSize: '12px', marginBottom: '24px' }}>Fill in the details — we&apos;ll confirm via WhatsApp.</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                    <CheckCircle size={26} style={{ color: '#4ade80' }} />
                  </div>
                  <h4 style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '16px', marginBottom: '8px' }}>Request Sent!</h4>
                  <p style={{ color: '#c4a882', fontSize: '12px', maxWidth: '260px', margin: '0 auto' }}>Your booking request has been sent on WhatsApp. We&apos;ll confirm shortly! 🌟</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <div style={{ position: 'relative' }}>
                      <User size={14} style={iconStyle} />
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <div style={{ position: 'relative' }}>
                      <Phone size={14} style={iconStyle} />
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" pattern="[0-9+\s]{10,15}" title="Enter a valid phone number" style={inputStyle} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={labelStyle}>Date</label>
                      <div style={{ position: 'relative' }}>
                        <CalendarDays size={14} style={iconStyle} />
                        <input type="date" name="date" required min={today} value={form.date} onChange={handleChange} style={{ ...inputStyle, colorScheme: 'dark' }} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Time</label>
                      <div style={{ position: 'relative' }}>
                        <Clock size={14} style={iconStyle} />
                        <select name="time" required value={form.time} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' as const }}>
                          <option value="" style={{ background: '#12111a' }}>Select</option>
                          {['12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM'].map((t) => (
                            <option key={t} value={t} style={{ background: '#12111a' }}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Number of Guests</label>
                    <div style={{ position: 'relative' }}>
                      <Users size={14} style={iconStyle} />
                      <select name="guests" value={form.guests} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' as const }}>
                        {['1','2','3','4','5','6','7','8+'].map((n) => (
                          <option key={n} value={n} style={{ background: '#12111a' }}>{n} {n === '1' ? 'Person' : 'People'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: '13px',
                      borderRadius: '10px',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#fff',
                      border: 'none',
                      cursor: 'pointer',
                      marginTop: '4px',
                      background: 'linear-gradient(135deg, #25D366, #128C7E)',
                      boxShadow: '0 4px 14px rgba(37,211,102,0.2)',
                    }}
                  >
                    <MessageCircle size={16} />
                    Confirm via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
