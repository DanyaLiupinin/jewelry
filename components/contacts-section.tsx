'use client'

import { ScrollReveal } from './scroll-reveal'

const contactItems = [
  { label: 'Telegram', value: '@tsiklotimiya' },
  { label: 'Instagram', value: '@tsiklotimiya.jewelry' },
  { label: 'Email', value: 'hello@tsiklotimiya.ru' },
  { label: 'Город', value: 'Москва, Россия' },
]

export function ContactsSection() {
  return (
    <section
      id="contacts"
      className="relative"
      style={{
        background: '#0a0a0f',
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        borderTop: '1px solid rgba(232,230,224,0.05)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(ellipse, rgba(188,19,254,0.03) 0%, transparent 65%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <ScrollReveal direction="up">
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: 'rgba(232,230,224,0.3)' }}
              >
                Связь
              </p>
              <h2
                className="font-light"
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: '#e8e6e0',
                  letterSpacing: '-0.01em',
                }}
              >
                Контакты
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <p
                className="mt-6 font-light leading-relaxed"
                style={{
                  color: 'rgba(232,230,224,0.4)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.01em',
                  maxWidth: '340px',
                }}
              >
                Пишите по поводу заказов, индивидуальных работ
                и коллабораций. Отвечаем в течение 24 часов.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — contacts list + Telegram button */}
          <div className="flex flex-col gap-0">
            {contactItems.map((item, i) => (
              <ScrollReveal key={item.label} direction="right" delay={i * 0.1}>
                <div
                  className="flex items-baseline justify-between py-4"
                  style={{ borderBottom: '1px solid rgba(232,230,224,0.06)' }}
                >
                  <span
                    className="text-xs tracking-[0.1em] uppercase"
                    style={{ color: 'rgba(232,230,224,0.3)' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-sm font-light"
                    style={{ color: 'rgba(232,230,224,0.65)' }}
                  >
                    {item.value}
                  </span>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal direction="up" delay={0.5}>
              <div className="mt-10">
                <a
                  href="https://t.me/tsiklotimiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tg-btn"
                  aria-label="Написать в Telegram @tsiklotimiya"
                >
                  {/* Telegram icon */}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M21.8 2.4L1.6 10.3c-1.3.5-1.3 1.3-.2 1.6l5.1 1.6 1.9 5.9c.2.7.4.9 1 .9.5 0 .7-.2 1-.5l2.5-2.4 5.1 3.7c.9.5 1.6.3 1.8-.9l3.3-15.7c.3-1.3-.5-1.9-1.3-1.6z"
                      fill="currentColor"
                      opacity="0.8"
                    />
                  </svg>
                  Написать в Telegram
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
