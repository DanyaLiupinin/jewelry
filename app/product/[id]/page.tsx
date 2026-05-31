import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProductById, getAllProductIds, products } from '@/lib/products'
import { NeonScars } from '@/components/neon-scars'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getAllProductIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return { title: 'Товар не найден — Циклотимия' }
  return {
    title: `${product.name} — Циклотимия`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Циклотимия`,
      description: product.description,
      images: [{ url: product.image }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  // Get other products for "more items" section
  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <main className="min-h-screen texture-overlay" style={{ background: '#0a0a0f' }}>
      <NeonScars />

      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(232,230,224,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <Link
            href="/#products"
            className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase transition-colors"
            style={{ color: 'rgba(232,230,224,0.5)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-60">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Назад к товарам
          </Link>
          <Link
            href="/"
            className="text-foreground tracking-[0.18em] uppercase text-xs font-light"
          >
            Циклотимия
          </Link>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Product image */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{
                background: '#0f0f16',
                border: '1px solid rgba(232,230,224,0.06)',
              }}
            >
              <div style={{ paddingBottom: product.aspect === 'portrait' ? '125%' : '75%', position: 'relative' }}>
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.material}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Glow */}
            <div
              className="absolute -inset-8 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(188,19,254,0.04) 0%, transparent 60%)',
                zIndex: -1,
              }}
              aria-hidden="true"
            />
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-center">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: 'rgba(232,230,224,0.35)' }}
            >
              {product.material}
            </p>

            <h1
              className="font-light text-balance"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                color: '#e8e6e0',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
              }}
            >
              {product.name}
            </h1>

            <p
              className="mt-4 text-xl font-light"
              style={{ color: 'rgba(0,243,255,0.85)' }}
            >
              {product.price}
            </p>

            <div
              className="mt-8 pt-8"
              style={{ borderTop: '1px solid rgba(232,230,224,0.08)' }}
            >
              <p
                className="text-sm leading-relaxed font-light"
                style={{ color: 'rgba(232,230,224,0.7)' }}
              >
                {product.description}
              </p>
            </div>

            {/* Details */}
            <ul className="mt-8 space-y-2">
              {product.details.map((detail, i) => (
                <li
                  key={i}
                  className="text-xs tracking-[0.05em] flex items-start gap-3"
                  style={{ color: 'rgba(232,230,224,0.5)' }}
                >
                  <span
                    className="mt-1.5 block flex-shrink-0"
                    style={{ width: '4px', height: '4px', background: 'rgba(188,19,254,0.6)', borderRadius: '1px' }}
                    aria-hidden="true"
                  />
                  {detail}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://t.me/cyclothymia_store"
                target="_blank"
                rel="noopener noreferrer"
                className="telegram-button inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.15em] uppercase"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Написать в Telegram
              </a>
              <p
                className="mt-4 text-xs"
                style={{ color: 'rgba(232,230,224,0.3)' }}
              >
                Ответим в течение 24 часов
              </p>
            </div>
          </div>
        </div>

        {/* Other products */}
        <div className="mt-24 pt-16" style={{ borderTop: '1px solid rgba(232,230,224,0.06)' }}>
          <h2
            className="text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: 'rgba(232,230,224,0.35)' }}
          >
            Другие товары
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProducts.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="product-card block"
                style={{
                  background: '#0f0f16',
                  border: '1px solid rgba(232,230,224,0.06)',
                }}
              >
                <div style={{ position: 'relative', paddingBottom: '100%', overflow: 'hidden' }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="card-label" style={{ background: 'rgba(10,10,15,0.7)', backdropFilter: 'blur(4px)' }}>
                    <p className="font-light" style={{ color: '#e8e6e0', fontSize: '0.9rem' }}>{p.name}</p>
                    <p className="mt-1 text-sm" style={{ color: 'rgba(0,243,255,0.8)' }}>{p.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
