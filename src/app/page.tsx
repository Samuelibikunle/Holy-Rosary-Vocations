import React from 'react';
import Link from 'next/link';
import { HeroCarousel } from '@/components/HeroCarousel';
import { HERO_SETS, JOURNEY_STEPS, QUICK_TILES } from '@/data/home';
import { getImageUrl } from '@/data/images';
import { ArrowRight, MessageCircle, PhoneCall } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* 1. Hero Carousel */}
      <HeroCarousel
        imageKeys={HERO_SETS.home}
        kicker="For young women exploring religious life"
        title="Could God be calling you?"
        subtitle="You do not need to be certain. You only need to be curious. This is a place to ask the question honestly, in your own time, with Sisters who once asked it too."
        primaryCta={{ label: 'Start with discernment →', href: '/discernment' }}
        secondaryCta={{ label: 'Talk to a Sister', href: '/contact' }}
      />

      {/* 2. Headline & Two Featured Cards */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="border-t border-b border-[var(--color-divider)] py-6 mb-14 flex flex-col sm:flex-row items-baseline justify-between gap-4">
          <h2 className="font-heading text-2xl md:text-3xl text-[var(--color-text)]">
            Listening, sent, and at home anywhere
          </h2>
          <span className="text-sm md:text-base text-[var(--color-text-muted)] font-mono">
            Missionary Sisters of the Holy Rosary, since 1924
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Time to Reflect Card */}
          <div className="card-hover card-shine bg-[var(--color-accent-light)] border border-[var(--color-divider)] rounded-card p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-3xl mb-3 text-[var(--color-text)]">
                Time to Reflect
              </h3>
              <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                Read short pieces on prayer, community and mission, and discover how the little things in life really matter.
              </p>
            </div>
            <Link
              href="/reflect"
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Go view →
            </Link>
          </div>

          {/* What We Do Card */}
          <div className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 md:p-10 flex flex-col justify-between shadow-paper-sm">
            <div>
              <h3 className="font-heading text-3xl mb-3 text-[var(--color-text)]">
                What we do
              </h3>
              <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                Education, health care, pastoral work and care for children at risk, across fourteen countries.
              </p>
            </div>
            <Link
              href="/ministries"
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Go view →
            </Link>
          </div>
        </div>

        {/* Welcome Section with Pinned Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[var(--color-text)]">
              Welcome to our website
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Whether you know us already or are meeting us for the first time, you are most welcome here.
            </p>
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
              The Missionary Sisters of the Holy Rosary have worked with young people and their families for over a hundred years. Our approach is the one we were given at the beginning: reasonable, prayerful and loving.
            </p>
            <div className="pt-2">
              <Link
                href="/life"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-accent)] text-white font-medium text-sm md:text-base hover:opacity-90 transition-opacity"
              >
                Learn more about us
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="pin tilt-l rounded-2xl overflow-hidden aspect-[4/3] shadow-paper-md">
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

      {/* 3. "In five seconds" 3 Pillars */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-6">
          In five seconds
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 shadow-paper-sm flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-2xl mb-3 text-[var(--color-text)]">
                Who we are
              </h3>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                A missionary congregation of Sisters serving in fourteen countries, in classrooms, clinics, parishes and among people the world overlooks.
              </p>
            </div>
            <Link
              href="/life"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline group"
            >
              Meet the Sisters <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 shadow-paper-sm flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-2xl mb-3 text-[var(--color-text)]">
                What life is like
              </h3>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                Prayer in the morning, work that matters during the day, and a community of women who become family. Ordinary days, given to God.
              </p>
            </div>
            <Link
              href="/stories"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline group"
            >
              Explore community life <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-8 shadow-paper-sm flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-2xl mb-3 text-[var(--color-text)]">
                How to begin
              </h3>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                You begin by asking. A conversation with a Vocation Directress carries no commitment and no obligation, only company on the question.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline group"
            >
              Begin a conversation <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Sister Testimonial Banner */}
      <section className="bg-[#1f1e1c] text-[#f3f1ec] py-20 transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Discerner&apos;s journey
            </span>
            <blockquote className="font-heading text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              “I never imagined God was calling me until someone finally asked me the question out loud.”
            </blockquote>
            <p className="text-sm md:text-base text-neutral-300 font-mono pt-2">
              Sr. [Name], professed 2019 · West Africa Region
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="pin tilt-l rounded-xl overflow-hidden aspect-[3/4]">
              <div
                className="w-full h-full bg-cover bg-center washed"
                style={{
                  backgroundImage: `url(${getImageUrl('sistersYoung', 640)})`,
                }}
              />
            </div>
            <div className="pin tilt-r rounded-xl overflow-hidden aspect-[3/4] mt-6">
              <div
                className="w-full h-full bg-cover bg-center washed"
                style={{
                  backgroundImage: `url(${getImageUrl('firstProfession', 640)})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Why explore a vocation" (4 Cards) */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-3">
          Why explore a vocation with the Holy Rosary Sisters?
        </h2>
        <p className="text-base md:text-lg text-[var(--color-text-muted)] mb-10">
          Four things women tell us they found here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-hover card-shine border border-[var(--color-divider)] bg-[var(--color-accent-light)] rounded-card p-6 flex flex-col">
            <div className="step-badge w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-heading text-lg mb-4">
              01
            </div>
            <h3 className="font-heading text-xl mb-2 text-[var(--color-text)]">
              A mission, not a job
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Wherever the need is greatest, that is where we are sent.
            </p>
          </div>

          <div className="card-hover card-shine border border-[var(--color-divider)] bg-[var(--color-accent-light)] rounded-card p-6 flex flex-col">
            <div className="step-badge w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-heading text-lg mb-4">
              02
            </div>
            <h3 className="font-heading text-xl mb-2 text-[var(--color-text)]">
              An international family
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Sisters from many nations living under one roof, learning one another&apos;s languages and ways.
            </p>
          </div>

          <div className="card-hover card-shine border border-[var(--color-divider)] bg-[var(--color-accent-light)] rounded-card p-6 flex flex-col">
            <div className="step-badge w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-heading text-lg mb-4">
              03
            </div>
            <h3 className="font-heading text-xl mb-2 text-[var(--color-text)]">
              Formation that takes time
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Years of prayerful accompaniment before any lifelong promise is made.
            </p>
          </div>

          <div className="card-hover card-shine border border-[var(--color-divider)] bg-[var(--color-accent-light)] rounded-card p-6 flex flex-col">
            <div className="step-badge w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-heading text-lg mb-4">
              04
            </div>
            <h3 className="font-heading text-xl mb-2 text-[var(--color-text)]">
              Room to ask anything
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Questions about family, health, study or fear are all welcome, and were asked before you.
            </p>
          </div>
        </div>
      </section>

      {/* 6. "Where this journey goes" (5 Steps) */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-3">
          Where this journey goes
        </h2>
        <p className="text-base md:text-lg text-[var(--color-text-muted)] mb-10">
          Five steps, in order. You can pause or stop at any one of them.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {JOURNEY_STEPS.map((step) => (
            <Link
              key={step.n}
              href={step.href}
              className="card-hover card-shine bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-card p-6 hover:border-[var(--color-accent)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="step-badge text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold mb-3">
                  Step 0{step.n}
                </div>
                <h3 className="font-heading text-xl mb-2 text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {step.body}
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-[var(--color-accent)]">
                Explore <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Quick Photo Tiles Grid */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <h2 className="font-heading text-3xl md:text-4xl text-[var(--color-text)] mb-3">
          Find your way around
        </h2>
        <p className="text-base md:text-lg text-[var(--color-text-muted)] mb-8">
          Every part of the discernment experience, in one place.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {QUICK_TILES.map((tile) => (
            <Link
              key={tile.label}
              href={tile.href}
              className="pin rounded-2xl overflow-hidden aspect-[4/3] relative group block"
            >
              <div
                className="w-full h-full bg-cover bg-center washed transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${getImageUrl(tile.imageKey, 640)})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                <span className="font-heading text-lg text-white leading-tight drop-shadow-md">
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-[var(--color-accent)] text-white rounded-card p-8 md:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-paper-lg">
          <div className="max-w-2xl space-y-3 text-center md:text-left">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white">
              If you would like to begin, we would be delighted to hear from you.
            </h2>
            <p className="text-base md:text-lg text-white/90">
              There is no obligation. Just an opportunity to begin a conversation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3.5 w-full md:w-auto flex-shrink-0">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-[var(--color-accent)] font-medium text-center text-base hover:bg-neutral-100 transition-colors shadow-sm"
            >
              Contact the Vocation Directress
            </Link>
            <a
              href="https://wa.me/2347055159331"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/60 text-white font-medium text-center text-base hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
