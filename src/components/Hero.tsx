import React from "react";
import type { ImageMetadata } from "astro";

interface Props {
  title: string;
  subtitle: string;
  backgroundImage?: ImageMetadata;
  mobileImage?: ImageMetadata;
  imagePosition?: "left" | "center" | "right";
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  mobileImage,
  imagePosition = "center",
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden bg-slate-950"
      style={{ objectPosition: imagePosition }}
    >
      {backgroundImage && (
        <>
          {mobileImage && (
            <img
              src={mobileImage.src}
              alt=""
              className="absolute inset-0 z-0 h-full w-full object-cover md:hidden"
              style={{ objectPosition: "center" }}
            />
          )}
          <img
            src={backgroundImage.src}
            alt=""
            className={`absolute inset-0 z-0 h-full w-full object-cover ${
              mobileImage ? "hidden md:block" : ""
            }`}
          />
        </>
      )}

      <div className="absolute inset-0 z-10 bg-black/10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

      <div className="container pb-[80px] md:pb-[100px] mx-auto px-6 sm:px-10 lg:px-16 relative z-20">
        <div className="max-w-4xl">
          <div className="overflow-hidden rounded-3xl px-5 py-5 sm:px-7 sm:py-6">
            <h1 className="hero-reveal-item hero-reveal-title max-w-4xl text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.92] text-white text-balance hero-title drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {title}
            </h1>

            <p className="hero-reveal-item hero-reveal-subtitle mt-4 max-w-3xl text-lg sm:text-xl md:text-2xl font-light text-white tracking-wide hero-subtitle leading-tight text-balance drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {subtitle}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="hero-reveal-item hero-reveal-cta mt-6 flex flex-col sm:flex-row gap-3">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-db-green px-8 py-3 text-sm font-black uppercase tracking-[0.16em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_16px_35px_rgba(0,204,129,0.34)] transition hover:-translate-y-0.5 hover:bg-white hover:text-db-pink hover:drop-shadow-none"
                  >
                    {primaryCta.label}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-db-pink px-8 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-white hover:text-db-pink"
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
