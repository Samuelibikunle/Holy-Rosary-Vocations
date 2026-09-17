import React from 'react';
import Link from 'next/link';
import { HeroCarousel } from '@/components/HeroCarousel';
import { ReflectionFilter } from '@/components/ReflectionFilter';
import { HERO_SETS } from '@/data/home';

export default function ReflectPage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Hero */}
      <HeroCarousel
        imageKeys={HERO_SETS.reflect}
        kicker="Time to Reflect"
        title="Short reflections, on how the little things matter."
        subtitle="A few lines at a time. Choose a theme, or read whatever is newest."
      />

      {/* Filterable Reflections Grid */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
            Browse by theme
          </span>
        </div>
        <ReflectionFilter />
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-[#1f1e1c] text-[#f3f1ec] rounded-card p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl text-white">
              Would you like to pray with a Sister?
            </h2>
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
              Reflections are a beginning. If one of them stays with you, tell us about it.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-[#1b1a18] font-medium text-sm md:text-base hover:bg-neutral-100 transition-colors shadow-sm flex-shrink-0"
          >
            Talk to a Sister
          </Link>
        </div>
      </section>
    </div>
  );
}
