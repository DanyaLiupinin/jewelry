"use client";

import Image from "next/image";
import Link from "next/link";
import { NeonScars } from "./neon-scars";
import { ScrollReveal } from "./scroll-reveal";
import { products, type Product } from "@/lib/products";

function ProductCard({
  product,
  delay = 0,
}: {
  product: Product;
  delay?: number;
}) {
  const isPortrait = product.aspect === "portrait";
  return (
    <ScrollReveal delay={delay} direction="up" distance={40}>
      <Link
        href={`/product/${product.id}`}
        className="product-card block"
        style={{
          background: "rgba(15,15,22,0.55)",
          border: "1px solid rgba(232,230,224,0.06)",
        }}
      >
        <div
          style={{
            position: "relative",
            paddingBottom: isPortrait ? "135%" : "68%",
            overflow: "hidden",
          }}
        >
          <Image
            src={product.image}
            alt={`${product.name} — ${product.material}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
          {/* Hover label */}
          <div
            className="card-label"
            style={{
              background: "rgba(10,10,15,0.7)",
              backdropFilter: "blur(4px)",
            }}
          >
            <p
              className="text-xs tracking-[0.1em] uppercase mb-1"
              style={{ color: "rgba(232,230,224,0.5)" }}
            >
              {product.material}
            </p>
            <p
              className="font-light"
              style={{
                color: "#e8e6e0",
                fontSize: "1rem",
                letterSpacing: "0.02em",
              }}
            >
              {product.name}
            </p>
            <p
              className="mt-2 text-sm font-light"
              style={{ color: "rgba(0,243,255,0.8)" }}
            >
              {product.price}
            </p>
          </div>
        </div>
        {/* Card footer */}
        <div
          className="px-4 py-3 flex items-end justify-between"
          style={{ borderTop: "1px solid rgba(232,230,224,0.05)" }}
        >
          <div>
            <p
              className="text-xs font-light tracking-[0.05em]"
              style={{ color: "rgba(232,230,224,0.7)" }}
            >
              {product.name}
            </p>
            <p
              className="text-xs mt-0.5"
              style={{
                color: "rgba(232,230,224,0.3)",
                fontSize: "0.68rem",
                letterSpacing: "0.06em",
              }}
            >
              {product.material}
            </p>
          </div>
          <span
            className="text-xs font-light"
            style={{ color: "rgba(232,230,224,0.5)", letterSpacing: "0.04em" }}
          >
            {product.price}
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden texture-overlay"
      style={{ background: "#00000066", padding: "clamp(5rem, 10vw, 9rem) 0" }}
    >
      <NeonScars />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-3"
                style={{ color: "rgba(232,230,224,0.3)" }}
              >
                Коллекция
              </p>
              <h2
                className="font-light text-balance"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "#e8e6e0",
                  letterSpacing: "-0.01em",
                }}
              >
                Товары
              </h2>
            </div>
            <p
              className="hidden md:block text-xs tracking-[0.1em] uppercase"
              style={{ color: "rgba(232,230,224,0.25)" }}
            >
              Ручная работа / Малый тираж
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric gallery grid */}
        {/* Row 1: wide + portrait */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div className="md:col-span-2">
            <ProductCard product={products[1]} delay={0.1} />
          </div>
          <div className="md:col-span-1">
            <ProductCard product={products[0]} delay={0.2} />
          </div>
        </div>

        {/* Row 2: portrait + wide + portrait */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-1">
            <ProductCard product={products[3]} delay={0.15} />
          </div>
          <div className="md:col-span-1">
            <ProductCard product={products[2]} delay={0.25} />
          </div>
          <div className="md:col-span-1">
            <ProductCard product={products[4]} delay={0.35} />
          </div>
        </div>

        <ScrollReveal delay={0.4}>
          <p
            className="mt-8 text-xs tracking-[0.1em] uppercase text-center"
            style={{ color: "rgba(232,230,224,0.2)" }}
          >
            Все украшения — единственные в своём роде
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
