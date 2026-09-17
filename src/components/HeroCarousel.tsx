'use client';

import React, { useState, useEffect } from 'react';
import { getImageUrl } from '@/data/images';

interface HeroCarouselProps {
  imageKeys: string[];
  kicker?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href?: string; onClick?: () => void };
  secondaryCta?: { label: string; href?: string; onClick?: () => void };
  heightClass?: string;
}

export function HeroCarousel({
  imageKeys,
  kicker,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  heightClass = 'min-h-[460px] md:h-[580px]',
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (imageKeys.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % imageKeys.length);
    }, 5600);
    return () => clearInterval(timer);
  }, [imageKeys.length]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-4">
      <div
        className={`relative ${heightClass} rounded-card overflow-hidden shadow-paper-lg flex items-center transition-all`}
      >
        {/* Background Images with Cross-fade */}
        {imageKeys.map((key, index) => (
          <div
            key={key + index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${getImageUrl(key, 1920)})`,
              opacity: index === activeIndex ? 1 : 0,
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d0b]/90 via-[#0e0d0b]/65 to-[#0e0d0b]/20" />

        {/* Hero Content */}
        <div className="relative z-10 p-6 md:p-14 lg:p-20 max-w-[840px] text-white flex flex-col justify-center">
          {kicker && (
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs md:text-sm font-mono tracking-wider uppercase mb-5">
              {kicker}
            </div>
          )}

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-5 text-white">
            {title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap items-center gap-3.5">
              {primaryCta && (
                <a
                  href={primaryCta.href || '#'}
                  onClick={primaryCta.onClick}
                  className="px-6 py-3.5 rounded-full bg-white text-[#1b1a18] font-medium text-sm md:text-base hover:bg-neutral-100 transition-colors shadow-md"
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href || '#'}
                  onClick={secondaryCta.onClick}
                  className="px-6 py-3.5 rounded-full border border-white/60 text-white font-medium text-sm md:text-base hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Carousel Indicators */}
        {imageKeys.length > 1 && (
          <div className="absolute right-6 bottom-6 z-20 flex items-center gap-2">
            {imageKeys.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-white'
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
