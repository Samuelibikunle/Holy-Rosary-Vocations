import React from 'react';
import Link from 'next/link';
import { HeroCarousel } from '@/components/HeroCarousel';
import { HERO_SETS } from '@/data/home';
import { STAGES } from '@/data/formation';
import { getImageUrl } from '@/data/images';
import { ArrowRight } from 'lucide-react';

export default function FormationPage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* Hero */}
      <HeroCarousel
        imageKeys={HERO_SETS.formation}
        kicker="Step 4 · Understanding the path"
        title="Becoming a Holy Rosary Sister is a journey of listening, prayer and growth."
        subtitle="It takes years, and it is meant to. Nothing is promised for life until the very end."
      />

      {/* 7 Stages Grid */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STAGES.map((stage, idx) => {
            const tilt = idx % 2 === 0 ? 'tilt-l' : 'tilt-r';
            return (
              <Link
                key={stage.id}
                href={`/formation/${stage.id}`}
                className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card overflow-hidden shadow-paper-sm flex flex-col group hover:border-[var(--color-accent)] transition-all"
              >
                <div className={`pin ${tilt} aspect-[16/10] overflow-hidden`}>
                  <div
                    className="w-full h-full bg-cover bg-center washed"
                    style={{
                      backgroundImage: `url(${getImageUrl(stage.imageKey, 640)})`,
                    }}
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="step-badge w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-heading text-sm">
                      {stage.stepNumber}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full border border-[var(--color-divider)] text-[var(--color-text-muted)]">
                      {stage.length}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed flex-1">
                    {stage.summary}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-medium text-[var(--color-accent)]">
                    {stage.cta} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Novitiate Quote Banner */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-[#1f1e1c] text-[#f3f1ec] rounded-card p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              The Novitiate Experience
            </span>
            <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl text-white leading-snug">
              “Novitiate was the first time in my life I was given permission to be quiet.”
            </blockquote>
            <p className="text-sm text-neutral-300 font-mono pt-2">
              Sr. [Name], final profession [year]
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="pin tilt-r rounded-2xl overflow-hidden aspect-[4/3]">
              <div
                className="w-full h-full bg-cover bg-center washed"
                style={{
                  backgroundImage: `url(${getImageUrl('novitiate', 640)})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Cross-links (FAQ & Stories) */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/faq"
            className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 hover:border-[var(--color-accent)] transition-all group"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
              Practical questions
            </div>
            <h3 className="font-heading text-2xl text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors mb-3">
              Am I eligible? How long does it take?
            </h3>
            <span className="text-sm font-medium text-[var(--color-accent)] flex items-center gap-1">
              Read answers to common questions <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/stories"
            className="card-hover card-shine bg-[var(--color-accent-light)] border border-[var(--color-divider)] rounded-card p-8 hover:border-[var(--color-accent)] transition-all group"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
              From someone who walked it
            </div>
            <h3 className="font-heading text-2xl text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors mb-3">
              Hear from a Sister who has completed formation
            </h3>
            <span className="text-sm font-medium text-[var(--color-accent)] flex items-center gap-1">
              Read her story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
