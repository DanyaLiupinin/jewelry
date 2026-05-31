'use client'

import { useRef, useEffect, useCallback } from 'react'

interface MagneticTextProps {
  children: string
  className?: string
  style?: React.CSSProperties
}

export function MagneticText({ children, className = '', style }: MagneticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const offsetsRef = useRef<{ x: number; y: number }[]>([])
  const rafRef = useRef<number | null>(null)
  const isAnimatingRef = useRef(false)

  const chars = children.split('')

  // Initialize offsets
  useEffect(() => {
    offsetsRef.current = chars.map(() => ({ x: 0, y: 0 }))
  }, [chars.length])

  const animate = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const spans = container.querySelectorAll<HTMLSpanElement>('[data-magnetic-letter]')
    let needsContinue = false

    spans.forEach((span, i) => {
      if (!offsetsRef.current[i]) offsetsRef.current[i] = { x: 0, y: 0 }

      let targetX = 0
      let targetY = 0

      if (mouseRef.current.active) {
        const rect = span.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        const centerX = rect.left - containerRect.left + rect.width / 2
        const centerY = rect.top - containerRect.top + rect.height / 2

        const dx = mouseRef.current.x - centerX
        const dy = mouseRef.current.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 180
        const maxOffset = 40

        if (distance < maxDistance && distance > 0) {
          const force = (1 - distance / maxDistance) * maxOffset
          targetX = -(dx / distance) * force
          targetY = -(dy / distance) * force
        }
      }

      // Smooth lerp
      const lerp = 0.15
      const current = offsetsRef.current[i]
      current.x += (targetX - current.x) * lerp
      current.y += (targetY - current.y) * lerp

      // Apply transform
      span.style.transform = `translate(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px)`

      // Check if still animating
      if (
        Math.abs(targetX - current.x) > 0.05 ||
        Math.abs(targetY - current.y) > 0.05
      ) {
        needsContinue = true
      }
    })

    if (needsContinue || mouseRef.current.active) {
      rafRef.current = requestAnimationFrame(animate)
    } else {
      isAnimatingRef.current = false
    }
  }, [])

  const startAnimation = useCallback(() => {
    if (!isAnimatingRef.current) {
      isAnimatingRef.current = true
      rafRef.current = requestAnimationFrame(animate)
    }
  }, [animate])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
      startAnimation()
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
      startAnimation() // Continue to animate back to rest position
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [startAnimation])

  return (
    <span 
      ref={containerRef} 
      className={`inline-block cursor-default ${className}`} 
      style={style}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          data-magnetic-letter
          className="inline-block"
          style={{
            willChange: 'transform',
            transition: 'color 0.3s ease',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
