'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { href: '#hero', label: 'Главная' },
  { href: '#about', label: 'О нас' },
  { href: '#products', label: 'Товары' },
  { href: '#delivery', label: 'Доставка' },
  { href: '#contacts', label: 'Контакты' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(10,10,15,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(232,230,224,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 text-foreground tracking-[0.18em] uppercase text-xs font-light"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={28}
            height={28}
            className="opacity-90"
          />
          <span className="hidden sm:inline">Циклотимия</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen(!open)}
        >
          <span
            className="block h-px w-6 bg-foreground transition-all duration-300"
            style={{ transform: open ? 'rotate(45deg) translate(3px, 3px)' : 'none', opacity: open ? 1 : 0.7 }}
          />
          <span
            className="block h-px w-6 bg-foreground transition-all duration-300"
            style={{ opacity: open ? 0 : 0.7 }}
          />
          <span
            className="block h-px w-6 bg-foreground transition-all duration-300"
            style={{ transform: open ? 'rotate(-45deg) translate(3px, -3px)' : 'none', opacity: open ? 1 : 0.7 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: open ? '300px' : '0',
          background: 'rgba(10,10,15,0.96)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <nav className="flex flex-col gap-6 px-6 py-8" aria-label="Мобильная навигация">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
