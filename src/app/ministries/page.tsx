import React from 'react';
import Link from 'next/link';
import { HeroCarousel } from '@/components/HeroCarousel';
import { HERO_SETS } from '@/data/home';
import { MINISTRIES, COUNTRIES } from '@/data/ministries';
import { ArrowRight } from 'lucide-react';

export default function MinistriesPage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Hero */}
      <HeroCarousel
        imageKeys={HERO_SETS.ministries}
        kicker="Step 3 · Imagining your life"
        title="You may be called to serve in…"
        subtitle="Sisters are sent where they are needed and where their gifts fit, often to more than one of these across a lifetime."
      />

      {/* 6 Ministry Cards */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MINISTRIES.map((m) => (
            <div
              key={m.number}
              className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 md:p-10 shadow-paper-sm flex flex-col justify-between"
            >
              <div>
                <div className="step-badge w-12 h-12 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-divider)] flex items-center justify-center font-heading text-lg mb-6">
                  {m.number}
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-[var(--color-text)] mb-3">
                  {m.title}
                </h3>
                <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Where in the World (14 Countries) */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-[var(--color-accent-light)] border border-[var(--color-divider)] rounded-card p-8 md:p-12">
          <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-3">
            Where in the world?
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-2xl mb-8 leading-relaxed">
            We serve in fourteen countries. Sisters are missioned internationally, so your community may not be in your own country.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {COUNTRIES.map((country) => (
              <span
                key={country}
                className="px-5 py-2.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-divider)] text-sm md:text-base font-medium text-[var(--color-text)] shadow-sm"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Next in Journey */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-paper-sm">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
              Next in the journey
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-[var(--color-text)]">
              What does a day in this work really feel like?
            </h3>
          </div>
          <Link
            href="/stories"
            className="px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-medium text-sm md:text-base hover:opacity-90 transition-opacity flex-shrink-0"
          >
            Read our Sisters&apos; stories →
          </Link>
        </div>
      </section>
    </div>
  );
}
