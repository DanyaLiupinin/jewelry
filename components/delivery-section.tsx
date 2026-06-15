"use client";

import { ScrollReveal, StaggerReveal } from "./scroll-reveal";

// SVG Icons for delivery types
function CourierIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20h2v4h14v-4h8v-6l-4-6H14V6H4v14z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="23" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M14 14h6l2 3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RussiaPostIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="22"
        height="16"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M5 10l11 7 11-7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 22l8-5M27 22l-8-5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AirplaneIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 10l-6 4-6-8-2 1 4 9-6 4-3-2-2 1 3 4 4 3 1-2-2-3 4-6 9 4 1-2-8-6 4-6 4 2 6-2z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GiftBoxIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="12"
        width="22"
        height="14"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="3"
        y="8"
        width="26"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M16 8v18M11 8c0-3 2-4 5-4s5 1 5 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M12 6c2 1 4 2 4 2M20 6c-2 1-4 2-4 2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4L6 8v8c0 6.5 4.5 12.5 10 14 5.5-1.5 10-7.5 10-14V8l-10-4z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16l3 3 6-6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const deliveryMethods = [
  {
    icon: CourierIcon,
    title: "Курьер",
    location: "Москва и МО",
    time: "1–2 дня",
    detail: "Доставка до двери",
    accentColor: "rgba(0,243,255,0.6)",
  },
  {
    icon: RussiaPostIcon,
    title: "СДЭК / Почта",
    location: "Россия",
    time: "3–7 дней",
    detail: "В ближайший пункт выдачи",
    accentColor: "rgba(188,19,254,0.5)",
  },
  {
    icon: AirplaneIcon,
    title: "EMS International",
    location: "Весь мир",
    time: "7–21 день",
    detail: "Трекинг на каждом этапе",
    accentColor: "rgba(232,230,224,0.3)",
  },
];

export function DeliverySection() {
  return (
    <section
      id="delivery"
      className="relative"
      style={{
        background: "#00000066",
        padding: "clamp(5rem, 10vw, 9rem) 0",
        borderTop: "1px solid rgba(232,230,224,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "rgba(232,230,224,0.3)" }}
            >
              Логистика
            </p>
            <h2
              className="font-light"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#e8e6e0",
                letterSpacing: "-0.01em",
              }}
            >
              Доставка
            </h2>
          </div>
        </ScrollReveal>

        {/* Delivery methods grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {deliveryMethods.map((method, index) => (
            <ScrollReveal
              key={method.title}
              delay={index * 0.15}
              direction="up"
            >
              <div
                className="relative p-6 md:p-8 h-full"
                style={{
                  background: "rgba(15,15,22,0.6)",
                  border: "1px solid rgba(232,230,224,0.06)",
                  borderRadius: "2px",
                }}
              >
                {/* Accent line top */}
                <div
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{ background: method.accentColor }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="mb-6" style={{ color: method.accentColor }}>
                  <method.icon />
                </div>

                {/* Title */}
                <h3
                  className="font-light mb-1"
                  style={{
                    fontSize: "1.1rem",
                    color: "#e8e6e0",
                    letterSpacing: "0.02em",
                  }}
                >
                  {method.title}
                </h3>

                {/* Location badge */}
                <p
                  className="text-xs tracking-[0.08em] uppercase mb-4"
                  style={{ color: "rgba(232,230,224,0.4)" }}
                >
                  {method.location}
                </p>

                {/* Time */}
                <p
                  className="text-2xl font-light mb-2"
                  style={{ color: method.accentColor }}
                >
                  {method.time}
                </p>

                {/* Detail */}
                <p
                  className="text-xs font-light"
                  style={{
                    color: "rgba(232,230,224,0.35)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {method.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust markers row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Packaging - KEY TRUST MARKER */}
          <ScrollReveal delay={0.1} direction="left">
            <div
              className="relative p-6 md:p-8 flex gap-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(188,19,254,0.06) 0%, rgba(15,15,22,0.8) 100%)",
                border: "1px solid rgba(188,19,254,0.15)",
                borderRadius: "2px",
              }}
            >
              <div style={{ color: "rgba(188,19,254,0.7)", flexShrink: 0 }}>
                <GiftBoxIcon />
              </div>
              <div>
                <h3
                  className="font-light mb-2"
                  style={{
                    fontSize: "1rem",
                    color: "#e8e6e0",
                    letterSpacing: "0.02em",
                  }}
                >
                  Подарочная упаковка
                </h3>
                <p
                  className="text-sm font-light leading-relaxed mb-3"
                  style={{ color: "rgba(232,230,224,0.6)" }}
                >
                  Каждое изделие поставляется в крафтовой коробке с фирменным
                  тиснением.
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: "rgba(188,19,254,0.6)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Идеально для подарка
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Return policy */}
          <ScrollReveal delay={0.2} direction="right">
            <div
              className="relative p-6 md:p-8 flex gap-6"
              style={{
                background: "rgba(15,15,22,0.6)",
                border: "1px solid rgba(232,230,224,0.06)",
                borderRadius: "2px",
              }}
            >
              <div style={{ color: "rgba(0,243,255,0.5)", flexShrink: 0 }}>
                <ShieldIcon />
              </div>
              <div>
                <h3
                  className="font-light mb-2"
                  style={{
                    fontSize: "1rem",
                    color: "#e8e6e0",
                    letterSpacing: "0.02em",
                  }}
                >
                  Гарантия возврата
                </h3>
                <p
                  className="text-sm font-light leading-relaxed mb-3"
                  style={{ color: "rgba(232,230,224,0.6)" }}
                >
                  14 дней на возврат изделий без персонализации. Без вопросов и
                  лишних формальностей.
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: "rgba(0,243,255,0.4)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Мы уверены в качестве
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.3}>
          <p
            className="mt-12 text-center text-xs font-light"
            style={{ color: "rgba(232,230,224,0.25)", letterSpacing: "0.08em" }}
          >
            Отправляем в течение 1–3 дней после подтверждения заказа
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
