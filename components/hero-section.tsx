import Image from 'next/image'
import { NeonScars } from './neon-scars'
import { HeroHeadline } from './hero-headline'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center texture-overlay overflow-hidden"
      style={{ background: '#0a0a0f' }}
    >
      <NeonScars />

      {/* Radial ambient glow — violet left */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-10%',
          top: '20%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(ellipse, rgba(188,19,254,0.06) 0%, transparent 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Radial ambient glow — cyan right */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-5%',
          bottom: '15%',
          width: '35vw',
          height: '35vw',
          background: 'radial-gradient(ellipse, rgba(0,243,255,0.04) 0%, transparent 70%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left — text */}
          <div className="flex flex-col justify-center">
            {/* Brand mark */}
            <p
              className="text-xs tracking-[0.3em] uppercase mb-10"
              style={{ color: 'rgba(232,230,224,0.35)' }}
            >
              Ювелирный бренд
            </p>

            {/* Main headline */}
            <HeroHeadline />

            {/* Signature line */}
            <div
              className="mt-8 flex items-center gap-4"
              style={{ color: 'rgba(232,230,224,0.4)' }}
            >
              <span
                className="block flex-shrink-0"
                style={{
                  width: '32px',
                  height: '1px',
                  background: 'rgba(188,19,254,0.6)',
                }}
                aria-hidden="true"
              />
              <p className="text-xs tracking-[0.18em] uppercase font-light">
                Циклотимия — украшения нестабильного мира
              </p>
            </div>

            <div className="mt-14">
              <a
                href="#products"
                className="hero-cta-link inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase"
              >
                <span>Смотреть коллекцию</span>
                <span className="hero-cta-line" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right — hero ring image */}
          <div
            className="relative flex items-center justify-center"
            style={{ minHeight: '420px' }}
          >
            {/* Glow behind image */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '10%',
                background: 'radial-gradient(ellipse, rgba(188,19,254,0.08) 0%, transparent 65%)',
                zIndex: 0,
                filter: 'blur(20px)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 w-full" style={{ maxWidth: '520px' }}>
              <Image
                src="/images/ring-hero.png"
                alt="Кольцо из коллекции Циклотимия — серебро, текстурная поверхность"
                width={520}
                height={520}
                className="w-full h-auto object-contain"
                priority
                style={{ filter: 'brightness(0.92) contrast(1.05)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0a0a0f)',
          zIndex: 5,
        }}
        aria-hidden="true"
      />
    </section>
  )
}
