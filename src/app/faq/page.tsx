import React from 'react';
import Link from 'next/link';
import { HeroCarousel } from '@/components/HeroCarousel';
import { FaqAccordion } from '@/components/FaqAccordion';
import { HERO_SETS } from '@/data/home';
import { REQUIREMENTS } from '@/data/faqs';
import { ShieldCheck } from 'lucide-react';

export default function FaqPage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Hero */}
      <HeroCarousel
        imageKeys={HERO_SETS.faq}
        kicker="Step 4 · Understanding the path"
        title="Honest answers to the questions women ask us first."
        subtitle="Nothing here commits you to anything. If your question is missing, ask it."
      />

      {/* Main FAQ & Requirements */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Requirements Sidebar */}
        <div className="lg:col-span-4 sticky top-28 space-y-6">
          <div className="bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 shadow-paper-sm">
            <h3 className="font-heading text-2xl text-[var(--color-text)] mb-6">
              Requirements at a glance
            </h3>

            <div className="space-y-4">
              {REQUIREMENTS.map((req) => (
                <div key={req.label} className="border-b border-[var(--color-divider)] pb-3 last:border-0 last:pb-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
                    {req.label}
                  </div>
                  <div className="text-base font-medium text-[var(--color-text)] mt-0.5">
                    {req.value}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[var(--color-text-muted)] mt-6 leading-relaxed">
              Figures shown are indicative guidelines. Each situation is prayerfully considered with you personally.
            </p>
          </div>
        </div>

        {/* 10 FAQ Accordions */}
        <div className="lg:col-span-8">
          <FaqAccordion />
        </div>
      </section>

      {/* Safeguarding Commitment */}
      <section id="safeguarding" className="max-w-[1240px] mx-auto px-6 md:px-12 scroll-mt-28">
        <div className="bg-[var(--color-accent-light)] border border-[var(--color-divider)] rounded-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="font-heading text-2xl md:text-3xl text-[var(--color-text)]">
              Our commitment to safeguarding
            </h3>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              The Missionary Sisters of the Holy Rosary are dedicated to the protection and dignity of all children, young people, and vulnerable adults. Safeguarding policies and reporting channels are maintained in every community and ministry where our Sisters serve.
            </p>
          </div>
        </div>
      </section>

      {/* Next in Journey */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-[var(--color-accent)] text-white rounded-card p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-paper-md">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
              Next in the journey
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-white">
              Still wondering? Ask a Sister directly.
            </h3>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-[var(--color-accent)] font-medium text-sm md:text-base hover:bg-neutral-100 transition-colors flex-shrink-0"
          >
            Contact the vocation team →
          </Link>
        </div>
      </section>
    </div>
  );
}
