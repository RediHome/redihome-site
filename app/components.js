'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export const colors = {
  primary: '#4A5FA8',
  primaryDark: '#3A4A8A',
  primaryLight: '#5A6FB8',
  accent: '#E09145',
  accentDark: '#C87D35',
  accentLight: '#F0A155',
  background: '#F8F9FC',
  backgroundAlt: '#EEF1F8',
  text: '#1a1a1a',
  textLight: '#555',
};

export function Logo({ size = 44 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path d="M50 15L10 45V48H18V85H42V60H58V85H82V48H90V45L50 15Z" stroke={colors.accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M42 85V60H58V85" stroke={colors.accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      <span style={{ fontSize: size * 0.55, fontWeight: 500, letterSpacing: '-0.5px' }}>
        <span style={{ color: colors.primary }}>Redi</span>
        <span style={{ color: colors.accent }}>Home</span>
      </span>
    </div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Homes', href: '/homes' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Financing', href: '/financing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '16px 24px',
        background: isScrolled ? 'rgba(248, 249, 252, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(2
