'use client'

import { MagneticText } from './magnetic-text'

export function HeroHeadline() {
  return (
    <h1
      className="text-balance leading-none font-light"
      style={{
        fontSize: 'clamp(3rem, 7vw, 6.5rem)',
        color: '#e8e6e0',
        letterSpacing: '-0.02em',
        lineHeight: 1.0,
      }}
    >
      <MagneticText>Перепады —</MagneticText>
      <span
        className="font-extralight block"
        style={{
          marginTop: '0.08em',
          letterSpacing: '0.01em',
        }}
      >
        <MagneticText>это стиль</MagneticText>
      </span>
    </h1>
  )
}
