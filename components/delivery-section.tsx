const deliveryItems = [
  {
    label: 'Москва и МО',
    detail: 'Курьер 1–2 дня',
  },
  {
    label: 'Россия',
    detail: 'СДЭК или Почта России, 3–7 дней',
  },
  {
    label: 'Международная',
    detail: 'EMS, 7–21 день — уточняйте при заказе',
  },
  {
    label: 'Упаковка',
    detail: 'Крафтовая коробка с тиснением',
  },
  {
    label: 'Возврат',
    detail: '14 дней для изделий без персонализации',
  },
]

export function DeliverySection() {
  return (
    <section
      id="delivery"
      className="relative"
      style={{
        background: '#0a0a0f',
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        borderTop: '1px solid rgba(232,230,224,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left — header */}
          <div className="flex flex-col justify-start">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: 'rgba(232,230,224,0.3)' }}
            >
              Логистика
            </p>
            <h2
              className="font-light"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#e8e6e0',
                letterSpacing: '-0.01em',
              }}
            >
              Доставка
            </h2>
            <p
              className="mt-6 font-light leading-relaxed"
              style={{
                color: 'rgba(232,230,224,0.4)',
                fontSize: '0.875rem',
                letterSpacing: '0.01em',
                maxWidth: '340px',
              }}
            >
              Каждое изделие упаковывается вручную.
              Отправляем в течение 1–3 дней после подтверждения заказа.
            </p>
          </div>

          {/* Right — list */}
          <div className="flex flex-col gap-0">
            {deliveryItems.map((item, i) => (
              <div
                key={i}
                className="flex items-baseline justify-between py-4"
                style={{ borderBottom: '1px solid rgba(232,230,224,0.06)' }}
              >
                <span
                  className="text-sm font-light tracking-[0.03em]"
                  style={{ color: 'rgba(232,230,224,0.7)' }}
                >
                  {item.label}
                </span>
                <span
                  className="text-xs font-light text-right ml-4"
                  style={{ color: 'rgba(232,230,224,0.35)', maxWidth: '200px' }}
                >
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
